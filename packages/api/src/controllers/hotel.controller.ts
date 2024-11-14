import { Request, Response } from "express";
import { BaseController } from "./base.controller";

export class HotelController extends BaseController {
  public async search(req: Request, res: Response): Promise<Response> {
    const search = req.query?.search as string;
    const hotels = await this.context.Services.hotelService.search(search);
    return res.json(hotels);
  }
}
