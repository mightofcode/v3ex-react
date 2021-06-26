import { KeyValue } from "./util";

export type StructureErrorMessage = KeyValue<string[]>;

export class HttpError extends Error {
  status: number;
  data: StructureErrorMessage | undefined;

  constructor(status: number, message: string | StructureErrorMessage) {
    if (typeof message === "string") {
      super(message);
    } else {
      const msg = message[Object.keys(message)[0]]?.[0];
      super(msg);
      this.data = message;
    }

    this.status = status;
  }
}
