import React, { useState } from 'react'

const syObj = {
  name: "상윤",
  num: 0
}
function Counter2() {
  const [syInfo, setSyInfo] = useState(syObj);
  console.log("체킁: ", setSyInfo);

  const chgName = () => {
    alert("불렀냥?");
    syInfo.name = "비정상윤";
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
   const newInfo = {...syInfo, name:"경덕미웡"}; //객체가 복사됨 소나타가 있는데 한 대 더 복사
    //setSyInfo(syInfo); // set을 이용
    setSyInfo(newInfo);
  }

  return (
    <>
      <button onClick={chgName} className="border-2 border-amber-100">이름변경</button>
      <h1>이름: {syInfo.name}</h1>
      <h1>실연횟수: {syInfo.num}</h1>
    </>
  )
}

export default Counter2