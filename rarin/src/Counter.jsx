import React, { useState, useRef } from 'react'

function Counter({setSum, setMyName}) {
  
/*  set함수 안에 콜백 함수를 주어도 되는데, 매개변수로 이전 값이 넘어옴
    ::prevVal에 현시점 count 변수값!
    --인자로 받은 APP.jsx의 setSum 함수
      컴포넌트 구성 특성상 아래와 같은 경우(자식이 부모의 특정 함수를 부름)가
      자주 발생해서 꼭 알아두어야 함.
      React는 부모만 자식에게 Props를 전달할 수 있음( 멋진 말로 Props Drilling )
      자식은 부모에게 전달하지 못함( 단방향 )
      재미난 건 Vue, Angular는 양방향이 가능! => 서로 자기 것이 좋다고 함!

    React의 Re-Rendering은 성능을 위해 내용이 바뀐 컴포넌트만 다시 그리는 데
    부모 컴포넌트가 바뀌면 자동으로 자식도 Re-Rendering됨!()

    상위 컴포넌트의 함수를 하위 컴포넌트가 받게 됨. (Props Drilling)
*/const [count, setCount] = useState(0);
  const chgInc = ()=>{ setCount(count+1);              setSum(prevSum => prevSum +1); };
  const chgDec = ()=>{ setCount(prevVal => prevVal-1); setSum(prevSum => prevSum -1); };
  
  const txtInput = useRef(null);
  const chgName = () => setMyName(txtInput.current.value);
  
/*  e는 실제 event가 아니고, react에서 만든 거쳐 가는 event.
    멋진 말로 semantic event!..라고 하는데,
    우린 이런 것들을 그냥 다 대리인(Proxy)이라고 생각하면 편함.
    나 대신 해주는 사람
*/const chgCont = (e) => {
  /*  보통 이전에 onKey*** 등의 이벤트를 쓰던 건 대부분 onChange로 대응
      이벤트를 주면 useRef가 필요없어짐. => 꼭 ref만 써야 된다는 생각은 잘못ㅗ^ㅂ^ㅗ
      set함수 이름 명명법도 관례이긴 하나, 여러사람이 같이 작업하려면
      관례를 지켜야 함. 대소문자 다른 거 눈으로 찾는 건 진짜 힘든 일임!
  */console.log("누구: ", e.target.value);
    setMyName(e.target.value);
  }

  return (

    <>
      <div>
        <input type="text" onChange={chgCont} defaultValue={""} placeholder="이름을 써주삼" ref={txtInput}/><br/>
        <button onClick={chgName}>부모 컴포넌트에 반영</button>
        <h3>COUNTER: {count}</h3>
        {/* 아래 2가지 방법 모두 눈에 익숙하겡! */}
        <button onClick={chgInc}>증가</button>
        <button onClick={() => {chgDec()}}>감소</button>
      </div>
    </>
  )
}


export default Counter