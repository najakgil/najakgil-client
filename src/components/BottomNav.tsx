import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import homeImage from "/assets/icon/home.svg";
import homeSelectImage from "/assets/icon/home-f.svg";
import makeImage from "/assets/icon/make.svg";
import makeSelectImage from "/assets/icon/make-f.svg";
import myImage from "/assets/icon/mypage.svg";
import mySelectImage from "/assets/icon/mypage-f.svg";

const NavBarArticle = styled.article`
  width: 360px;
  height: 65px;
  border-top: 1px solid #F0F0F0;
  border-radius: 0px;
  padding-top: 10px;
  margin: 0px;
`;

const TabMenuUl = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const TabMenuLi = styled.li`
  margin: 0;
`;

const TabMenuLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  margin: 0;
`;

const NavImg = styled.img`
  width: 24px;
  height: 24px;
  margin-bottom: 5px;
`;

const P = styled.p`
  font-size: 10px;
  margin: 0;
  color: #AEAEAE;
`;

const SelectP = styled.p`
  font-size: 10px;
  font-weight: 600;
  color: #2294FF;
  margin: 0;
`;

interface BottomNavProps {
  type: "home" | "make" | "mypage";
}

const BottomNav: React.FC<BottomNavProps> = ({ type }) => {
  const navigate = useNavigate();
  
  return (
    <NavBarArticle>
      <nav>
        <TabMenuUl>
          <TabMenuLi>
            <TabMenuLink
              onClick={() => {
                navigate("/home");
              }}
            >
              {type === "home" ? (
                <NavImg src={homeSelectImage} alt="people로 이동" />
              ) : (
                <NavImg src={homeImage} alt="people로 이동" />
              )}
              {type === "home" ? <SelectP>홈</SelectP> : <P>홈</P>}
            </TabMenuLink>
          </TabMenuLi>
          <TabMenuLi>
            <TabMenuLink
              onClick={() => {
                navigate("/");
              }}
            >
              {type === "make" ? (
                <NavImg src={makeSelectImage} alt="make으로 이동" />
              ) : (
                <NavImg src={makeImage} alt="make으로 이동" />
              )}
              {type === "make" ? <SelectP>만들기</SelectP> : <P>만들기</P>}
            </TabMenuLink>
          </TabMenuLi>
          <TabMenuLi>
            <TabMenuLink
              onClick={() => {
                navigate("/mypage");
              }}
            >
              {type === "mypage" ? (
                <NavImg src={mySelectImage} alt="my로 이동" />
              ) : (
                <NavImg src={myImage} alt="my로 이동" />
              )}
              {type === "mypage" ? <SelectP>마이페이지</SelectP> : <P>마이페이지</P>}
            </TabMenuLink>
          </TabMenuLi>
        </TabMenuUl>
      </nav>
    </NavBarArticle>
  );
};

export default BottomNav;
