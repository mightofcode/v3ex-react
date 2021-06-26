import { CategoryModel } from "../../models/category";
import { TabModel } from "../../models/tab";
import { requireAuth } from "../auth";
import { Context } from "koa";
import { verifyNotNullParams } from "../../utils/check";
import { PostModel } from "../../models/post";
import Router from "koa-router";
import { HttpError } from "../../utils/HttpError";
import { UserModel } from "../../models/user";
const router = new Router();

export const getCategory = async (uid: string) => {
  return await CategoryModel.findOne({ uid });
};

export const getTab = async (uid: string) => {
  return await TabModel.findOne({ uid }).populate("categoryDocuments");
};

router.all("/tab/getAll", async function (ctx: Context) {
  const user = ctx.user;
  const tabs = await TabModel.find().populate("categoryDocuments");
  ctx.body = { tabs };
});

router.all("/category/get", async function (ctx: Context) {
  const { category } = ctx.request.body;
  verifyNotNullParams(ctx.request.body, ["category"]);

  const categoryModel = await CategoryModel.findOne({
    uid: category,
  });
  if (!categoryModel) {
    throw new HttpError(400, {
      category: ["category invalid"],
    });
  }

  const tabModel = await TabModel.findOne({
    categories: {
      $all: [category],
    },
  });
  if (!tabModel) {
    throw new HttpError(400, {
      tab: ["tab invalid"],
    });
  }

  ctx.body = {
    tab: tabModel,
    category: categoryModel,
  };
});

export default router;
