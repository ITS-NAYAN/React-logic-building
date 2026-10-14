import { useState } from "react"

const App = () => {

  const [isOn, setisOn]=useState(false)
  return (
    <div>
      <h1>On/Off Switch Project</h1>
      <button onClick={()=>setisOn(!isOn)}>Toggle</button>
      {isOn?<h1>ON</h1>:<h1>OFF</h1> }
    </div>
  );
}

export default App
