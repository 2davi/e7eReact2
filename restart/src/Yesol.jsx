import React, {useReducer, useRef} from 'react'

function cntReducer(state, action) {
  //state에는 count값이... 초기값은 0으로 설정!
  console.log("체킁: ",state, ", 체체킁: ",action);
  //reducer함수에는 switch문을 주로 사용함
  //return값은 초기값의 형태와 일치!

  switch(action.type) {
    case "inc": return{count:state.count+1, name: action.data};
    // case "dec": return {count: state.count - 1, name: newName};
    // case "res": return {count: 0, name:newName};;
    // default:    return {count: state.count, name:newName};
  }
}

const initVal = {count:10, name:"아무개"};

function Yesol() {
  //단순 원시타입으로 state를 주는 일은 잘 없음. 이번엔 객체로 간닷
  //const [count, dispatch] = useReducer(cntReducer, 0);
  const [countInfo, dispatch] = useReducer(cntReducer, initVal);

  //요따구로 쓰는 일도 잘 없구, type이란 속성을 주어서 명령함
  //const addCnt = () => dispatch("inc");
  const addCnt = () => { console.log(nameRef.current.value); dispatch({type:"inc", data:nameRef.current.value});};
  const decCnt = () => dispatch({type:"dec"});
  const resCnt = () => dispatch({type:"res"});
  const nameRef = useRef(null);
  return (
    <div>
      <input type="text" defaultValue={"서덕"} ref={nameRef}/>
      <h1>내 이름은 {countInfo.name}ㅎㅂㅎ^</h1>
      <h1>몇 개?  ^0^~{countInfo.count}</h1>
      <button onClick={()=>{addCnt()}}>ㅗ^ㅂ^ㅗ</button>
      <button onClick={()=>{decCnt()}}>ㅗ^Q^ㅗ</button>
      <button onClick={()=>{resCnt()}}>ㅗ&gt;_&lt;ㅗ</button>
    </div>
  )
}

export default Yesol