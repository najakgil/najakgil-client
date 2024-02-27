import { APIResponse, Chart, ChartPhoto } from '../data/type';
import { baseAxios } from './baseAxios';

export const postLikes = async (photoId: number, userId: number) => {
  const data = await baseAxios.post<APIResponse<Chart<ChartPhoto[]>>>('api/v1/photo/likes', {
    photoId,
    userId,
  });

  return data;
};
