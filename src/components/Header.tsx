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
  width: 360px;
  height: 45px;
  /* display: flex;
  justify-content: flex-start;
  align-items: center; */
  padding-left: 16px;
  border-bottom: 1px solid #f0f0f0;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  /* margin: auto 0; */
  background: white;
`;

export default Header;
