import { useState } from "react"

const App = () => {

  const [count, setCount]=useState(0)
  const [step, setStep]=useState(0)

  return (
    <div>
      <h1>Variable Step Counter</h1>
      <button onClick={() => setCount(count + step)}>INCREMENT</button>
      <button onClick={() => setCount(count - step)}>INCREMENT</button>

      <select onChange={(event)=>setStep(Number(event.target.value))}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="5">5</option>
      </select>
      <h2>{count}</h2>
    </div>
  );
}

export default App
