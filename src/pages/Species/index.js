import { useState, useEffect } from "react";
import { GetSpecies } from "../../api/FetchData";
import Loader from "../../components/Loader";
import Card from "../../components/Card";

function Species() {
  const [species, setSpecies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetSpecies()
      .then((data) => setSpecies(data.results))
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
              {species.map((specie) => (
                <Card
                  key={specie.uid}
                  id={specie.uid}
                  name={specie.name}
                  route="species"
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Species;
