import { baseAxios } from "./baseAxios";

export const postLike = (photoId: number, userId: number) => {
  return baseAxios.post(`/photo/like/${photoId}/${userId}`);
};
