// import { getCookie } from '../../util/cookie';

export default function LoginIntroduction() {
  // const cookie = getCookie('accessToken');

  const kakaoLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${
      import.meta.env.VITE_KAKAO_API_KEY
    }&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}&response_type=code`;
  };

  return (
    <div>
      <h1 onClick={() => kakaoLogin()}>카카오 로그인</h1>
      {/* {cookie && <div>로그인 완료</div>} */}
    </div>
  );
}
