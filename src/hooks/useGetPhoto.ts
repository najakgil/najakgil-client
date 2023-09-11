import { useQuery } from "@tanstack/react-query";
import { getPhoto } from "../api/photo";

export const useGetPhoto = () => {
  return useQuery(["photo"], getPhoto);
};
