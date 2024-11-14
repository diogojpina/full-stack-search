import { City } from "../entities";
import { apiClient } from "./api.client";

export class CityService {
  public static async search(search: string): Promise<City[]> {
    const data = await apiClient(`/city?search=${search}`);
    return (await data.json()) as City[];
  }

  public static async get(id: string): Promise<City> {
    const data = await apiClient(`/city/${id}`);
    if (data.status === 400) {
      throw "City not found!";
    }
    return (await data.json()) as City;
  }
}
