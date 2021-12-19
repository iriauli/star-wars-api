import { useState, useEffect } from "react";
import { GetStarshipsInfo } from "../../api/FetchInfo";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";

function StarshipsId() {
  const params = useParams();
  const starshipId = params.id;

  const [starship, setStarship] = useState([]);
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetStarshipsInfo(starshipId)
      .then((data) => {
        setStarship(data.result);
        setProperties(data.result.properties);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [starshipId]);

  const { description } = starship;
  const {
    name,
    starship_class,
    model,
    manufacturer,
    max_atmosphering_speed,
    length,
    crew,
    passengers,
    MGLT,
    cargo_capacity,
    consumables,
    cost_in_credits,
    hyperdrive_rating,
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
                <span>Starship Class: </span>
                {starship_class}
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
                <span>MGLT: </span>
                {MGLT}
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
              <p>
                <span>Hypedrive Rating: </span>
                {hyperdrive_rating}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default StarshipsId;
