import { Db } from "mongodb";
import { CityService, CountryService, HotelService } from "src/services";

export class ServiceContext {
  static instance: ServiceContext;

  public hotelService: HotelService;
  public countryService: CountryService;
  public cityService: CityService;

  public constructor(db: Db) {
    this.hotelService = new HotelService(db);
    this.countryService = new CountryService(db);
    this.cityService = new CityService(db);
  }

  static getInstance(db: Db): ServiceContext {
    if (!ServiceContext.instance) {
      ServiceContext.instance = new ServiceContext(db);
    }
    return ServiceContext.instance;
  }
}
