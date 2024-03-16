import Drawer from '../../../common/Drawer/drawer';
import * as S from './home-header.css';
import { useState } from 'react';

export default function HomeHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  return (
    <>
      <header className={S.wrapper}>
        <div className={S.container}>
          <img src="/assets/svg/logo.svg" alt="Logo" style={{ width: '25px' }} />
          <img
            src="/assets/svg/drawer.svg"
            alt="drawer"
            style={{ width: '15px', cursor: 'pointer' }}
            onClick={openDrawer}
          />
        </div>
      </header>
      <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </>
  );
}
