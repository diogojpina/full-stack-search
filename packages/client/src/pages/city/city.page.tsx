import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CityService } from "../../services";
import { City } from "../../entities";

export default function CityPage() {
  const params = useParams();

  const [city, setCity] = useState<City>();

  useEffect(() => {
    if (params.id) {
      load(params.id);
    }
  }, []);

  const load = (id: string) => {
    CityService.get(id)
      .then((city) => setCity(city))
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
            City: <strong>{city?.city}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
