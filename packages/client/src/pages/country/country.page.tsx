import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CountryService } from "../../services";
import { Country } from "../../entities";

export default function CountryPage() {
  const params = useParams();

  const [country, setCountry] = useState<Country>();

  useEffect(() => {
    if (params.id) {
      load(params.id);
    }
  }, []);

  const load = (id: string) => {
    CountryService.get(id)
      .then((country) => setCountry(country))
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
            Country: <strong>{country?.country}</strong>
          </span>
          <span>
            Iso Code: <strong>{country?.countryisocode}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
