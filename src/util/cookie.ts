import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (name: string, value: string, options?: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
  return cookies.set(name, value, { ...options });
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};

export const removeCookie = (name: string, option?: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
  return cookies.remove(name, { ...option });
};
