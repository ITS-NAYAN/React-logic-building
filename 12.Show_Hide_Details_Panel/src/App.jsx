import { useState } from "react"

const App = () => {
  const [isVisible, setIsVisible]=useState(false)
  return (
    <div>
      <h1>Product Details</h1>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide Detail" : "Show Detail"}
      </button>

      {isVisible ? (
        <p>This product has 8GB RAM and 256GB storage</p>
      ) : (
        null
      )}
    </div>
  );
}

export default App
