import { useState } from "react"

const App = () => {
  const [count, setCount]=useState(10)
  const [like, setLike]=useState(true)

  return (
    <div>
      <h1>Like Button Project</h1>
      <button
        onClick={()=>{like ? () => setCount(count + 1) & setLike(false) : null}}
      >
        <h2>LIKE {count}</h2>
      </button>

      <button onClick={like ? null : () => setCount(count - 1) & setLike(true)}>
        <h2>UNLIKE </h2>
      </button>
    </div>
  );
}

export default App
