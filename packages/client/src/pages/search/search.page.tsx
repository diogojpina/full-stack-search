import { ChangeEvent, useState } from "react";
import { Hotel } from "../../entities";
import { HotelService } from "../../services";
import ListItem from "../../components/search/list.item";

export default function SearchPage() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [showClearBtn, setShowClearBtn] = useState(false);

  const fetchData = async (event: ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    if (search === "") {
      setHotels([]);
      setShowClearBtn(false);
      return;
    }

    const filteredHotels = await HotelService.search(search);
    setHotels(filteredHotels);

    setHotels(filteredHotels);
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
              onChange={fetchData}
            />
            {showClearBtn && (
              <span className="left-pan">
                <i className="fa fa-close"></i>
              </span>
            )}
          </div>
          {!!hotels.length && (
            <div className="search-dropdown-menu dropdown-menu w-100 show p-2">
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
              <h2>Countries</h2>
              <p>No countries matched</p>
              <h2>Cities</h2>
              <p>No cities matched</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
