import { Kv, KvModel } from "../../models/kv";

export async function getValueOrDefault(k: string, def: any) {
  if (k === null || k === undefined) {
    throw new Error("getValueOrDefault null");
  }
  const kv = await KvModel.findOne({ key: k });
  if (!kv) {
    return def;
  }
  return kv.value;
}

export async function getValue(k: string) {
  if (k === null || k === undefined) {
    throw new Error("getValue null");
  }
  const kv = await KvModel.findOne({ key: k });
  if (!kv) {
    return null;
  }
  return kv.value;
}

export async function setValue(k: string, v: any) {
  if (k === null || k === undefined) {
    throw new Error("getValueOrDefault null");
  }
  const kv = await KvModel.findOne({ key: k });
  if (kv == null) {
    await KvModel.create({ key: k, value: v });
  } else {
    const count = await KvModel.updateOne({ key: k }, { value: v });
  }
}
