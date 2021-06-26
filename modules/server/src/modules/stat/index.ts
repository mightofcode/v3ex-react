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
import dayjs from "dayjs";

router.all("/stat/hotPosts", async function (ctx: Context) {
  //
  const startTime = dayjs().hour(0).minute(0).second(0).toDate();
  //
  const data = await CommentModel.aggregate([
    {
      $match: {
        createdAt: { $gt: startTime },
      },
    },
    {
      $group: {
        _id: "$post",
        replys: { $sum: 1 },
      },
    },
    {
      $lookup: {
        from: "posts",
        localField: "_id",
        foreignField: "_id",
        as: "post",
      },
    },
    { $sort: { replys: -1 } },
    { $limit: 10 },
  ]);

  let posts: any[] = [];
  data.forEach((v) => {
    if (v.post) {
      v.post.forEach(function (k: any) {
        posts.push(k._id);
      });
    }
  });

  const postDatas = await PostModel.find({
    _id: {
      $in: posts,
    },
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

  ctx.body = {
    items: postDatas,
  };
});

export default router;
