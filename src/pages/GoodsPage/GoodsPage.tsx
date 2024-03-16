import Header from '../../common/Header/header';
import MoveButton from '../../common/MoveButton/MoveButton';
import GoodsList from './components/goods-list';
import * as S from './style.css';
import { useNavigate } from 'react-router-dom';

const GoodsType = [
  { id: 0, type: 'desktop', title: '데스크탑 배경화면' },
  { id: 1, type: 'android', title: '안드로이드 배경화면' },
  { id: 2, type: 'ios', title: '아이폰 배경화면' },
];

const GoodsPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header
        left={
          <MoveButton
            imgSrc="/assets/svg/preview-back-arrow.svg"
            width={20}
            onClick={() => navigate('/home')}
          />
        }
        title="나작길 굿즈함"
        right=""
      />
      <div className={S.base}>
        {GoodsType.map(({ id, type, title }) => (
          <GoodsList key={id} type={type} title={title} />
        ))}
      </div>
    </>
  );
};

export default GoodsPage;
