import { ObjectId } from "mongodb";
import { BaseService } from "./base.service";
import { Hotel } from "src/entities";

export class HotelService extends BaseService {
  public async search(search: string): Promise<Hotel[]> {
    const collection = this.db.collection("hotels");
    const filters: any = {};
    if (search) {
      filters["$or"] = [
        { chain_name: { $regex: `.*${search}.*`, $options: "si" } },
        { hotel_name: { $regex: `.*${search}.*`, $options: "si" } },
        { city: { $regex: `.*${search}.*`, $options: "si" } },
        { country: { $regex: `.*${search}.*`, $options: "si" } },
      ];
    }
    return await collection.find<Hotel>(filters).toArray();
  }

  public async get(id: string): Promise<Hotel> {
    const collection = this.db.collection("hotels");
    const hotel = await collection.findOne<Hotel>({
      _id: new ObjectId(id),
    });
    if (hotel === null) {
      throw "Hotel not found!";
    }
    return hotel;
  }
}
