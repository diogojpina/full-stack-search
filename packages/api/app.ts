import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { Db, MongoClient } from "mongodb";
import { RestRoutes } from "src/routes/rest.routes";

dotenv.config();

export class App {
  public express: express.Application;
  public db: Db | undefined;

  public constructor() {
    this.express = express();
    this.middlewares();
    this.database();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private async database() {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is not set");
    const DATABASE_URL = process.env.DATABASE_URL;
    const mongoClient = new MongoClient(DATABASE_URL);
    try {
      mongoClient.connect();
      console.log("Successfully connected to MongoDB!");

      this.db = mongoClient.db();
      this.routes(this.db);
    } catch (e) {
      throw new Error("Failed to connect to MongoDB!");
    }
  }

  private routes(db: Db): void {
    RestRoutes.map(this.express, db);
  }
}

if (process.env.NODE_ENV !== "production" && !process.env.DATABASE_URL) {
  await import("./db/startAndSeedMemoryDB");
}

export default new App().express;
