import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { name, id, route } = props;

  return (
    <div className={styles.card}>
      <Link to={`/${route}/${id}`} asd={name}>
        <p>{name}</p>
      </Link>
    </div>
  );
};

export default Card;
