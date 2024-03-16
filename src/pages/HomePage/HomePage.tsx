import HomeCarousel from './components/home-carousel';
import PhotoBox from './components/photo-box';
import * as S from './style.css';
import Header from '../../common/Header/header';
import MoveButton from '../../common/MoveButton/MoveButton';
import Drawer from '../../common/Drawer/drawer';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const HomePage = () => {
  const navigate = useNavigate();

  // Drawer 상태 관리
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <Header
        left={
          <MoveButton imgSrc="/assets/svg/logo.svg" width={30} onClick={() => navigate('/home')} />
        }
        title=""
        right={<MoveButton imgSrc="/assets/svg/drawer.svg" width={16} onClick={openDrawer} />}
      />
      <div className={S.base}>
        <HomeCarousel />
        <PhotoBox />
      </div>
      <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </>
  );
};

export default HomePage;
