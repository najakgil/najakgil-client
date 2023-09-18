import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getLogin } from "../api/login";

const Redirect = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const getAuth = async (code: string) => {
    const d = await getLogin(code);
    console.log(d.data);
  };

  useEffect(() => {
    const code = searchParams.get("code");
    if (!code) {
      console.log("없음");
      return;
    }

    getAuth(code);
    navigate("/mypage");
  }, []);

  return null;
};

export default Redirect;
