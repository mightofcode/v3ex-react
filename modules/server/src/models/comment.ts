import { model, Schema, Model, Document } from "mongoose";
import { Post, PostModel } from "./post";
import { User, UserModel } from "./user";

export interface Comment extends Document {
  content: string;
  post: Post;
  author: User;
  uid: string;
}

function transform(doc: Comment, json: any) {}

const CommentSchema: Schema = new Schema(
  {
    content: {
      type: String,
      required: true,
      unique: false,
    },
    uid: {
      type: String,
      required: true,
      unique: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: UserModel.modelName,
      require: true,
      index: false,
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

CommentSchema.virtual("v").get(function (this: Comment) {
  return "v";
});

export const CommentModel: Model<Comment> = model("Comment", CommentSchema);
