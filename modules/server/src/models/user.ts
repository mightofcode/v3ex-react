import { model, Schema, Model, Document } from "mongoose";

export interface User extends Document {
  email: string;
  username: string;
  bio: string;
  nick: string;
  password: string;
  verifyToken: string;
}

function transform(doc: User, json: any) {}

const UserSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: { type: String, required: true },
    nick: String,
    bio: String,
    password: String,
    verifyToken: String,
  },
  { timestamps: true, toJSON: { virtuals: true, transform } }
);

UserSchema.virtual("v").get(function (this: User) {
  return "v";
});

export const UserModel: Model<User> = model("User", UserSchema);
