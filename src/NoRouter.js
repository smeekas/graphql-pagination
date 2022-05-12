import { gql } from "@apollo/client";
import AllCharacters from "./components/AllCharacters";
import Pagination from "./components/Pagination";
import { useState } from "react";
import { useQuery } from "@apollo/client";
const GET_DATA = gql`
  query ($page: Int = 1) {
    characters(page: $page) {
      info {
        next
        prev
        count
        pages
      }
      results {
        id
        name
        image
      }
    }
  }
`;
function NoRouter() {
  const [curr, setCurr] = useState(1);
  const [pageData, setPageData] = useState({
    curr: 1,
    prev: null,
    next: 2,
    pages: 42,
  });
  const [load, setLoad] = useState(true);
  const { data, loading, refetch } = useQuery(GET_DATA, {
    onCompleted: (completed) => {
      console.log({ ...completed.characters.info });
      setLoad(false);
      setPageData({
        curr: curr,
        prev: completed.characters.info.prev,
        next: completed.characters.info.next,
      });
    },
  });


  const pageChangeHandler = (page) => {
    setLoad(true);
    setCurr(page);
    refetch({
      page: page,
    });
  };
  return (
    <>
      {!load ? (
        <AllCharacters data={data.characters.results} />
      ) : (
        <h1>Loading...</h1>
      )}
      <Pagination
        pagination={pageData}
        curr={curr}
        onChange={pageChangeHandler}
      />
    </>
  );
}
export default NoRouter;
