import {  useState } from "react";

const App = () => {

  const [task, setTask]=useState("")
  const [taskarray, setTaskarray] = useState([
    { id: 1, work: "Learn React", completed: true },
    { id: 2, work: "Practice JavaScript", completed: false },
    { id: 3, work: "Learn Node.js", completed: false },
    { id: 4, work: "Build a project", completed: false },
  ]);

  const addTask=()=>{

    const newtask=task.trim();

    const newId =
      taskarray.length > 0
        ? Math.max(...taskarray.map((items) => items.id)) + 1
        : 1;

    const newItem={
      id:newId,
      work:newtask,
      completed:true,
    }

    setTaskarray([...taskarray,newItem])
    setTask(" ")
  }

  return (
    <div>
      <h1>Project 25: Todo List V1 (Add Only).</h1>
      <label htmlFor="new_task">Enter Task: </label>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      <h2>My Task</h2>
      <ul>
        {taskarray.map((item) => (
          <div>
            <p>{item.id}</p>
            <p>{item.work}</p>
            <p> {item.completed ? "Completed" : "Pending"}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App


