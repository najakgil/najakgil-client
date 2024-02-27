import GoodsHeader from './components/goods-header';
import GoodsList from './components/goods-list';
import * as S from './style.css';

const GoodsType = [
  { id: 0, type: 'desktop', title: '데스크탑 배경화면' },
  { id: 1, type: 'android', title: '안드로이드 배경화면' },
  { id: 2, type: 'ios', title: '아이폰 배경화면' },
];

const Goods = () => {
  return (
    <>
      <GoodsHeader headerTitle="나작길 굿즈함" />
      <div className={S.base}>
        {GoodsType.map(({ id, type, title }) => (
          <GoodsList key={id} type={type} title={title} />
        ))}
      </div>
    </>
  );
};

export default Goods;
