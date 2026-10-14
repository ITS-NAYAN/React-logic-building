import React from 'react'
import { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>COUNTER APP PROJECT</h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <button onClick={() => setCount(0)}>Reset Me</button>

      <h2>{count}</h2>
    </div>
  );
}

export default App
