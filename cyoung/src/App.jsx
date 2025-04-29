import Bymyself from "./Bymyself"

function App() {

  return (
    <>
      <div>
        <h1 style={{color:"red", fontWeight:"100"}}>혼자서도 잘 해요 ^0^</h1>
      </div>
      <Bymyself prop1={"짜잔형 짜잔하고 등장"} prop2={"스크립트함수 console.log()"} />
      <Bymyself prop1={"두 번째 컴포넌트 두두둥장"} prop2={"alert('경고')"} />
    </>
  )
}

export default App
