
//이 소스가 중요!, Provider를 분리해서 Return
// 이 형태를  거의 대부분 사용함!
import axios from 'axios';
import { useEffect, useReducer } from 'react';
import { TasksContext, TasksDispatchContext } from './tasksContext';

//주의사항: 여러 개 Provider를 쓸 수 있는데
//useContext 훅은 둘러싼 Provider 중에 가까운 Provider 내에서
//먼저 찾기 시작

//그냥 더미 데이터, 실제 이렇게 쓸 일이 있을까용? 
/*
const initialTasks = [
  { id: 0, text: '태수 술 안 먹기', done: true },
  { id: 1, text: '상진이 오타 안 치기', done: false },
  { id: 2, text: '무뚝뚝 3인방 표정 풀기', done: false }
];
*/

// todo 리스트 이벤트 처리할 reducer, 당연히 useReducer에 사용되어야 함
//tasksReducer가 tasks 상태변수를 관리하는 함수이므로
//여기에 서버랑 통신하는 ajax가
//
function tasksReducer(tasks, action) {
  //당근 서버에서 가져온 데이터가 없으니깡, 초기값은 빈 배열
  switch (action.type) {
    case "getYsTodos": {
      //여기에 비동기를 쓰면 실팽하는 동안, 다음 라인으로 넘어가서
      //제대로 return을 할 수가 없음!
      //서버에서 가져온 걸 return 해야 함.
  // const getData = async () => {
  //   const resp = await axios.get("http://localhost:8272/todos");
  //   return await resp.data;
  // }
  // getData();
  // break;
      return action.payload;
    }
    case 'added': {
      return [action.payload, ...tasks,];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      console.log("체킁에킁:: ", action.id);
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}


//여기에 커스텀 훅이 있어도 상관은 없는데, 훈수꾼(eslint)이 뭐라 함


//Provider를 분리한 요기가 일단 관심 받아야 할 중요한 부분
function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer,[]);

  //비동기 처리를 위해 만들어준 훅 useEffect(사이드 이펙트)
  //백엔드 데이터가 필요해서 간단하게 json-server를 구성합시당.
  useEffect( () => {
    console.log("비동기 추가 작업", []); //빈 배열
    //여기에 비동기를 써야 함. React에서 그렇게 하라고 useEffect를 만들어 줌
    axios.get("http://localhost:8272/todos").then(resp => {
      dispatch({type:"getYsTodos", payload:resp.data});
    });
  }, []);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export default TasksProvider
