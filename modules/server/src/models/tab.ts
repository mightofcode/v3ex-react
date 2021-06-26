import { model, Schema, Model, Document } from "mongoose";
import { UserModel } from "./user";
import { Category, CategoryModel } from "./category";

export interface Tab extends Document {
  uid: string;
  name: string;
  categories: string[];
  categoryDocuments: Category[];
}

function transform(doc: Tab, json: any) {}

const TabSchema: Schema = new Schema(
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
    categories: [String],
  },
  { timestamps: true, toJSON: { virtuals: true, transform } }
);

TabSchema.virtual("categoryDocuments", {
  ref: CategoryModel.modelName,
  localField: "categories",
  foreignField: "uid",
});

export const TabModel: Model<Tab> = model("Tab", TabSchema);
