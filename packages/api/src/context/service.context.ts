import { Db } from "mongodb";
import { HotelService } from "src/services";

export class ServiceContext {
  static instance: ServiceContext;

  public hotelService: HotelService;

  public constructor(db: Db) {
    this.hotelService = new HotelService(db);
  }

  static getInstance(db: Db): ServiceContext {
    if (!ServiceContext.instance) {
      ServiceContext.instance = new ServiceContext(db);
    }
    return ServiceContext.instance;
  }
}
