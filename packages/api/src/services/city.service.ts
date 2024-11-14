import { BaseService } from "./base.service";
import { City } from "entities";
import { ObjectId } from "mongodb";

export class CityService extends BaseService {
  public async search(search: string): Promise<City[]> {
    const collection = this.db.collection("cities");
    const filters: any = {};
    if (search) {
      filters["city"] = { $regex: `.*${search}.*`, $options: "si" };
    }
    return await collection.find<City>(filters).toArray();
  }

  public async get(id: string): Promise<City> {
    const collection = this.db.collection("cities");
    const city = await collection.findOne<City>({
      _id: new ObjectId(id),
    });
    if (city === null) {
      throw "City not found!";
    }
    return city;
  }
}
