import { Request, Response } from "express";
import { BaseController } from "./base.controller";

export class CityController extends BaseController {
  public async search(req: Request, res: Response): Promise<Response> {
    const search = req.query?.search as string;
    const cities = await this.context.Services.cityService.search(search);
    return res.json(cities);
  }

  public async get(req: Request, res: Response): Promise<Response> {
    try {
      const id = req.params.id || "";
      const city = await this.context.Services.cityService.get(id);
      return res.json(city);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}
