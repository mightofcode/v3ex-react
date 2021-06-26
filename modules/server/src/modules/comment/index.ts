import Router from "koa-router";

const router = new Router();
import { Context } from "koa";
import { HttpError } from "../../utils/HttpError";
import { requireAuth } from "../auth";
import { verifyNotNullParams } from "../../utils/check";
import { User, UserModel } from "../../models/user";
import { CategoryModel } from "../../models/category";
import { Post, PostModel } from "../../models/post";
import { isNullOrUndefined } from "../../utils/util";
import * as KvUtil from "../kv";
import { getCategory, getTab } from "../category";
import { CommentModel } from "../../models/comment";

const nextCommentId = async () => {
  const id: string = await KvUtil.getValueOrDefault("commentId", "1");
  let nid = +id;
  nid += 1;
  await KvUtil.setValue("commentId", nid.toString());
  return nid.toString();
};

router.all("/comment/create", requireAuth, async function (ctx: Context) {
  const { postId, comment } = ctx.request.body;
  verifyNotNullParams(ctx.request.body, ["postId", "comment"]);
  const user = ctx.user;
  const commentId = await nextCommentId();
  //
  const post = await PostModel.findOne({
    uid: postId,
  });
  if (!post) {
    throw new HttpError(400, {
      postId: ["主题不存在"],
    });
  }
  //
  await CommentModel.create({
    uid: commentId,
    content: comment,
    post: post,
    author: ctx.user,
  });
  //
  ctx.body = { commentId: commentId };
});

router.all("/comment/getByPost", async function (ctx: Context) {
  const { postId, page, pageSize } = ctx.request.body;
  verifyNotNullParams(ctx.request.body, ["postId", "page", "pageSize"]);
  const user = ctx.user;
  //
  const post = await PostModel.findOne({
    uid: postId,
  });
  if (!post) {
    throw new HttpError(400, {
      postId: ["主题不存在"],
    });
  }
  //
  const q = {
    post: post._id,
  };
  const comments = await CommentModel.find(q)
    .skip((page - 1) * pageSize)
    .limit(+pageSize)
    .sort({ createdAt: 1 })
    .populate({
      path: "author",
      select: "username",
    });
  const total = await CommentModel.count(q);
  //
  ctx.body = {
    items: comments,
    total,
    page,
    pageSize,
  };
});

router.all("/comment/getByUser", async function (ctx: Context) {
  const { username, page, pageSize } = ctx.request.body;
  verifyNotNullParams(ctx.request.body, ["username", "page", "pageSize"]);
  //
  const member = await UserModel.findOne({ username: username });
  if (!member) {
    throw new HttpError(400, {
      member: ["用户不存在"],
    });
  }
  //
  const q = {
    author: member._id,
  };
  //
  const comments = await CommentModel.find(q)
    .skip((page - 1) * pageSize)
    .limit(+pageSize)
    .sort({ createdAt: -1 })
    .populate({
      path: "author",
      select: "username",
    })
    .populate({
      path: "post",
      select: "title category uid",
      populate: [
        {
          path: "author",
          select: "username",
        },
        {
          path: "category",
          select: "uid name",
        },
      ],
    });
  const total = await CommentModel.count(q);
  //
  ctx.body = {
    items: comments,
    total,
    page,
    pageSize,
  };
});

export default router;
