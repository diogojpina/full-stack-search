import { Request, Response } from "express";
import { BaseController } from "./base.controller";

export class CountryController extends BaseController {
  public async search(req: Request, res: Response): Promise<Response> {
    const search = req.query?.search as string;
    const countries = await this.context.Services.countryService.search(search);
    return res.json(countries);
  }

  public async get(req: Request, res: Response): Promise<Response> {
    try {
      const id = req.params.id || "";
      const country = await this.context.Services.countryService.get(id);
      return res.json(country);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}
