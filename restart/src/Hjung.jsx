import {useReducer} from "react";
//import {useState, useRef, useEffect} from "react";


// Reducer는 여러분이 만들어줘야 함, 이름은 그저 관례를 따름
// reducer함수가 실제 상태변수 값 변경을 담당
function reducer(state, action) {
  console.log("체킁: ", state, ", ", action);
  return {name:"예솔"}; //상태변수와 같은 형태를 return해야 함!
}



function Hjung({children}) {
  //            상태변수                        초기값
  const [state, dispatch] = useReducer(reducer, {name:"학범"});

  // children은 레이아웃 등 일부 형태가 고정되어 있을 때 사용하면 좋지만,
  // 나중에 배울 react-router outlet이 있어서 생각보다 직접 쓰는 경우는 적은 편!

  const chgName = () => {
    dispatch("예솔메롱"); //매개변수값이 reducer함수의 action 매개변수로 넘어감!
  }
  return (
    <>
      <div>Hjung Merong { state.name }</div>
      <button onClick={()=>{chgName()}}>이름변경</button>
      <div>
        {children}
      </div>
    </>
  )
}


export default Hjung