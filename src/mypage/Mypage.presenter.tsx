import styled from "styled-components";
// import MyItemBox from "./components/MyItemBox";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import NotSignIn from "./components/NotSignIn";

const MyPageUI: React.FC = () => {
  return (
    <>
      <StyledMypage>
        <Header />
        {/* <MyItemBox /> */}
        <NotSignIn />
        <BottomNav type={"mypage"} />
      </StyledMypage>
    </>
  );
};

const StyledMypage = styled.div`
  width: 360px;
  position: fixed;
  right: 0;
  left: 0;
  margin: 0 auto;
  top: 54px;
  /* background: red; */
`;

export default MyPageUI;
