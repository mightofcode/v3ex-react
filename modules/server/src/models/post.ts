import { model, Schema, Model, Document } from "mongoose";
import { User, UserModel } from "./user";
import { Category, CategoryModel } from "./category";

export interface Post extends Document {
  uid: string;
  title: string;
  author: User;
  content: string;
  category: Category;
  viewCount: number;
}

function transform(doc: Post, json: any) {}

const PostSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    uid: {
      type: String,
      require: false,
      unique: true,
    },
    content: {
      type: String,
      required: true,
    },
    viewCount: {
      type: Number,
      required: false,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: UserModel.modelName,
      require: false,
      index: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: CategoryModel.modelName,
      require: false,
      index: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true, transform } }
);

PostSchema.virtual("v").get(function (this: Post) {
  return "v";
});

PostSchema.virtual("commentCount", {
  ref: "Comment",
  localField: "_id",
  foreignField: "post",
  count: true,
});

export const PostModel: Model<Post> = model("Post", PostSchema);
