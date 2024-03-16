import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getLogin } from '../../api/getLogin';
import { setCookie } from '../../util/cookie';

const Redirect = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const getAuth = async (code: string) => {
    const data = await getLogin(code);
    if (data) {
      setCookie('jwtToken', data.jwt);
      setCookie('userId', String(data.userId));
    }

    navigate('/home');
  };

  useEffect(() => {
    const code = searchParams.get('code');
    if (!code) {
      return;
    }
    getAuth(code);
  }, []);

  return null;
};

export default Redirect;
