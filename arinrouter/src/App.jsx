import {BrowserRouter, Link, Route, Routes, useNavigate} from "react-router"
import Home from "./pages/Home"
import Yesol from "./pages/Yesol"
import Yunsuk from "./pages/Yunsuk"
import HjLayout from "./layout/HjLayout"
import NotFound from "./pages/NotFound"

function App() {

  //url이동  
  const navigate = useNavigate(); // 필수
  const hjMove = () => {
    //일반적인 사용법
    //navigate("/hj/merong/304/현정");

    //값을 전달하고 싶을 때
    //그냥 state로 정해져 있음
    navigate("/hj/merong/304/현정", {state: {name:"성화", zzak:"찬영"}});
  }

  return (
    <>
      {/* <BrowserRouter> */}
      <h1>다시 시작이얌</h1>
      <button onClick={hjMove}>이동</button>
      <Link to={"/hj/merong"}>메롱</Link>
      <Link to={"/hj/yesol"}>비웃음</Link>
      <Link to={"/hj/yunsuk"}>흥치피</Link>
      <Link to={"/hj/merong/304/아린"}>아! 아린</Link>

      <Routes>
        {/* 멋진 말로 Nested Routing, 부모의 Outlet Component에 출력됨 */}
        <Route path={"/hj"} element={<HjLayout />}>
          <Route path={"merong/:cate/:item"} element={<Yesol />} />
          <Route path={"yesol"} Component={Home} />
          <Route path={"yunsuk"} element={<Yunsuk />} />
          {/* 일치하는 URL이 없을 때, 맨 아래 써야 함 */}
          <Route path={"*"} Component={NotFound} />
        </Route>
      </Routes>
      {/* </BrowserRouter> */}
    </>
  )
}

export default App
