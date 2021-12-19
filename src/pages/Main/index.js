import styles from "./Main.module.scss";

function Main() {
  return (
    <div className={styles.main}>
      <img src="/logo.png" width="200px" height="200px" alt="img" />
      <h1>The Star Wars API</h1>
      <p>
        Fetching info about people, films, starships, vehicles, species and
        planets from Star Wars API.
      </p>
    </div>
  );
}

export default Main;
