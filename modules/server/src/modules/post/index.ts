import Router from "koa-router";

const router = new Router();
import { Context } from "koa";
import { HttpError } from "../../utils/HttpError";
import { requireAuth } from "../auth";
import { verifyNotNullParams } from "../../utils/check";
import { UserModel } from "../../models/user";
import { CategoryModel } from "../../models/category";
import { PostModel } from "../../models/post";
import { isNullOrUndefined } from "../../utils/util";
import * as KvUtil from "../kv";
import { getCategory, getTab } from "../category";
import { CommentModel } from "../../models/comment";

const nextPostId = async () => {
  const id: string = await KvUtil.getValueOrDefault("postId", "1");
  let nid = +id;
  nid += 1;
  await KvUtil.setValue("postId", nid.toString());
  return nid.toString();
};

router.all("/post/create", requireAuth, async function (ctx: Context) {
  const { title, content, category } = ctx.request.body;
  verifyNotNullParams(ctx.request.body, ["title", "content", "category"]);

  if (title.length > 100) {
    throw new HttpError(400, {
      title: ["标题必须小于100个字符"],
    });
  }
  if (content.length > 100000) {
    throw new HttpError(400, {
      content: ["正文过长"],
    });
  }

  const user = ctx.user;
  const postId = await nextPostId();
  const categoryModel = await getCategory(category);

  if (!categoryModel) {
    throw new HttpError(400, {
      category: ["未选择板块"],
    });
  }

  console.log("categoryModel", categoryModel);

  //
  await PostModel.create({
    title,
    content,
    uid: postId,
    author: user,
    category: categoryModel,
  });
  ctx.body = { postId: postId };
});

router.all("/post/get", async function (ctx: Context) {
  const { postId } = ctx.request.body;
  verifyNotNullParams(ctx.request.body, ["postId"]);
  const user = ctx.user;
  //
  const post = await PostModel.findOne({
    uid: postId,
  })
    .populate({
      path: "author",
      select: "username",
    })
    .populate({
      path: "category",
      select: "name uid",
    })
    .populate("commentCount");
  //
  if (!post) {
    throw new HttpError(400, {
      postId: ["主题不存在"],
    });
  }
  //
  ctx.body = { post };
});

router.all("/post/list", async function (ctx: Context) {
  const { page, pageSize, tab, category } = ctx.request.body;
  verifyNotNullParams(ctx.request.body, ["page", "pageSize"]);
  const user = ctx.user;
  //
  const q: any = {};
  //
  if (tab) {
    const tabModel = await getTab(tab);
    q.category = { $in: tabModel?.categoryDocuments || [] };
  } else if (category) {
    const categoryModel = await getCategory(category);
    q.category = categoryModel;
  }
  //
  const posts = await PostModel.find(q)
    .skip((page - 1) * pageSize)
    .limit(+pageSize)
    .sort({ createdAt: -1 })
    .populate({
      path: "category",
      select: "name uid",
    })
    .populate({
      path: "author",
      select: "username nick",
    })
    .populate("commentCount");
  //

  const total = await PostModel.count(q);
  ctx.body = {
    items: posts.map((post) => {
      const p = post.toJSON();
      return p;
    }),
    total,
    page,
    pageSize,
  };
});

router.all("/post/member", async function (ctx: Context) {
  const { page, pageSize, username } = ctx.request.body;
  verifyNotNullParams(ctx.request.body, ["page", "pageSize", "username"]);
  const member = await UserModel.findOne({ username: username });
  if (!member) {
    throw new HttpError(400, {
      member: ["用户不存在"],
    });
  }
  //
  const q: any = {};
  q.author = member._id;
  //
  const posts = await PostModel.find(q)
    .skip((page - 1) * pageSize)
    .limit(+pageSize)
    .sort({ createdAt: -1 })
    .populate({
      path: "category",
      select: "name uid",
    })
    .populate({
      path: "author",
      select: "username nick",
    });
  //
  const total = await PostModel.count(q);
  ctx.body = {
    items: posts.map((post) => {
      const p = post.toJSON();
      return p;
    }),
    total,
    page,
    pageSize,
  };
});

export default router;
