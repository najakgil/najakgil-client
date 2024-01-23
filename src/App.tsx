import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Make from './make/make';
import Home from './home/home';
import Preview from './preview/preview';
import MyPage from './mypage/mypage';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Make />} />
          <Route path="/home" element={<Home />} />
          <Route path='/preview' element={<Preview />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
