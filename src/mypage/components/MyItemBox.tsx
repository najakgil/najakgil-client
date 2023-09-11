import styled from "styled-components";
import { CardItemList } from "../../home/components/CardItemList";
import MyItem from "./MyItem";

export default function MyItemBox() {
  return (
    <StyledMyItem>
      <MyItemContainer>
        {CardItemList.map((item, index) => (
          <MyItem key={index} src={item.src} />
        ))}
      </MyItemContainer>
    </StyledMyItem>
  );
}

const StyledMyItem = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyItemContainer = styled.div`
  width: 100%;
  height: 689px;
  /* background: green; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px;
  gap: 10px;
  overflow-y: scroll;
`;
