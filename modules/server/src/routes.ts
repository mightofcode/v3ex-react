import Koa, { Context } from "koa";
import Router = require("koa-router");

const router = new Router();
router.all("/test", async function (ctx: Context) {
  ctx.body = {
    hello: "world",
  };
});

router.all("/a/b", async function (ctx: Context) {
  ctx.body = {
    hello: "world",
  };
});

import authRoute from "./modules/auth/index";
import tabRoute from "./modules/category";
import postRoute from "./modules/post";
import commentRoute from "./modules/comment";

import statRoute from "./modules/stat";

const featureRouters = [
  router,
  authRoute,
  tabRoute,
  postRoute,
  commentRoute,
  statRoute,
];

export default (app: Koa) => {
  for (const router of featureRouters) {
    app.use(router.routes()).use(router.allowedMethods({ throw: true }));
  }
};
