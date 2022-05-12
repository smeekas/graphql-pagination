import styles from "./Pagination.module.css";
function Pagination({ pagination, onChange }) {
  const prev = pagination.prev;
  const next = pagination.next;
  console.log(pagination);
  const prevHandler = () => {
    // onPrev(prev);
    onChange(prev);
  };
  const nextHandler = () => {
    // onNext(next);
    onChange(next);
  };
  const firstHandler = () => {
    onChange(1);
  };
  const lastHandler = () => {
    onChange(42);
  };
  return (
    <div className={styles.pagination}>
      {pagination.curr !== 1 && pagination.curr !== 2 && (
        <>
          {" "}
          <button onClick={firstHandler}>{1}</button>...
        </>
      )}
      {prev && <button onClick={prevHandler}>{prev}</button>}
      <button className={styles.current}>{pagination.curr}</button>
      {next && <button onClick={nextHandler}>{next}</button>}
      {pagination.curr !== 42 && pagination.curr !== 41 && (
        <>
          {"..."}
          <button onClick={lastHandler}>{42}</button>
        </>
      )}
    </div>
  );
}
export default Pagination;
