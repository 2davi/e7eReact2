import Home from "./Home"
import MyLink from "./MyLink"
import MyRoute from "./MyRoute"
import NavBar from "./NavBar"
import Sangin from "./Sangin"
import Taesu from "./Taesu"

/*
    대략 라우트 기능에 대해서 이해 했을 거라 믿음!
*/

function App() {

  return (
    /*
      props = {
        to: "/sangin",
        children: "상진"
      }
    */
    <>
      <h1>다시 시작이얌</h1>
      <NavBar />
      {/* url이 /sangin 이면 Sangin 컴포넌트가 화면에 나오겡 */}
      <MyRoute path={"/sangin"} element={<Sangin />} />
      <MyRoute path={"/alchol"} element={<Taesu />} />
      <MyRoute path={"/"} element={<Home />} />
    </>
  )
}

export default App
