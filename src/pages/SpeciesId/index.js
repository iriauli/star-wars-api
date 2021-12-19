import { useState, useEffect } from "react";
import { GetSpeciesInfo } from "../../api/FetchInfo";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";

function SpeciesId() {
  const params = useParams();
  const SpecieId = params.id;

  const [specie, setSpecie] = useState([]);
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetSpeciesInfo(SpecieId)
      .then((data) => {
        setSpecie(data.result);
        setProperties(data.result.properties);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [SpecieId]);

  const { description } = specie;
  const {
    name,
    classification,
    average_height,
    average_lifespan,
    designation,
    language,
    eye_colors,
    skin_colors,
    hair_colors,
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
                <span>Classification: </span>
                {classification}
              </p>
              <p>
                <span>Average Height: </span>
                {average_height}
              </p>
              <p>
                <span>Average Lifespan: </span>
                {average_lifespan}
              </p>
              <p>
                <span>Designation: </span>
                {designation}
              </p>
              <p>
                <span>Language: </span>
                {language}
              </p>
              <p>
                <span>Eye Colors: </span>
                {eye_colors}
              </p>
              <p>
                <span>Skin Colors: </span>
                {skin_colors}
              </p>
              <p>
                <span>Hair Colors: </span>
                {hair_colors}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SpeciesId;
