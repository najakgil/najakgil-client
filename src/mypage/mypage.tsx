import Header from '../common/header/header';
import Navigation from '../common/navigation/navigation';
import LoginIntroduction from './components/login-introduction';

const MyPage = () => {
  return (
    <>
      <Header />
      <LoginIntroduction />
      <Navigation page="mypage" />
    </>
  );
};

export default MyPage;
