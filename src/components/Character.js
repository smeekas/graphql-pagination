import styles from "./Character.module.css";
function Character({ character: data }) {
  return (
    <div className={styles.character}>
      <img className={styles.image} src={data.image} alt={data.id} />
      <h6>{data.name}</h6>
    </div>
  );
}
export default Character;
