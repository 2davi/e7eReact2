// import { useRef, useState } from 'react';
// import { TasksDispatchContext, useTasksDispatch } from './tasksContext';
import useSumin from './hooks/useSumin';

//let nextId = 3; //안 좋은 표현!! 이따 수정합시당
                  //const 아닌 게 밖으로 나오면, 규모가 커질 수록 미꾸라지가 됨



function AddTask() {
  /* function 키워드와 return jsx 사이에 코드들이 많아지게 됨
     소스가 잘 동작하면, 요때가 리팩토링(커스텀hook 만들기)할 시점!

  */

  // const [text, setText] = useState('');
  // const dispatch = useTasksDispatch(TasksDispatchContext);
  // //const dispatch = useState(TasksDispatchContext);
  // const nextId = useRef(3); //<-리렌더링ㅇ을 일으키지 않는 일반 전역변수도 사용가능
  // const taskAdd = () => {
  //   setText('');
  //   dispatch({
  //     type: 'added',
  //     id: nextId.current++,
  //     text: text,
  // });
  // }
  // const taskChg = e => {
  //   setText(e.target.value);
  // }
  // /* JSX 부분을 심플하게 만들어야 가독성이 좋아짐 */
  // => useSumin.jsx

  const {text, taskAdd, taskChg} = useSumin();
  return (
    <>
      {/* 그동안 우리는 ref를 써서 값을 가져다 썼는데 여기선
          value에다 상태 변수를 연결 시켰음!
          요런 걸 멋진 말로 Controlled 컴포넌트라 부름
          보통 개수가 많으면 부하를 많이 발생시킴.
          반대로 상태변수와 연결시키지 않으면 UnControlled 컴포넌트라 부름
          (UnControlled Component => ReRendering을 일으키지 않음)
          (Controlled Component => 타이핑 하나 칠 때마다 리렌더링 => 부하과중)
      */}
      <input
        placeholder="Add task"
        value={text}
        onChange={taskChg}
      />
      <button onClick={() => {taskAdd()}}>Add</button>
    </>
  );
}

export default AddTask;
