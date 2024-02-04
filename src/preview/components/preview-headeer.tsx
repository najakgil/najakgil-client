import * as S from './preview-header.style';
import { useNavigate } from 'react-router-dom';

export default function PreviewHeader() {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <S.Container>
        <img src="/assets/svg/preview-back-arrow.svg" alt="back" style={{ width: '14px' }} onClick={() => navigate('/')}/>
      </S.Container>
    </S.Wrapper>
  );
}
