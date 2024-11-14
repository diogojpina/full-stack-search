import { City } from "../entities";
import { apiClient } from "./api.client";

export class CityService {
  public static async search(search: string): Promise<City[]> {
    const hotelData = await apiClient(`/city?search=${search}`);
    return (await hotelData.json()) as City[];
  }

  public static async get(id: string): Promise<City> {
    const hotelData = await apiClient(`/city/${id}`);
    return (await hotelData.json()) as City;
  }
}
