import { model, Schema, Model, Document } from "mongoose";

export interface Kv extends Document {
  key: string;
  value: any;
}

function transform(doc: Kv, json: any) {}

const KvSchema: Schema = new Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true,
    },
    value: {
      type: String,
      required: true,
      unique: false,
    },
  },
  { timestamps: true, toJSON: { virtuals: true, transform } }
);

KvSchema.virtual("v").get(function (this: Kv) {
  return "v";
});

export const KvModel: Model<Kv> = model("Kv", KvSchema);
