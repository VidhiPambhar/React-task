import { getData } from "../../services";

const useDetailsPage = (endPoint) => {
  const responseData = () =>
    getData(endPoint)
      .then((res) => {
        if (res?.status === 200) {
          return res?.data
        }
      })
      .catch((error) => error);
  return {
    responseData,
  };
};
export default useDetailsPage;
