import React, {useReducer, useRef} from 'react'
import Yfriend from './Yfriend';

const sampleData = [
  {id:1, name:"학범", alias:"잠자는 호랭이"},
  {id:2, name:"태수", alias:"술꾼"},
  {id:3, name:"상진", alias:"술꾼 친구"},
  {id:4, name:"철민", alias:"부지런"},
  {id:5, name:"경덕", alias:"못해야하는데 이상함"}
];

function hreducer(state, action) {
  //console.log("체킁: ", state, action);
  switch(action.type) {
    case "add": return [action.data, ...state];
    case "del": return state.filter(frd => action.data!==frd.id);
    case "res": return sampleData;
  } 
}

function Kduck() {
  //연습하면 뇌가 받아들임, 뇌는 낯선 걸 거부하거나, 심지어 분노함!
  const [kfrds, dispatch] = useReducer(hreducer, sampleData);
  const nameRef = useRef(null);
  const aliasRef= useRef(null);
  
  //요거 빨리 작성해봅니다. 연습!
  //추가된 게 맨 위에 오게... useReducer 오늘 마스터, 낼로 미루지 말깅!
  //uuid를 써도 되지만 괘니 그냥 localStorage를 이용한 id
  const addFrd = () => {
    let maxId = 6;
    if(!localStorage.getItem("maxId")) {
      localStorage.setItem("maxId", maxId);
    } else {
      maxId = parseInt(localStorage.getItem("maxId")) +1;
      localStorage.setItem("maxId", maxId);
    }
    const ynFrd = {id:maxId, name:nameRef.current.value, alias:aliasRef.current.value}
    dispatch({type:"add", data:ynFrd});
  }
  
  const remFrd = fid => dispatch({type:"del", data:fid});
  const oReset = () => {
    dispatch({
      type:"res"
    });
  };

  return (
    <div style={{border: "3px solid gold"}}>
      <div>
        이름: <input type="text" defaultValue={"홍길동"} ref={nameRef} /><br/>
        별명: <input type="text" defaultValue={"아무개"} ref={aliasRef}/><br/>
        <button onClick={addFrd}>ㅗ^ㅂ^ㅗ</button>
        <button onClick={oReset}>원래대로 리셋</button>
      </div>
      <h1>아린은 역시 훌륭</h1>
      {
        kfrds.map(kfrd => {
          return (
            // 통째로 한 묶음으로 넘겨도 상관 없음! (kfrd를 매개변수로 넘기기)
            // 보통은 나열해서 많이 넘김, 그저 가독성성
            <Yfriend remFrd={remFrd} frd={kfrd} fid={kfrd.id} name={kfrd.name} alias={kfrd.alias} key={kfrd.id}/> )
        })
      }
    </div>
  )
}

export default Kduck