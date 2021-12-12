import { useState, useEffect } from "react";
import { GetPlanets } from "../../api/FetchData";
import Loader from "../../components/Loader";
import Card from "../../components/Card";

function Planets(props) {
  const [planets, setPlanets] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetPlanets()
      .then((data) => setPlanets(data.results))
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
              {planets.map((planet) => (
                <Card key={planet.uid} id={planet.uid} name={planet.name} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Planets;
