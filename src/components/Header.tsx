import React from "react";
import styled from "styled-components";

const Header: React.FC = () => {
    return (
        <StyledHeader>
            <img src="/assets/icon/logo.svg" style={{width:"30px"}}/>
            {/* <Logo>나만의 총장님</Logo> */}
        </StyledHeader>
    );
};

const StyledHeader = styled.div`
    width: 360px;
    height: 45px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 16px;
    border-bottom: 1px solid #F0F0F0;
`

// const Logo = styled.div`
//     color: #2294FF;
//     text-align: center;
//     font-family: Noto Sans;
//     font-size: 16px;
//     font-style: normal;
//     font-weight: 600;
// `

export default Header;