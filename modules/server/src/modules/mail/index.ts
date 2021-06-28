import Core from "@alicloud/pop-core";
import { KeyValue } from "../../utils/util";
import MarkdownIt from "markdown-it";
import templates from "./templates";
import { HttpError } from "../../utils/HttpError";
const util = require("util");
const client = new Core({
  accessKeyId: process.env.ALI_MAIL_KEY || "",
  accessKeySecret: process.env.ALI_MAIL_SECRET || "",
  endpoint: "https://dm.aliyuncs.com",
  apiVersion: "2015-11-23",
});

const sendMail = ({ to, text, html, subject }: KeyValue) => {
  const requestOption = {
    method: "GET",
  };
  return client.request(
    "SingleSendMail",
    {
      AccountName: process.env.ALI_MAIL_FROM,
      FromAlias: "V3EX",
      AddressType: 1,
      ReplyToAddress: false,
      ToAddress: to,
      TextBody: text,
      HtmlBody: html,
      Subject: subject,
    },
    requestOption
  );
};
const md = new MarkdownIt();
export const sendVerificationEmail = (
  username: any,
  email: any,
  verifyToken: any
) => {
  console.log("sendVerificationEmail", username, email, verifyToken);
  const text = templates.verify({
    username,
    email,
    verifyToken,
    siteUrl: process.env.SITE_URL,
  });

  const msg = {
    html: text,
    subject: `${process.env.SITE_NAME}邮箱验证`,
    text,
    to: email,
  };
  sendMail(msg).catch((e: Error) => {
    console.error("Reset password Email not sent", e);
  });
};
