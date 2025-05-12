import { useState } from 'react';
import { useTasksDispatch } from './tasksContext';
import axios from 'axios';
import {delTodos} from './api/todoAPI';


function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();
  const delTodo = async () => {
    //요기 어케 할건지 해봄당, 초 간단(흐름이 보인다면),
    //흐름이 안 보이면 어려움.
// axios.delete(`http://localhost:8272/todos/${task.id}`)
// .then(resp => {
//   //서버(백엔드)에서 어떻게 return 해주느냐에 따라 달라짐
//   //RESTful 구성에 있어 주요 요소, url약속 & return 형태 약속

//   console.log(resp);
//   dispatch({
//     type: 'deleted',
//     id: resp.data.id
//   });
// })
    //우리가 만든 todoAPI로 리팩토링
    //async 함수는 return타입이 무조건 Promise당
    const delTask = await delTodos(task.id); //<--삭제된 task의 정보
    dispatch({
      type:"delete",
      id: delTask.id
    });
  }
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={e => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                text: e.target.value
              }
            });
          }} />
        <button onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
          dispatch({
            type: 'changed',
            task: {
              ...task,
              done: e.target.checked
            }
          });
        }}
      />
      {taskContent}
      <button onClick={delTodo}>
        Delete
      </button>
    </label>
  );
}

export default Task;