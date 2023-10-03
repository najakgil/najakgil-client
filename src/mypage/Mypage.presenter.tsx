import styled from "styled-components";
// import MyItemBox from "./components/MyItemBox";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import { getCookie } from "../util/cookie";
import NotSignIn from "./components/NotSignIn";
import NoItem from "./components/NoItem";

// import NotSignIn from "./components/NotSignIn";
// import MyItemBox from "./components/MyItemBox";
// import NoItem from "./components/NoItem";

const MyPageUI: React.FC = () => {
  const cookie = getCookie("jwtToken");
  
  return (
    <>
      <StyledMypage>
        <Header />
        {cookie ? <NoItem /> : <NotSignIn />}
        {/* <NotSignIn /> */}
        {/* <NoItem /> */}
        {/* <MyItemBox /> */}
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
