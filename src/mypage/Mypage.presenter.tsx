import styled from "styled-components";

const MyPageUI: React.FC = () => {
  return (
    <StyledMypage>
      <TemporaryBox>
        <img
          src="/assets/image/Transformation.svg"
          style={{ width: "260px" }}
        />
        <TemporaryGuideTitle>
          아직...! 나작길 서비스는 준비중
        </TemporaryGuideTitle>
        <TemporaryGuideSubTitle>
          우리 애기들 보려고 열심히 준비하고 있어.<br/>조금만 더 기다려줘.
        </TemporaryGuideSubTitle>
      </TemporaryBox>
    </StyledMypage>
  );
};

const StyledMypage = styled.div`
  height: calc(100vh - 110px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TemporaryBox = styled.div`
  width: 260px;
  height: 330px;
  /* background: orange; */
`;

const TemporaryGuideTitle = styled.div`
  color: #000;
  text-align: center;
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  margin-bottom: 5px;
`;

const TemporaryGuideSubTitle = styled.div`
  color: #000;
  text-align: center;
  font-family: Noto Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

export default MyPageUI;
