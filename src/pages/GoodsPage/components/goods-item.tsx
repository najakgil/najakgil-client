import * as S from './goods-item.css';
import { useNavigate } from 'react-router-dom';

interface GoodsItemProps {
  id: number;
  title: string;
  description: string;
  imgSrc: string;
  onClick: () => void;
}

export default function GoodsItem({ id, title, description, imgSrc }: GoodsItemProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/goodsDetail/${id}`);
  };

  return (
    <div className={S.wrapper} onClick={handleClick}>
      <img src={imgSrc} />
      <p className={S.title}>{title}</p>
      <p className={S.description}>{description}</p>
    </div>
  );
}
