import { APIResponse, Login } from "../data/type";
import { baseAxios } from "./baseAxios";

export const getLogin = async (code: string) => {
  const { data } = await baseAxios.get<APIResponse<Login>>(
    `api/oauth/kakao?code=${code}`
  );

  return data.result;
};
