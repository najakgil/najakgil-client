import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getLogin } from "../api/login";
import { setCookie } from "../util/cookie";

const Redirect = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const getAuth = async (code: string) => {
    const data = await getLogin(code);
    if (data) {
      setCookie("jwtToken", data.jwt);
      setCookie("userId", String(data.userId));
    }
    console.log("카카오로그인 정보 : ", data);

    navigate("/mypage");
  };

  useEffect(() => {
    const code = searchParams.get("code");
    if (!code) {
      console.log("없음");
      return;
    }

    getAuth(code);
  }, []);

  return null;
};

export default Redirect;
