import styles from "./Card.module.scss";

const Card = (props) => {
  const { name } = props;

  return (
    <div className={styles.card}>
      <p>{name}</p>
    </div>
  );
};

export default Card;
