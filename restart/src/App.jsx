import Hjung from "./Hjung";

function App() {

  //JSX, 실제 html 아니당, 눈속임이당
  //JSX => JSON babel.js, 개발자 상진이가 편하게 쓰라공
  return (
    <>
      <h1>이제 시작이얌</h1>
      <Hjung name="현정">
        <h1>요러건 안 맹글었음, 여닫는 태그로 이루어진 거</h1>
        <h3>요것도 자식(children) 중 하나</h3>
      </Hjung>
    </>
  )
}

export default App
