import { useState, useEffect } from "react";
import { GetFilmsInfo } from "../../api/FetchInfo";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";

function FilmsId() {
  const params = useParams();
  const id = params.id;

  const [films, setFilms] = useState([]);
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetFilmsInfo(id)
      .then((data) => {
        setFilms(data.result);
        setProperties(data.result.properties);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  const { description } = films;
  const { title, director, producer, release_date, opening_crawl } = properties;

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
              <h1>{title}</h1>
              <p>{description}</p>
              <p>
                <span>Director: </span>
                {director}
              </p>
              <p>
                <span>Producer: </span>
                {producer}
              </p>
              <p>
                <span>Release Date: </span>
                {release_date}
              </p>
              <p>
                <span>Opening Crawl: </span>
                {opening_crawl}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default FilmsId;
