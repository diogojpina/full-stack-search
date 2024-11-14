import { Context } from "src/context";

export class BaseController {
  protected context: Context;

  constructor(context: Context) {
    this.context = context;
  }
}
