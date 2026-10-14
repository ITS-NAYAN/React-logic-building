import { useState } from "react";

const App = () => {

  const [size, setSize]=useState("M")
  return (
    <div>
      <h1>Option Selector Size</h1>
      <h2>T-Shirt</h2>
      <p>Choose a size: </p>
      <select value={size} onChange={(event) => setSize(event.target.value)}>
        <option value="M">M</option>
        <option value="S">S</option>
        <option value="L">L</option>
      </select>
      <h3>Selected size: {size}</h3>
    </div>
  );
}

export default App
