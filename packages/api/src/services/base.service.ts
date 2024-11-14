import { Db } from "mongodb";

export class BaseService {
  protected db: Db;

  constructor(db: Db) {
    this.db = db;
  }
}
