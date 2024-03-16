import GoodsItem from './goods-item';
import { GoodsData } from './goodsData';
import * as S from './goods-list.css';

interface GoodsListProps {
  type: string[];
  title: string;
}

export default function GoodsList({ type, title }: GoodsListProps) {
  return (
    <div className={S.wrapper}>
      <h1>{title}</h1>
      <div className={S.base}>
        {GoodsData[type].map(
          (goods: { id: number; title: string; description: string; imgSrc: string }) => (
            <GoodsItem
              key={goods.id}
              id={goods.id}
              title={goods.title}
              description={goods.description}
              imgSrc={goods.imgSrc}
            />
          ),
        )}
      </div>
    </div>
  );
}
