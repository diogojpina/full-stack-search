import { Request, Response } from "express";
import { BaseController } from "./base.controller";

export class HotelController extends BaseController {
  public async search(req: Request, res: Response): Promise<Response> {
    const search = req.query?.search as string;
    const hotels = await this.context.Services.hotelService.search(search);
    return res.json(hotels);
  }

  public async get(req: Request, res: Response): Promise<Response> {
    try {
      const id = req.params.id || "";
      const hotel = await this.context.Services.hotelService.get(id);
      return res.json(hotel);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}
