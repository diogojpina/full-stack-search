import { BaseService } from "./base.service";
import { Country } from "entities";
import { ObjectId } from "mongodb";

export class CountryService extends BaseService {
  public async search(search: string): Promise<Country[]> {
    const collection = this.db.collection("countries");
    const filters: any = {};
    if (search) {
      filters["$or"] = [
        { country: { $regex: `.*${search}.*`, $options: "si" } },
        { countryisocode: { $regex: `.*${search}.*`, $options: "si" } },
      ];
    }
    return await collection.find<Country>(filters).toArray();
  }

  public async get(id: string): Promise<Country> {
    const collection = this.db.collection("countries");
    const country = await collection.findOne<Country>({
      _id: new ObjectId(id),
    });
    if (country === null) {
      throw "Country not found!";
    }
    return country;
  }
}
