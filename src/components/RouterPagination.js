import React from "react";
import styles from "./Pagination.module.css";
import { Link } from "react-router-dom";
function RouterPagination({ pagination }) {
  return (
    <div className={styles.pagination}>
      {pagination.curr !== 1 && pagination.curr !== 2 && (
        <>
          {" "}
          <Link to={`/withrouter/1`}>
            <button>{1}</button>
          </Link>
          ...
        </>
      )}
      {pagination.prev !== -1 && (
        <Link to={`/withrouter/${pagination.prev}`}>
          <button>{pagination.prev}</button>
        </Link>
      )}
      <Link to={``}>
        <button className={styles.current}>{pagination.curr}</button>
      </Link>
      {pagination.next !== 43 && (
        <Link to={`/withrouter/${pagination.next}`}>
          <button>{pagination.next}</button>
        </Link>
      )}
      {pagination.curr !== 42 && pagination.curr !== 41 && (
        <>
          {"..."}
          <Link to={`/withrouter/42`}>
            <button>{42}</button>
          </Link>
        </>
      )}
    </div>
  );
}
export default RouterPagination;
