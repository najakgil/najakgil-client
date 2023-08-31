import React from "react";
import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <>
        <img src="/assets/icon/logo.svg" style={{ width: "30px" }} />
      </>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  min-width: 375px;
  max-width: 450px;
  height: 54px;
  border-bottom: 1px solid #f0f0f0;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px;
  z-index: 5;
`;

export default Header;
