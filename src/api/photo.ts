import { APIResponse, Photo } from "../data/type";
import { baseAxios } from "./baseAxios";

export const getPhoto = async () => {
  const {
    data: { result },
  } = await baseAxios.get<APIResponse<Photo[]>>("/photo");

  return result;
};
