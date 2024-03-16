import * as S from './goods-header.css';
import { useNavigate } from 'react-router-dom';

interface GoodsHeaderProps {
  headerTitle: string;
}

export default function GoodsHeader({ headerTitle }: GoodsHeaderProps) {
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
