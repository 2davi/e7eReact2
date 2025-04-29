/*
  function키워드와 화살표함수를 쓰는 조합은 각각이어서
  앞으로 우리는 바깥쪽은 function, 내부 함수는 ArrowFunction 으로 만들어
  가독성을 유지하도록 하겠음0^0.
*/
// JSX 안에서는 {}를 이용하여 자바스크립트를 사용할 수 있음
// 처음엔 쪼메 낯설음, 이거이 자바스크립트야, css얌?

// 다른 이름으로 해도 되지만, 그냥 모두 Props라고 함
// Props를 써도 되는데, 써야 될 때도 있고,
// 보통은 Props를 쓰면 없어 보임, 구조 분해를 적용해 봅시당. 코드가 예뻐짐
// 부모 만드느라 때론 의미없는 div로 묶어주는 경우가 많았음
// 그래서 React.Fragment를 맹글어 주었는데, 너무 길당. 길면 기차!
// 최종 <></>로 낙찰!
// <React.Fragment></React.Fragment> === <></>
import React from "react";
const arin = "https://api.dicebear.com/9.x/fun-emoji/svg?seed=";

function Friend({ name, age }) {

  // const name = "윤석";
  // const year = 20;

  return (
    <>
      <div>메롱</div>
      <div style={{ border: "5px solid red", color: "blueviolet" }}>
        <img src={`${arin}${name}`} width={50} height={50} />
        <h1>나 {name}얌</h1>
        <h3>{age}년 기만의 달인</h3>
        <h3>오늘은 어떤 기만전술을...</h3>
      </div>
    </>
  )
}

export default Friend