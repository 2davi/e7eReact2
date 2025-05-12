import Task from "./Task";
import { useTasks } from "./tasksContext";

function TaskList() {
  const tasks = useTasks(); //아래와 같은 의미
  //const tasks = useContext(TasksContext);
  console.log("체킁: ", tasks);
  return (
    <>
      <ul>
        { tasks.length ? 
        tasks.map(task => (
          <li key={task.id}>
            <Task task={task} />
          </li>
        )): (<h1>할 일 없는딩ㅗ^ㅂ^ㅗ</h1>)
        }
      </ul> 
    </>
  );
}

export default TaskList;