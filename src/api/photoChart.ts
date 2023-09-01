import { baseAxios } from "./baseAxios";

export const getPhotoChart = async () => {
  const response = await baseAxios
    .get("/api/v1/photo/chart")
    .then((response) => response.data.data);
  console.log(response);
  return response;
};
