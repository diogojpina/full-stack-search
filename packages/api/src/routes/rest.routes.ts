import express from "express";
import { Db } from "mongodb";
import { Context } from "src/context";
import {
  CityController,
  CountryController,
  HotelController,
} from "src/controllers";
export class RestRoutes {
  public static map(app: express.Application, db: Db): void {
    const context = new Context(db);

    const hotelController = new HotelController(context);
    app.get("/hotel", async (req, res) => hotelController.search(req, res));
    app.get("/hotel/:id", (req, res) => hotelController.get(req, res));

    const countryController = new CountryController(context);
    app.get("/country", async (req, res) => countryController.search(req, res));
    app.get("/country/:id", (req, res) => countryController.get(req, res));

    const cityController = new CityController(context);
    app.get("/city", async (req, res) => cityController.search(req, res));
    app.get("/city/:id", (req, res) => cityController.get(req, res));
  }
}
