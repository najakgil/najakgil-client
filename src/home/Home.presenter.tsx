import styled from "styled-components";
import { useState } from "react";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import CardItem from "./components/CardItem";
import { CardItemList } from "./components/CardItemList";
import { PhotoChart } from "../data/type";
import { useQuery } from "react-query";
import { getPhotoChart } from "../api/photoChart";
// import { postUploadPhoto } from "../api/uploadPhoto";

const HomeUI: React.FC = () => {
  const { data, isLoading, isError } = useQuery<PhotoChart[]>(
    "get-photo-chart",
    () => getPhotoChart(),
    // () => postUploadPhoto()
  );

  if (isError) {
    console.log("Error while get Fortune Data.");
  }
  if (isLoading) {
    console.log("Loading get Fortune Data...");
  }
  if (data) {
    console.log("get fortune success ====> ", data);
  }

  // 정렬 : 최신순 & 인기순
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState("인기순");
  const handleItemClick = (itemText: string) => {
    setSelectedItem(itemText);
  };

  return (
    <>
      <StyledHome>
        {/* <div>{imgURL}</div> */}
        <Header />
        {/* 정렬 */}
        <FilterBox>
          <FilterButton onClick={() => setIsExpanded(!isExpanded)}>
            {selectedItem}
            <img alt="toggle" src="/assets/icon/toggle.svg" />
          </FilterButton>
          {isExpanded && (
            <ToggleContainer>
              <ToggleItem
                onClick={() => {
                  handleItemClick("인기순");
                  setIsExpanded(false);
                }}
              >
                인기순
              </ToggleItem>
              <ToggleItem
                onClick={() => {
                  handleItemClick("최신순");
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
          {selectedItem === "인기순" && (
            <PopularityContainer>
              {CardItemList.map((item, index) => (
                <CardItem key={index} src={item.src} />
              ))}
            </PopularityContainer>
          )}
          {selectedItem === "최신순" && (
            <LatestContainer>최신순</LatestContainer>
          )}
        </CardContainer>
        <BottomNav type={"home"} />
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
  background: red;
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
  width: 360px;
  height: 640px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: pink;
  margin: 0;
`;

const PopularityContainer = styled.div`
  width: 100%;
  height: 640px;
  background: green;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px;
  gap: 10px;
  overflow-y: scroll;
`;

const LatestContainer = styled.div`
  height: 640px;
  background: blue;
`;

export default HomeUI;
