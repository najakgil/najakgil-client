import HomeCarousel from './components/home-carousel';
import HomeHeader from './components/home-header';
import PhotoBox from './components/photo-box';
import * as S from './style.css';

const Home = () => {
  return (
    <>
      <HomeHeader />
      <div className={S.base}>
        <HomeCarousel />
        <PhotoBox />
      </div>
    </>
  );
};

export default Home;
