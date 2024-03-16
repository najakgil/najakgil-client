import GoodsHeader from './components/goods-header';
import { GoodsData } from './components/goodsData';
import { useParams } from 'react-router-dom';
import * as S from './goods-detail.css';

interface Goods {
  id: number;
  title: string;
  description: string;
  imgSrc: string;
  content: string;
}

const GoodsDetail = () => {
  // 굿즈 id 가져오기
  const { id } = useParams();
  const goodsId = parseInt(id as string, 10);

  // 해당 id를 가진 굿즈 찾기
  const selectedGoods = GoodsData.desktop
    .concat(GoodsData.android, GoodsData.ios)
    .find((goods: Goods) => goods.id === goodsId);

  return (
    <>
      <GoodsHeader headerTitle="" />
      <div className={S.wrapper}>
        {selectedGoods && (
          <div key={selectedGoods.id}>
            <p className={S.title}>{selectedGoods.title}</p>
            <img src={selectedGoods.imgSrc} alt={selectedGoods.title} />
            <p className={S.content}>{selectedGoods.content}</p>
          </div>
        )}
      </div>
      <button className={S.button} onClick={() => alert('다운로드 기능 구현 예정')}>다운로드</button>
    </>
  );
};

export default GoodsDetail;
