import { useState } from "react";

const App = () => {
  const [cel, setCel] = useState("");
  const [far, setFar] = useState("");

  const handleCelsiusChange = (e) => {
    const value = e.target.value;

    if (value === "") {
      setCel("");
      setFar("");
      return;
    }

    const celsius = Number(value);
    const fahrenheit = (celsius * 9) / 5 + 32;

    setCel(value);
    setFar(String(fahrenheit));
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;

    if (value === "") {
      setFar("");
      setCel("");
      return;
    }

    const fahrenheit = Number(value);
    const celsius = ((fahrenheit - 32) * 5) / 9;

    setFar(value);
    setCel(String(celsius));
  };

  return (
    <div>
      <h1>Temperature Converter</h1>

      <div>
        <label htmlFor="celsius">Celsius (°C): </label>
        <input
          id="celsius"
          type="number"
          value={cel}
          onChange={handleCelsiusChange}
          placeholder="Enter Celsius"
        />
      </div>

      <br />

      <div>
        <label htmlFor="fahrenheit">Fahrenheit (°F): </label>
        <input
          id="fahrenheit"
          type="number"
          value={far}
          onChange={handleFahrenheitChange}
          placeholder="Enter Fahrenheit"
        />
      </div>
    </div>
  );
};

export default App;
