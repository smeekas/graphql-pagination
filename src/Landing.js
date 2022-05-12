import { Link } from "react-router-dom";
import styles from "./Landing.module.css";
function Landing() {
  return (
    <div className={styles.landing}>
      <Link className={styles.link} to="/norouter">
        Pagination without router
      </Link>
      <Link className={styles.link} to="/withrouter">
        Pagination router
      </Link>
    </div>
  );
}
export default Landing;
