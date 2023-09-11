import { useInfiniteQuery } from "@tanstack/react-query";
import { getPhotoChart } from "../api/photoChart";
import { Standard } from "../data/type";

export const useGetPhotoChart = (standard: Standard) => {
  return useInfiniteQuery(
    ["photo"],
    ({ pageParam = 0 }) => getPhotoChart(pageParam, 3, standard),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.last ? undefined : lastPage.number + 1;
      },
    }
  );
};
