import fs from "fs";
import path from "path";
import Handlebars from "handlebars";
import camelCase from "camelcase";
import { KeyValue } from "../../../utils/util";

Handlebars.registerHelper("isdefined", (v) => v !== undefined);
Handlebars.registerHelper("eq", function (...args) {
  return args.slice(0, -1).every((arg) => args[0] == arg);
});

const templateFolder = path.join(__dirname, process.env.APP_LANGUAGE || "");

const templates = fs
  .readdirSync(templateFolder)
  .filter((f) => f.endsWith(".hbs"))
  .map((f) => ({
    name: camelCase(f.slice(0, f.lastIndexOf("."))),
    template: Handlebars.compile(
      fs.readFileSync(path.join(templateFolder, f), { encoding: "utf8" })
    ),
  }))
  .reduce((d, t) => {
    d[t.name] = t.template;
    return d;
  }, {} as KeyValue<HandlebarsTemplateDelegate>);

export default templates;
