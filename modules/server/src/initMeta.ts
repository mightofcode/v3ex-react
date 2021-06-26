import { TabModel } from "./models/tab";
import { CategoryModel } from "./models/category";
import dotenv from "dotenv";
import mongoose from "mongoose";
import chalk from "chalk";

dotenv.config();
const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
  console.error("MONGODB_URI is null", chalk.red("✗"));
  process.exit();
}

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.connection.on("error", () => {
  console.error(
    "%s MongoDB connection error. Please make sure MongoDB is running.",
    chalk.red("✗")
  );
  process.exit();
});

async function initDb() {
  //

  await CategoryModel.create({ name: "JAVA", uid: "java" });
  await CategoryModel.create({ name: "CPP", uid: "cpp" });
  await CategoryModel.create({ name: "设计", uid: "design" });
  //
  await TabModel.create({
    name: "技术",
    uid: "technology",
    categories: ["java", "cpp"],
  });
  await TabModel.create({
    name: "创意",
    uid: "creative",
    categories: ["design"],
  });
}
initDb();
