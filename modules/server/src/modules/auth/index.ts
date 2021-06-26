import Router from "koa-router";

const router = new Router();
import { Context } from "koa";
import { HttpError } from "../../utils/HttpError";
import argon2 from "argon2";
import { User, UserModel } from "../../models/user";
import { verifyNotNullParams } from "../../utils/check";
import jwt from "jsonwebtoken";
import { Types } from "mongoose";
import { randomBytes } from "crypto";
import { sendVerificationEmail } from "../mail";
import validator from "validator";
const jwtSecretKey = process.env.JWT_SECRET_KEY || "";
if (!jwtSecretKey) {
  console.error(`Environment JWT_SECRET_KEY is not properly config.`);
  process.exit();
}

router.all("/auth/login", async function (ctx: Context) {
  const { username, password } = ctx.request.body;
  if (!username) {
    throw new HttpError(400, {
      username: ["Email or username must be provided"],
    });
  }
  const user = await UserModel.findOne({ username: username });

  if (!user) {
    throw new HttpError(400, {
      username: ["用户名不存在"],
    });
  }
  const verified = await argon2.verify(user.password, password);
  if (!verified) {
    throw new HttpError(400, {
      password: ["密码错误"],
    });
  }
  ctx.cookies.set("token", "", { httpOnly: true, sameSite: "lax" });
  ctx.body = {
    id: user._id,
    username: user.username,
    email: user.email,
    accessToken: encodeToken(user),
  };
});

router.all("/auth/logout", async function (ctx: Context) {
  ctx.cookies.set("auth-token", null);
  ctx.body = true;
});

router.all("/user/profile", requireAuth, async function (ctx: Context) {
  const userId = ctx.user.id;
  const user = await UserModel.findOne({ _id: userId });
  if (!user) {
    throw new HttpError(400, {
      username: ["用户名不存在"],
    });
  }
  ctx.body = {
    username: user.username,
    nick: user.nick,
    email: user.email,
    bio: user.bio,
  };
});

router.all("/member/profile", async function (ctx: Context) {
  const { username } = ctx.request.body;
  verifyNotNullParams(ctx.request.body, ["username"]);
  const member = await UserModel.findOne({ username }, "username createdAt");
  if (!member) {
    throw new HttpError(400, {
      username: ["用户不存在"],
    });
  }
  ctx.body = member;
});

export async function requireAuth(ctx: Context, next: any) {
  let token = null;
  const authorization = ctx.request.headers.authorization;
  if (authorization) {
    const match = authorization.match(/^Bearer (.*)$/);
    if (!match) {
      throw new HttpError(400, "Incorrect authorization header.");
    }
    [, token] = match;
  } else {
    token = ctx.cookies.get("token");
  }
  if (!token) {
    throw new HttpError(401, "Please make sure you are logged in");
  }
  const user = await decodeToken(token);
  ctx.user = user;
  await next();
}

function encodeToken(user: User) {
  const content = {
    id: user._id,
    email: user.email,
    username: user.username,
    iat: Math.floor(Date.now() / 1000),
  };
  return jwt.sign(content, jwtSecretKey, { expiresIn: "7d" });
}

export async function decodeToken(accessToken: string) {
  let decoded: any;
  try {
    decoded = jwt.verify(accessToken, jwtSecretKey);
  } catch (e) {
    throw new HttpError(401, e.message);
  }
  const user = await UserModel.findOne({ _id: Types.ObjectId(decoded.id) });
  if (!user) {
    throw new HttpError(401, "Current user is not exists");
  }
  return user;
}

router.all("/auth/signup", async function (ctx: Context) {
  const { username, email, password, passwordRepeat } = ctx.request.body;
  verifyNotNullParams(ctx.request.body, [
    "username",
    "email",
    "password",
    "passwordRepeat",
  ]);
  if (password !== passwordRepeat) {
    throw new HttpError(400, {
      passwordRepeat: ["密码不一致"],
    });
  }
  let user = await UserModel.findOne({ username: username });
  if (user) {
    throw new HttpError(400, {
      username: ["用户名已存在"],
    });
  }
  user = await UserModel.findOne({ email: email });
  if (user) {
    throw new HttpError(400, {
      email: ["邮箱已存在"],
    });
  }

  if (!username.match(/^[a-zA-Z0-9_]{4,16}$/)) {
    throw new HttpError(400, {
      username: ["用户名格式不合法"],
    });
  }
  if (password.length < 6 || password.length > 36) {
    throw new HttpError(400, {
      password: ["密码需要大于6位"],
    });
  }
  if (!validator.isEmail(email)) {
    throw new HttpError(400, {
      email: ["邮箱格式错误"],
    });
  }

  const hashed = await argon2.hash(password);
  const verifyToken = randomBytes(16).toString("hex");
  await UserModel.create({
    username,
    email,
    password: hashed,
    nick: username,
    verifyToken,
  });
  sendVerificationEmail(username, email, verifyToken);
  ctx.body = true;
});

router.all("/auth/verify", requireAuth, async function (ctx: Context) {
  const { verifyToken } = ctx.request.body;
  verifyNotNullParams(ctx.request.body, ["verifyToken"]);
  const userId = ctx.user.id;
  const user = await UserModel.findOne({
    _id: userId,
    verifyToken: verifyToken,
  });
  if (!user) {
    throw new HttpError(400, {
      verifyToken: ["token error"],
    });
  }
  ctx.body = {};
});

router.all("/user/profile/update", requireAuth, async function (ctx: Context) {
  const { bio } = ctx.request.body;
  verifyNotNullParams(ctx.request.body, ["bio"]);
  const userId = ctx.user.id;
  await UserModel.updateOne(
    {
      _id: userId,
    },
    {
      bio,
    }
  );
  ctx.body = {};
});

router.all("/user/passwd/update", requireAuth, async function (ctx: Context) {
  const { password, passwordNew, passwordNewRepeated } = ctx.request.body;
  verifyNotNullParams(ctx.request.body, [
    "password",
    "passwordNew",
    "passwordNewRepeated",
  ]);
  const userId = ctx.user.id;
  const verified = await argon2.verify(ctx.user.password, password);
  if (!verified) {
    throw new HttpError(400, {
      password: ["密码错误"],
    });
  }
  //
  if (passwordNew !== passwordNewRepeated) {
    throw new HttpError(400, {
      passwordNewRepeated: ["密码不一致"],
    });
  }
  //
  const hashed = await argon2.hash(passwordNew);
  const verifyToken = randomBytes(16).toString("hex");
  await UserModel.updateOne(
    {
      _id: userId,
    },
    {
      password: hashed,
    }
  );
  ctx.body = {};
});

export default router;
