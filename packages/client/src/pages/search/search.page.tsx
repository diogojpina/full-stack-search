import { ChangeEvent, useState } from "react";
import { City, Country, Hotel } from "../../entities";
import { CityService, CountryService, HotelService } from "../../services";
import ListItem from "../../components/search/list.item";
import useDebounce from "../../utils/debounce";

export default function SearchPage() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [cities, setCities] = useState<City[]>([]);

  const [search, setSearch] = useState("");
  const [showClearBtn, setShowClearBtn] = useState(false);

  const debounceSearch = useDebounce((search: string) => {
    fetchData(search);
  }, 400);

  const changeSearch = async (event: ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    setSearch(search);
    debounceSearch(search);
  };

  const fetchData = async (search: string) => {
    if (search === "") {
      setHotels([]);
      setShowClearBtn(false);
      return;
    }

    const filteredHotels = await HotelService.search(search);
    setHotels(filteredHotels);

    const filteredCountries = await CountryService.search(search);
    setCountries(filteredCountries);

    const filteredCities = await CityService.search(search);
    setCities(filteredCities);

    setShowClearBtn(true);
  };

  const clear = () => {
    setSearch("");
    setShowClearBtn(false);

    setHotels([]);
    setCountries([]);
    setCities([]);
  };

  return (
    <div className="row height d-flex justify-content-center align-items-center">
      <div className="col-md-6">
        <div className="dropdown">
          <div className="form">
            <i className="fa fa-search"></i>
            <input
              type="text"
              className="form-control form-input"
              placeholder="Search accommodation..."
              value={search}
              onChange={changeSearch}
            />
            {showClearBtn && (
              <span className="left-pan" onClick={clear}>
                <i className="fa fa-close"></i>
              </span>
            )}
          </div>
          {showClearBtn && (
            <div className="search-dropdown-menu dropdown-menu w-100 show p-2">
              <>
                <h2>Hotels</h2>
                {hotels.length ? (
                  hotels.map((hotel, index) => (
                    <ListItem
                      key={index}
                      name={hotel.hotel_name}
                      to={`/hotel/${hotel._id}`}
                      icon="fa fa-building mr-2"
                    />
                  ))
                ) : (
                  <p>No hotels matched</p>
                )}
              </>
              <>
                <h2>Countries</h2>
                {countries.length ? (
                  countries.map((country, index) => (
                    <ListItem
                      key={index}
                      name={country.country}
                      to={`/country/${country._id}`}
                      icon="fa fa-globe mr-2"
                    />
                  ))
                ) : (
                  <p>No countries matched</p>
                )}
              </>
              <>
                <h2>Cities</h2>
                {cities.length ? (
                  cities.map((city, index) => (
                    <ListItem
                      key={index}
                      name={city.city}
                      to={`/city/${city._id}`}
                      icon="fa fa-map-marker mr-2"
                    />
                  ))
                ) : (
                  <p>No cities matched</p>
                )}
              </>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
