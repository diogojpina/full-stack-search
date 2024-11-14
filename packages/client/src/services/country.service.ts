import { Country } from "../entities";
import { apiClient } from "./api.client";

export class CountryService {
  public static async search(search: string): Promise<Country[]> {
    const data = await apiClient(`/country?search=${search}`);
    return (await data.json()) as Country[];
  }

  public static async get(id: string): Promise<Country> {
    const data = await apiClient(`/country/${id}`);
    if (data.status === 400) {
      throw "Country not found!";
    }
    return (await data.json()) as Country;
  }
}
