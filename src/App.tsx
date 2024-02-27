import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Make from './make/make';
import Home from './home/home';
import Preview from './preview/preview';
import MyPage from './mypage/mypage';
import Redirect from './redirect/redirect';
import Storage from './storage/storage';
import Goods from './goods/goods';
import GoodsDetail from './goods/goods-detail';
import Event from './event/event';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Make />} />
          <Route path="/home" element={<Home />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/redirect" element={<Redirect />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/goods" element={<Goods />} />
          <Route path="/goodsDetail/:id" element={<GoodsDetail />} />
          <Route path="/event" element={<Event />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
