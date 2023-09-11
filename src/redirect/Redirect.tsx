import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getLogin } from "../api/login";

const Redirect = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const getAuth = async (code: string) => {
    const d = await getLogin(code);
    console.log("카카오 로그인 코드", d);
  };

  useEffect(() => {
    const code = searchParams.get("code");
    if (code) {
      getAuth(code);
    }

    navigate("/mypage");
  }, []);

  return null;
};

export default Redirect;
