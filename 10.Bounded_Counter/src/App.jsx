import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          if (count < 10) {
            setCount(count + 1);
          }
        }}
      >
        {" "}
        INCREMENT
      </button>

      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        DECREMENT
      </button>
      <h2>{count}</h2>
    </div>
  );
};

export default App;
