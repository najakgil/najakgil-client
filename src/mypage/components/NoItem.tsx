import styled from "styled-components";

export default function NoItem() {
  return (
    <StyledNoItem>
      <NoItemGuide>
        <img src="/assets/image/Transformation.png" style={{ width: "200px", marginBottom: "20px" }} alt="No Item" />
        <NoItemGuideTitle>아직 나의 총장님이 없어요!</NoItemGuideTitle>
        <NoItemGuideSubTitle>
          우리 애기들, 뭐하고 있어? 어서 총꾸하도록!
        </NoItemGuideSubTitle>
      </NoItemGuide>
    </StyledNoItem>
  );
}

const StyledNoItem = styled.div`
  height: 689px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const NoItemGuide = styled.div`
  width: 335px;
  height: 274px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const NoItemGuideTitle = styled.div`
  color: #000;
  text-align: center;
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  margin-bottom: 5px;
`;

const NoItemGuideSubTitle = styled.div`
  color: #000;
  text-align: center;
  font-family: Noto Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;
