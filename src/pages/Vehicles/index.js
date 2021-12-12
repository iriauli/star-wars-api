import { useState, useEffect } from "react";
import { GetVehicles } from "../../api/FetchData";
import Loader from "../../components/Loader";
import Card from "../../components/Card";

function Vehicles(props) {
  const [vehicles, setVehicles] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetVehicles()
      .then((data) => setVehicles(data.results))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {error ? (
        <h1>{error}</h1>
      ) : (
        <div>
          {loading ? (
            <Loader />
          ) : (
            <div>
              {vehicles.map((vehicle) => (
                <Card key={vehicle.uid} id={vehicle.uid} name={vehicle.name} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Vehicles;
