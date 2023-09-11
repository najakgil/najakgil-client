import styled from "styled-components";
import { useCallback, useState } from "react";
import Header from "../components/Header";
import CardItem from "./components/CardItem";
import { Standard } from "../data/type";
import { useGetPhotoChart } from "../hooks/useGetPhotoChart";
import { useIntersect } from "../hooks/useIntersect";

type FilterType = {
  type: Standard;
  name: string;
};

const filter: { [key in Standard]: FilterType } = {
  likes: {
    type: "likes",
    name: "인기순",
  },
  createdAt: {
    type: "createdAt",
    name: "최신순",
  },
};

const HomeUI: React.FC = () => {
  // 정렬 : 최신순 & 인기순
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState<FilterType>(filter.likes);

  const { data, fetchNextPage, isLoading, hasNextPage } = useGetPhotoChart(
    selectedItem.type
  );

  const onIntersect = useCallback(async () => {
    if (hasNextPage && !isLoading) {
      await fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isLoading]);

  const target = useIntersect(onIntersect, {
    threshold: 0.7,
  });

  return (
    <>
      <StyledHome>
        {/* <div>{imgURL}</div> */}
        <Header />
        {/* 정렬 */}
        <FilterBox>
          <FilterButton onClick={() => setIsExpanded(!isExpanded)}>
            {selectedItem.name}
            <img alt="toggle" src="/assets/icon/toggle.svg" />
          </FilterButton>
          {isExpanded && (
            <ToggleContainer>
              <ToggleItem
                onClick={() => {
                  setSelectedItem(filter.likes);
                  setIsExpanded(false);
                }}
              >
                인기순
              </ToggleItem>
              <ToggleItem
                onClick={() => {
                  setSelectedItem(filter.createdAt);
                  setIsExpanded(false);
                }}
              >
                최신순
              </ToggleItem>
            </ToggleContainer>
          )}
        </FilterBox>
        {/* 인기순 & 최신순 페이지 */}
        <CardContainer>
          {data?.pages?.map((page) =>
            page?.content?.map((photoChart) => (
              <CardItem key={photoChart.photo_id} src={photoChart.imgUrl} />
            ))
          )}
          <div ref={target}></div>
        </CardContainer>
      </StyledHome>
    </>
  );
};

const StyledHome = styled.div`
  width: 360px;
  height: 600px;
  position: fixed;
  right: 0;
  left: 0;
  margin: 0 auto;
  top: 54px;
  /* background: red; */
`;

// 정렬
const FilterBox = styled.div`
  width: 360px;
  height: 48px;
  border-bottom: 8px solid #f0f0f0;
  padding: 6px 0px 6px 11px;
`;

const FilterButton = styled.button`
  width: 68px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #000;
  text-align: center;
  font-family: Noto Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;

const ToggleContainer = styled.div`
  z-index: 20;
  position: fixed;
  width: 68px;
  height: 62px;
  background-color: white;
  padding: 4px 6px;
  border-radius: 3.5px;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);
`;

const ToggleItem = styled.div`
  color: #000;
  font-family: Noto Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin: 5px 0px;
`;

// 인기순 & 최신순 페이지
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 640px;
  padding: 10px;
  margin: 0;
  gap: 10px;
  overflow-y: scroll;
`;

export default HomeUI;
