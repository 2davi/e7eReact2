import React, { useRef, useState } from 'react'

const syObj = {
  name: "상윤",
  num: 0
}
function Counter2() {
  const [syInfo, setSyInfo] = useState(syObj);
  console.log("체킁: ", setSyInfo);

  // 필수 Hook 두 번쨰 useRef, 보통 tag에 연결시키거나, re-rendering을 일으키지 않는
  //변수 선언에 사용
  // useRef로 리턴받은 객체는 무조건 current속성 1개만 갖는다.
  // 여기선 current가 input태그를 가리키게 됨!
  //* hook 제약사항: 최상위에 존재해야함. 함수나, if/for문 안에서는 선언 안 됨!
  const tgTxt = useRef(null);
  const tsMerong = useRef(null);
  const ysVal = useRef({
    name: "학범",
    gomin:"자미 안와용"
  });
  console.log("체킁킁: ", ysVal.current);
  const chgName = () => {
    console.log("누느로 보이게 체킁: ", tgTxt);
    console.log("누느로 보이게 체킁: ", tgTxt.current);

    /* 여기서 테스틍
       input의 내용을 바꾸고 이름 변경 버튼을 누르면
       화면의 이름이 바뀌게 해 봅니다. 제한 시간: 5초
       --오래하는 것 보다는 집중력을 키우는 게 훨씬 놀 시간을 많이 가짐
       --많이 놀면 세상을 많이 알게 되고, 시야가 넓어지는 찬스를 가지게 됨
       --일만 하거나, 공부만 하면 바보 멍총이!
       //출력 모양을 보고도 .value가 생각나지 않았다면, 이건 모두 쌤의 잘못 ^0^
       //자바스크립트를 잘못 가르친 것임^ㅂ^
    */
    let newInfo = {...syInfo, name: tgTxt.current.value};
    
    // syInfo.name = "비정상윤";
    // 여기서 주의!, 변수가 객체인 경우 새로운 객체를 주어야 함
    // 기존 객체의 속성을 수정해서 줘봐야 React는 변경 되었다고 판단하지 않음
    // 기존 박스의 내용물만 바꾸면 박스만 보고 똑같다고 생각
    // 새 박스를 주어야 들여다 봄
    /* 요따구로 써도 되지만, 쪼매 없어보임
    const newInfo = {
      name:"비정상윤",
      num: 2
    }
    */
    //객체 복사를 하면 메ㅗ리가 낭비되는 단점이 발생하지만,
    // 상태변화 히스토리 추적이 가능해짐(react는 상태변화를 추적할 필요가 있음)
    // 왜? Re-Rendering 을 할지 말지 결정해야 하니깡.
//  const newInfo = {...syInfo, name:"경덕미웡"}; //객체가 복사됨 소나타가 있는데 한 대 더 복사
    //setSyInfo(syInfo); // set을 이용
    setSyInfo(newInfo);
  }

  const chgRef = () => {
    ysVal.current.gomin = "이제 자미 와용";
    console.log(ysVal.current);
  }

  // 강제 Re-Rendering 아주 쉬움!, 그저 상태변수 1개가 값만 바뀌면 자동으로 ReRendering!
//const [ysValue, setYsValue] = useState(ysVal);
  const [toggle, setToggle] = useState(false);
  const gangjeRendering = () => {
    //강제 Re-Rendering을 구현하시옹!
    //힌트: useState를 쓰시옹!, 제한 시간 3분!
    // let changedYsVal = {...ysVal};
    // setYsValue(changedYsVal);
    setToggle(!toggle);
  }

  return (
    <>
      <button onClick={gangjeRendering}>테스트버튼</button><br/>
      <input type={"text"} ref={tgTxt} defaultValue={"태규금주"} className='border-2 border-slate-600'/><br/>
      <button onClick={chgName}>이름변경</button><br/>
      <button onClick={chgRef}>배운호랑이 만세</button><br/>
      <p>{ysVal.current.gomin}</p>
      <h1>이름: {syInfo.name}</h1>
      <h1 ref={tsMerong}>실연횟수: {syInfo.num}</h1>
    </>
  )
}

export default Counter2