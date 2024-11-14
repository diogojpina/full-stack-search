import { Hotel } from "../entities";
import { apiClient } from "./api.client";

export class HotelService {
  public static async search(search: string): Promise<Hotel[]> {
    const data = await apiClient(`/hotel?search=${search}`);
    return (await data.json()) as Hotel[];
  }

  public static async get(id: string): Promise<Hotel> {
    const data = await apiClient(`/hotel/${id}`);
    if (data.status === 400) {
      throw "Hotel not found!";
    }
    return (await data.json()) as Hotel;
  }
}
