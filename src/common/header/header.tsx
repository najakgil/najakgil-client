import * as S from './style';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  headerTitle: string;
}

export default function Header({ headerTitle }: HeaderProps) {
  const navigate = useNavigate();
  return (
    <>
      <header className={S.wrapper}>
        <div className={S.container}>
          <img src="/assets/svg/preview-back-arrow.svg" alt="back" onClick={() => navigate(-1)} />
          <p>{headerTitle}</p>
        </div>
      </header>
    </>
  );
}
