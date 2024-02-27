import { APIResponse, Chart, ChartPhoto } from '../data/type';
import { baseAxios } from './baseAxios';

export const getPhotoChart = async (
  sort: 'likes' | 'latest',
  size: number,
  lastPhotoId: number,
) => {
  const {
    data: { result },
  } = await baseAxios.get<APIResponse<Chart<ChartPhoto[]>>>(
    `api/v1/photo/chart?sort=${sort}&size=${size}&lastPhotoId=${lastPhotoId}`,
  );
  
  return result;
};
