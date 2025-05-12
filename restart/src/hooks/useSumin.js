
/*  커스텀 훅 만드는 법
    function 키워드와 return 사이의 소스를 다 긁어옴
    jsx파일의 return 안에서 필요한 것(사용되는 것)만 파악하고,(text,taskChg,taskAdd)
    파악된 것만 return 해줌, []든 {}든 본인이 알아서 선택!
    요렇게 연습하다보면, 다시 공통되는 코드들이 발생하게 됨!
    자주 보게 되면, 반복된다는 의미니까, 그런 걸 미리 공통 hook으로도 만들 수 있음
    커스텀 훅 안에 실제 제공되는 훅이 들어가므로
    커스텀 훅도 제공되는 훅과 똑같은 제약사항을 받게 됨
    (함수 최상위에 위치, 조건/반복문 속에 입장불가)
*/
import axios from 'axios';
import { useRef, useState } from "react";
import { TasksDispatchContext, useTasksDispatch } from "../tasksContext";

function useSumin() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();
  //현 상태에서 id 충돌을 막으려면
  //getList 해올 때마다, 최대값 id를 구해서 +1씩 하거나
  //전에 했던 UUID 라이브러리를 쓰거나 하면 됨!
  //const dispatch = useState(TasksDispatchContext);
  const nextId = useRef(3); //<-리렌더링ㅇ을 일으키지 않는 일반 전역변수도 사용가능
  const taskAdd = () => {
    setText('');
    //여기도 비동기 코드가 들어가야 함
    axios.post("http://localhost:8272/todos", {
      id: nextId.current++,
      text: text,
      done: false
    })
    .then(resp => {
      console.log("돌아오는 데이터 확인: ", resp.data); //json-server는 post는 에코
      dispatch({
        type: 'added',
        payload: resp.data
    });
    })
  }
  const taskChg = e => {
    setText(e.target.value);
  }
  /* JSX 부분을 심플하게 만들어야 가독성이 좋아짐 */

  return {text, taskAdd, taskChg};
}

export default useSumin