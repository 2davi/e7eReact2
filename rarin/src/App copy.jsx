import Counter from "./Counter.jsx";
import {useState} from "react";

function App() {

/*  마우스 오른쪽의 빠른 수정을 이용하면,
    훈수규칙(eslint)을 특정 라인이나, 현재 파일에서 무시할 수 있음
*/const [sum, setSum] = useState(0);
  const [myName, setMyName] = useState("");
  
  /* 제가 2번 반복하면 여러분은 3번은 더 해보아야 함! */
  return (
    <>
      <h1>이제 시작이얌</h1>
      <h1>내 이름은 {myName}</h1>
      <Counter setSum={setSum} setMyName={setMyName} /><hr/>
      <Counter setSum={setSum} setMyName={setMyName} /><hr/>
      <Counter setSum={setSum} setMyName={setMyName} /><hr/>
      {/* 이 문제를 잠깐 생각해 봅시다 
          sum값을 바꾸려면, setSum을 불러야 함.
          Counter 안에서 이벤트 발생 시마다 setSum을 불러야 함
          Counter 안에서 setSum을 부르려면...
          setSum 함수를 Props를 이용해서 넘겨주면 됨! => 아주 중요한 부분
      */}
      <h1>총합은 {sum}!</h1>
    </>
  )
}

export default App
