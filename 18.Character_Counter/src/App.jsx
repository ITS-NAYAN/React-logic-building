import React from "react";
import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <textarea
        type="text"
        onChange={(e) => setText(e.target.value)}
        maxLength={100}
      />
      <p>Total text limit: 100</p>
      <p>Current text count: {text.length}</p>
      <p>Remaining text count: {100 - text.length}</p>
    </div>
  );
};

export default App;
