import { APIResponse, Page, PhotoChart } from "../data/type";
import { baseAxios } from "./baseAxios";

export const getPhotoChart = async (
  page: number,
  size: number,
  standard: "likes" | "createdAt",
  userId: number,
) => {
  const {
    data: { result },
  } = await baseAxios.get<APIResponse<Page<PhotoChart[]>>>(
    `/photo/chart?page=${page}&size=${size}&standard=${standard}&userId=${userId}`
  );

  return result;
};
