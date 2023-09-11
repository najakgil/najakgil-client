import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NotSignIn() {
  return (
    <StyledNotSignIn>
      <NotSignInGuide>
        <img src="/assets/image/NotSignIn.png" style={{ width: "260px" }} />
        <NotSignInGuideTitle>
          마이페이지를 이용하려면 로그인하세요
        </NotSignInGuideTitle>
        <NotSignInGuideSubTitle>
          우리 애기들, 나를 보고 싶으면 로그인하도록!
        </NotSignInGuideSubTitle>
      </NotSignInGuide>
      <Link
        to={`https://kauth.kakao.com/oauth/authorize?client_id=${
          import.meta.env.VITE_KAKAO_API_KEY
        }&redirect_uri=${
          import.meta.env.VITE_KAKAO_REDIRECT_URI
        }&response_type=code`}
      >
        <img
          src="/assets/image/kakao_login_large_wide.png"
          style={{ width: "260px" }}
        />
      </Link>
    </StyledNotSignIn>
  );
}

const StyledNotSignIn = styled.div`
  height: 689px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const NotSignInGuide = styled.div`
  width: 335px;
  height: 274px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const NotSignInGuideTitle = styled.div`
  color: #000;
  text-align: center;
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  margin-bottom: 5px;
`;

const NotSignInGuideSubTitle = styled.div`
  color: #000;
  text-align: center;
  font-family: Noto Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;
