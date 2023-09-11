import { baseAxios } from "./baseAxios";

export const getLogin = (code: string) => {
  // return baseAxios.get(`/api/v1/oauth/kakao?code=${code}`);
  return baseAxios.get(`/oauth2/authorization/kakao?code=${code}`);
};
