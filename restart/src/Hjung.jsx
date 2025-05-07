import {useReducer} from "react";
//import {useState, useRef, useEffect} from "react";


// Reducer는 여러분이 만들어줘야 함, 이름은 그저 관례를 따름
function reducer(state, action) {
  // 시간이 어찌 이리 빨랑 ^0^
}



function Hjung({children}) {

  const [state, dispatch] = useReducer(reducer, {name:"학범"});

  console.log("체킁: ", children);
  // children은 레이아웃 등 일부 형태가 고정되어 있을 때 사용하면 좋지만,
  // 나중에 배울 react-router outlet이 있어서 생각보다 직접 쓰는 경우는 적은 편!
  return (
    <>
      <div>Hjung Merong</div>
      <div>
        {children}
      </div>
    </>
  )
}


export default Hjung