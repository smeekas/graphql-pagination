import styles from "./AllCharacter.module.css";
import Character from "./Character";

function AllCharacters({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {data.map((item) => {
          return <Character character={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}
export default AllCharacters;
