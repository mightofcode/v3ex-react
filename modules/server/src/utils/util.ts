export interface KeyValue<T = any> {
  [key: string]: T;
}

export function isNullOrUndefined(k: any) {
  return k === null || k === undefined;
}
