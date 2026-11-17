import { useState } from "react";

const App = () => {

  const [addtodo, setAddtodo]=useState("")
  const [todo, setTodo] = useState([
    { id:1, task: "Learn React" },
    { id:2, task: "Learn Express" },
    { id:3, task: "Learn Mongo" },
  ]);

  const add=()=>{

     if (!addtodo.trim()) {
       return;
     }
    
    const newId = Math.max(0, ...todo.map((item) => item.id)) + 1;
    const newtask={
      id:newId,
      task:addtodo
    }
    setTodo([...todo,newtask])
    setAddtodo("")
  }
  return (
    <div>
      <h1>TODO APP</h1>
      <label htmlFor="task">Enter Task: </label>
      <input type="text" onChange={(e)=>setAddtodo(e.target.value)} value={addtodo} />
      
      {todo.map((items) => (
        <>
          <p>{items.task}</p>
        </>
      ))}
      <button onClick={add}>ADD TASK </button>
    </div>
  );
}

export default App
