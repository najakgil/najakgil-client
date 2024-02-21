import axios from 'axios';
import { getCookie } from '../util/cookie';

export const baseAxios = axios.create({
  baseURL: 'https://najakgil.shop/',
});

baseAxios.interceptors.request.use((config) => {
  const jwtToken = getCookie('jwtToken') as string;

  if (jwtToken) {
    config.headers.Authorization = `Bearer ${jwtToken}`;
  }

  return config;
});
