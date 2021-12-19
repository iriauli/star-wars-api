import { useState, useEffect } from "react";
import { GetVehiclesInfo } from "../../api/FetchInfo";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";

function VehiclesId() {
  const params = useParams();
  const vehicleId = params.id;

  const [vehicle, setVehicle] = useState([]);
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetVehiclesInfo(vehicleId)
      .then((data) => {
        setVehicle(data.result);
        setProperties(data.result.properties);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [vehicleId]);

  const { description } = vehicle;
  const {
    name,
    vehicle_class,
    model,
    manufacturer,
    max_atmosphering_speed,
    length,
    crew,
    passengers,
    cargo_capacity,
    consumables,
    cost_in_credits,
  } = properties;

  return (
    <div>
      {error ? (
        <h1>error</h1>
      ) : (
        <div>
          {loading ? (
            <Loader />
          ) : (
            <div>
              <h1>{name}</h1>
              <p>{description}</p>
              <p>
                <span>Vehicle Class: </span>
                {vehicle_class}
              </p>
              <p>
                <span>Model: </span>
                {model}
              </p>
              <p>
                <span>Manufacturer: </span>
                {manufacturer}
              </p>
              <p>
                <span>Max Atmosphering Speed: </span>
                {max_atmosphering_speed}
              </p>
              <p>
                <span>Length: </span>
                {length}
              </p>
              <p>
                <span>Crew: </span>
                {crew}
              </p>
              <p>
                <span>Passengers: </span>
                {passengers}
              </p>
              <p>
                <span>Cargo Capacity: </span>
                {cargo_capacity}
              </p>
              <p>
                <span>Consumables: </span>
                {consumables}
              </p>
              <p>
                <span>Cost In Credits: </span>
                {cost_in_credits}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default VehiclesId;
