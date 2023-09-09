import { BrowserRouter, Routes, Route } from "react-router-dom";
import Make from "./make/Make.container";
import Preview from "./preview/Preview.container";
import Home from "./home/Home.container";
import Mypage from "./mypage/Mypage.container";
import ShowPage from "./show/ShowPage";
import Redirect from "./redirect/Redirect";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Make />} />
          <Route path="/home" element={<Home />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/show" element={<ShowPage />} />
          <Route path="/redirect" element={<Redirect />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
