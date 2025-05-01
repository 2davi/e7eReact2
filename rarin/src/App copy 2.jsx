import {useEffect, useState} from "react";

function App() {
/*  어려워하는 hook; useEffect() (Side Effect라 부름)
    비동기(ajax)가 어려웠던 사람은 더 어려움!
    기존 mount/ unmount/ update 이벤트를 쉽게 처리하도록 useEffect를 만듦
    *mount(장착, append); unmount(분리, remove); update(수정, unmount -> mount)

    집중해서 상황만 잘 인식하면 실제로 어렵진 않음. 쉽게 쓰라고 만들어준 건뎅^0^
*/const [draw, setDraw] = useState(false);
  const reRender = () => setDraw(!draw) //호출되면 강제 re-renderin; Toggle
  useEffect(() => {
  /*  기징 증요한 목적은 모니머니해도 비동기 결과 처리(Side Effect)를 위한 추가 처리!

      []없으면 re-rendering될 때마다 실행
      빈 []가 있으면 처음에 한 번만 실행 like DOMContentLoaded 이벤트.
      [] == dependency; 의존성
      비었다는 건 아무것에도 의존하지 않는다는 이야기 = 그냥 딱 한 번만 실행됨.
      [draw] --> draw에 의존하게 된당. => draw가 바뀌면 실행된다.
      요 규칙(경우의 수 3가지 with[])를 머리에 담아야 함!, 담기 싫으면 결과 보면서 디버깅!
  */console.log("체킁 철민 만세");

  /*  그렇게 자주 쓰이진 않는데, setTimeout 함수 등의 return값을 사용할 때
      타이머가 살아있다보면 원치 않는 행동을 하게 될 수도 있으므로
      timer등을 없애려는(clearTimeout) 경우에 사용함.
  */return () => console.log("이건 unmount될 때 실행되어야 할 함수를 return함");
  }, [draw]);

  return (
    <>
      <h1>삐동기</h1>
      <button onClick={reRender}>리렌더링</button>
    </>
  )
}

export default App
