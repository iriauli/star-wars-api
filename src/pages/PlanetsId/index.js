import { useState, useEffect } from "react";
import { GetPlanetsInfo } from "../../api/FetchInfo";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";

function PlanetsId() {
  const params = useParams();
  const PlanetId = params.id;

  const [planet, setPlanet] = useState([]);
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetPlanetsInfo(PlanetId)
      .then((data) => {
        setPlanet(data.result);
        setProperties(data.result.properties);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [PlanetId]);

  const { description } = planet;
  const {
    name,
    population,
    gravity,
    diameter,
    orbital_period,
    rotation_period,
    climate,
    terrain,
    surface_water,
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
                <span>Population: </span>
                {population}
              </p>
              <p>
                <span>Gravity: </span>
                {gravity}
              </p>
              <p>
                <span>Diameter: </span>
                {diameter}
              </p>
              <p>
                <span>Orbital Period: </span>
                {orbital_period}
              </p>
              <p>
                <span>Rotation Period: </span>
                {rotation_period}
              </p>
              <p>
                <span>Climate: </span>
                {climate}
              </p>
              <p>
                <span>Terrain: </span>
                {terrain}
              </p>
              <p>
                <span>Surface Water: </span>
                {surface_water}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default PlanetsId;
