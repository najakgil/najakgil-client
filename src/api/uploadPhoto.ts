import { baseAxios } from "./baseAxios";

export const postUploadPhoto = async () => {
  const response = await baseAxios
    .get("/api/v1/photo/upload")
    .then((response) => response.data.data);
  console.log(response);
  return response;
};
