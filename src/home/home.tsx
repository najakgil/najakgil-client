import HomeHeader from './components/home-header';
import * as S from './style.css';

const Home = () => {
  return (
    <>
      <HomeHeader />
      <div className={S.base}>
        <h1>Home</h1>
      </div>
    </>
  );
};

export default Home;
