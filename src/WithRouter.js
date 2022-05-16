import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import AllCharacters from "./components/AllCharacters";
import RouterPagination from "./components/RouterPagination";
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
function WithRouter() {
  const { page } = useParams();
  const currPage=Number(page)
  const { data, loading } = useQuery(GET_DATA, {
    variables: {
      page:currPage,
    }
  });
  console.log(data);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <AllCharacters data={data.characters.results} />

      <RouterPagination
        pagination={{ curr: currPage, next: currPage + 1, prev: currPage - 1 }}
      />
    </>
  );
}
export default WithRouter;
