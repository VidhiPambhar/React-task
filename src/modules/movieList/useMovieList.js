import { getData } from "../../services";

const useMovieList = (endPoint) => {
  const responseData = () =>
    getData(endPoint)
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
