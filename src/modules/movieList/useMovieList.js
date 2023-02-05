import { apiConst } from "../../constants";
import { getData } from "../../services";

const useMovieList = () => {
  const responseData = () =>
    getData(apiConst.movieList)
      .then((res) => {
        if (res?.status === 200) {
          return res?.data?.results;
        }
      })
      .catch((error) => error);

  return {
    responseData,
  };
};
export default useMovieList;
