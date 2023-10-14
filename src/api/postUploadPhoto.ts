import { baseAxios } from "./baseAxios";

export const postUploadPhoto = async (userId: number) => {
  return baseAxios.post(`/photo/upload/${userId}`);
};
