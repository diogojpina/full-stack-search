import { Db } from "mongodb";
import { ServiceContext } from "./service.context";

export class Context {
  private services: ServiceContext;

  constructor(db: Db) {
    this.services = ServiceContext.getInstance(db);
  }

  public get Services(): ServiceContext {
    return this.services;
  }
}
