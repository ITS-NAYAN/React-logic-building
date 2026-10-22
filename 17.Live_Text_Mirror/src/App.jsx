import { useState } from "react"

const App = () => {

  const [text, setText]=useState("")
  return (
    <div>
      <h1>Live Text Mirror Project</h1>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <p>{text === "" ? "Start typing to see your text..." : text}</p>
    </div>
  );
}

export default App
