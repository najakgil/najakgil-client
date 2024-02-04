import * as S from './style';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <S.Container>
        <S.Logo src="/assets/svg/logo.svg" alt="Logo" onClick={() => navigate('/home')} />
      </S.Container>
    </S.Wrapper>
  );
}
