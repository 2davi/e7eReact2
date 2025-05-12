import AddTask from "./AddTask";
import TaskList from "./TaskList";
import TasksProvider from "./TasksProvider";

/*
    분명 낯선 게 당연함. 복습을 꼭 해야함!
    손에 익숙해졌을 때가 진정 충분한 복습이 된 경우
    export 안 된 건 import할 수 없음(당연한 이야기)
    error 메세지 안 읽는 사람들 -> 꼭 번역해서라도 읽기(너무나 중요)
    error 메세지 안 읽는 사람들 회사가면 옆에 사람이 없음
*/


function App() {

  return (
    <>
      <TasksProvider>
        <AddTask />
        <TaskList />
      </TasksProvider>

    </>
  )
}

export default App
