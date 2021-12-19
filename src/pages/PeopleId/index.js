import { useState, useEffect } from "react";
import { GetPeopleInfo } from "../../api/FetchInfo";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";

function PeopleId() {
  const params = useParams();
  const PersonId = params.id;

  const [people, setPeople] = useState([]);
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetPeopleInfo(PersonId)
      .then((data) => {
        setPeople(data.result);
        setProperties(data.result.properties);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [PersonId]);

  const { description } = people;
  const {
    name,
    birth_year,
    gender,
    mass,
    height,
    eye_color,
    skin_color,
    hair_color,
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
                <span>Birth Year: </span>
                {birth_year}
              </p>
              <p>
                <span>Gender: </span>
                {gender}
              </p>
              <p>
                <span>Mass: </span>
                {mass}
              </p>
              <p>
                <span>Height: </span>
                {height}
              </p>
              <p>
                <span>Eye Color: </span>
                {eye_color}
              </p>
              <p>
                <span>Skin Color: </span>
                {skin_color}
              </p>
              <p>
                <span>Hair Color: </span>
                {hair_color}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default PeopleId;
