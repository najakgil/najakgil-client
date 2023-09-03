import styled from "styled-components";

export default function CompleteButton() {
  return (
    <StyledCompleteButton>
      <img
        alt="complete"
        src="/assets/icon/complete.svg"
        style={{ width: "24px" }}
      />
      <br />
      완성하기
    </StyledCompleteButton>
  );
}

const StyledCompleteButton = styled.button`
  position: fixed;
  width: 60px;
  height: 60px;
  background: #2294ff;
  border-radius: 50px;
  box-shadow: 0px 0px 8px 5px rgba(0, 0, 0, 0.1);
  font-size: 12px;
  color: #fff;
  text-align: center;
`;
