import { useState, useEffect } from "react";
import { GetStarships } from "../../api/FetchData";
import Loader from "../../components/Loader";
import Card from "../../components/Card";

function Starships() {
  const [starships, setStarships] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetStarships()
      .then((data) => setStarships(data.results))
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
              {starships.map((starship) => (
                <Card
                  key={starship.uid}
                  id={starship.uid}
                  name={starship.name}
                  route="starships"
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Starships;
