import { Hotel } from "../entities";
import { apiClient } from "./api.client";

export class HotelService {
  public static async search(search: string): Promise<Hotel[]> {
    const hotelData = await apiClient(`/hotel?search=${search}`);
    return (await hotelData.json()) as Hotel[];
  }

  public static async get(id: string): Promise<Hotel> {
    const hotelData = await apiClient(`/hotel/${id}`);
    return (await hotelData.json()) as Hotel;
  }
}
