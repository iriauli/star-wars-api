import { useState, useEffect } from "react";
import { GetFilms } from "../../api/FetchData";
import Loader from "../../components/Loader";
import Card from "../../components/Card";

function Films() {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetFilms()
      .then((data) => setFilms(data.result))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

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
              {films.map((film) => (
                <Card
                  key={film.uid}
                  id={film.uid}
                  name={film.properties.title}
                  route="films"
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Films;
