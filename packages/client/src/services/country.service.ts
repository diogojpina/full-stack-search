import { Country } from "../entities";
import { apiClient } from "./api.client";

export class CountryService {
  public static async search(search: string): Promise<Country[]> {
    const hotelData = await apiClient(`/country?search=${search}`);
    return (await hotelData.json()) as Country[];
  }

  public static async get(id: string): Promise<Country> {
    const hotelData = await apiClient(`/country/${id}`);
    return (await hotelData.json()) as Country;
  }
}
