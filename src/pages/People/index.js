import { useState, useEffect } from "react";
import { GetPeople } from "../../api/FetchData";
import Loader from "../../components/Loader";
import Card from "../../components/Card";

function People(props) {
  const [people, setPeople] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetPeople()
      .then((data) => setPeople(data.results))
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
              {people.map((person) => (
                <Card key={person.uid} id={person.uid} name={person.name} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default People;
