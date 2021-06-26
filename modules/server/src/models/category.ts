import { model, Schema, Model, Document } from "mongoose";
import { UserModel } from "./user";

export interface Category extends Document {
  uid: string;
  name: string;
}

function transform(doc: Category, json: any) {}

const CategorySchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: false,
    },
    uid: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true, transform } }
);

CategorySchema.virtual("v").get(function (this: Category) {
  return "v";
});

export const CategoryModel: Model<Category> = model("Category", CategorySchema);
