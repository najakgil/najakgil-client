import axios from "axios";

export const baseAxios = axios.create({
  baseURL: "http://15.164.68.208:8080/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  },
});
