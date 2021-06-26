import { model, Schema, Model, Document } from "mongoose";
import { Post, PostModel } from "./post";
import { User, UserModel } from "./user";
import { CommentModel } from "./comment";

export interface Vote extends Document {
  type: string;
  post: Post;
  author: User;
  comment: Comment;
  count: Number;
}

function transform(doc: Vote, json: any) {}

const VoteSchema: Schema = new Schema(
  {
    type: {
      type: String,
      required: true,
      unique: true,
    },
    count: {
      type: Number,
      required: true,
      unique: false,
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: PostModel.modelName,
      require: false,
      index: false,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: UserModel.modelName,
      require: true,
      index: false,
    },
    comment: {
      type: Schema.Types.ObjectId,
      ref: CommentModel.modelName,
      require: false,
      index: false,
    },
  },
  { timestamps: true, toJSON: { virtuals: true, transform } }
);

VoteSchema.virtual("v").get(function (this: Vote) {
  return "v";
});

export const VoteModel: Model<Vote> = model("User", VoteSchema);
