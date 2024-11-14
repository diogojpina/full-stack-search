import express from "express";
import { Db } from "mongodb";
import { Context } from "src/context";
import { HotelController } from "src/controllers";
export class RestRoutes {
  public static map(app: express.Application, db: Db): void {
    const context = new Context(db);

    const hotelController = new HotelController(context);
    app.get("/hotel", async (req, res) => hotelController.search(req, res));
  }
}
