import { APIResponse, Page, PhotoChart } from "../data/type";
import { baseAxios } from "./baseAxios";

export const getPhotoChart = async (
  page: number,
  size: number,
  standard: "likes" | "createdAt"
) => {
  const {
    data: { result },
  } = await baseAxios.get<APIResponse<Page<PhotoChart[]>>>(
    `/photo/chart?page=${page}&size=${size}&standard=${standard}`
  );

  return result;
};
