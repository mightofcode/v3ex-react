import { model, Schema, Model, Document } from "mongoose";
import { Post, PostModel } from "./post";
import { User, UserModel } from "./user";

export interface Append extends Document {
  content: string;
  post: Post;
}

function transform(doc: Comment, json: any) {}
const AppendSchema: Schema = new Schema(
  {
    content: {
      type: String,
      required: true,
      unique: false,
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: PostModel.modelName,
      require: false,
      index: false,
    },
  },
  { timestamps: true, toJSON: { virtuals: true, transform } }
);

AppendSchema.virtual("v").get(function (this: Append) {
  return "v";
});

export const AppendModel: Model<Append> = model("Append", AppendSchema);
