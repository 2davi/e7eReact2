import React, { useState } from 'react'

// 리액트에서 어려워 하는 부분 Re-Rendering(다시 그리깅)
// 프로그램 스타일이 바뀌도록 유도
// 메타(구 페이스북) 개발자들도 스타일이 바뀌는 데에
// 평균 3개월 정도 걸렸다고 함!, 그렇다면 여러분은 3일만에 가능!

function Counter() {
  //처음 만나는 훅; Hook
  //훅은 제공되는 함수로 보통 return값을 구조 분해해서 사용
  //상태 관리를 위해서 react에서 제공하는 useState훅
  // 처음만 낯설고 그 다음엔 그냥 그저 그런 놈
  // Hook함수는 이름이 무조건 use로 시작
  // if문이나 for문, 최상위 함수 아닌 함수 안의 함수 등에 들어가면 안됨!(제약사항)

  // 함수 안에서 각자 별개, hook은 한 번이 아닌 여러번 쓸 수 있음
  // 최종적으로 개발자에게 남는 건 Hook 사용 능력!
  // 오늘 잠 자면서도 useState를 생각 -> re-rendering!!!
  const [count, setCount] = useState(0);

  // useState로 받아온 변수를 특별히 reactive 변수라 부름(그냥 변수라 하는 사람도 있음)
  // 저 변수가 중요한 건, 우리가 직접 값을 바꾸면 안 되고
  // 구조분해를 통해 받은 setXXXXX 함수를 통해 값을 바꾸면
  // 자동으로 react engine이 화면을 다시 그림(Re-Rendering) => 엄청나겡 중요함!

  // function 키워드 안에 선언되는 함수를 우리는 AF로 만들 것이라 약속!
  const incKD = () => {
    //원래하던 방법: DOM 제어, React는 여러분이 이렇게 작업하는 걸 원치 않아
      // let count = 0;
      // count++;
      // document.querySelector("#kdCnt").innerText = count;
    
      setCount(count+1);
  }

  const decKD = () => {
    setCount(count-1); //setCount만 호출되면 다시 그림!
  }
  //이벤트명 on다음이 대문자로 시작함에 주의*
  return (
    <>
      <h1>카운터예젱</h1>
      <div id={"kdCnt"}>{count}</div>
      <button onClick={incKD} className="text-2xl border-2 border-r-2 border-amber-400 w-[100px]">+</button>
      <button onClick={decKD} className="text-2xl border-2 border-r-2 border-amber-400 w-[100px]">-</button>
    </>
  )
}

export default Counter