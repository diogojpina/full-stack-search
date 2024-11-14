import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HotelService } from "../../services";
import { Hotel } from "../../entities";

export default function HotelPage() {
  const params = useParams();

  const [hotel, setHotel] = useState<Hotel>();

  useEffect(() => {
    if (params.id) {
      load(params.id);
    }
  }, []);

  const load = (id: string) => {
    HotelService.get(id)
      .then((hotel) => setHotel(hotel))
      .catch((e) => alert(e));
  };
  return (
    <div className="row height d-flex justify-content-center align-items-center">
      <div className="col-md-6">
        <div className="content">
          <div className="links">
            <Link to="/">Go Back</Link>
          </div>
          <span>
            Chain Name: <strong>{hotel?.chain_name}</strong>
          </span>
          <span>
            Name: <strong>{hotel?.hotel_name}</strong>
          </span>
          <span>
            Address 1: <strong>{hotel?.addressline1}</strong>
          </span>
          <span>
            Address 2: <strong>{hotel?.addressline2}</strong>
          </span>
          <span>
            Zipcode: <strong>{hotel?.zipcode}</strong>
          </span>
          <span>
            City: <strong>{hotel?.city}</strong>
          </span>
          <span>
            State: <strong>{hotel?.state}</strong>
          </span>
          <span>
            Country: <strong>{hotel?.country}</strong>
          </span>
          <span>
            Star Rating <strong>{hotel?.star_rating}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
