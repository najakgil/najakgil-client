import { BrowserRouter, Routes, Route  } from "react-router-dom"
import Make from "./make/Make.container";
// import Header from "./components/Header";
import Preview from "./preview/Preview.container";
import Home from "./home/Home.container";
import Mypage from "./mypage/Mypage.container";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/" element={<Make/>}/>
          <Route path="/preview" element={<Preview/>}/>
          <Route path="/mypage" element={<Mypage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;