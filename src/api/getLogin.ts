import { APIResponse } from '../data/type';
import { baseAxios } from './baseAxios';

export const getLogin = async (code: string) => {
  const {
    data: { result },
  } = await baseAxios.get<APIResponse<{ jwt: string; userId: number; message: string }>>(
    `api/v1/kakao?code=${code}`,
  );
  return result;
};
