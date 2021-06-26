import { HttpError } from "./HttpError";

export function verifyNotNullParams(body: any, params: string[]) {
  for (let v of params) {
    if (body[v] === null || body[v] === undefined) {
      throw new HttpError(400, { [v]: [`${v} is null`] });
    }
  }
}
