import { useState } from "react";

const App = () => {
  const [password, setPassword] = useState("");

  const hasMinimumLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialCharacter = /[^A-Za-z0-9]/.test(password);

  const isPasswordValid =
    hasMinimumLength &&
    hasUppercase &&
    hasLowercase &&
    hasNumber &&
    hasSpecialCharacter;

  return (
    <div>
      <h1>Password Rule Checker</h1>

      <label htmlFor="password">Enter Password: </label>

      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />

      <h3>Password Requirements</h3>

      <p>{hasMinimumLength ? "✅" : "❌"} At least 8 characters</p>

      <p>{hasUppercase ? "✅" : "❌"} Contains an uppercase letter</p>

      <p>{hasLowercase ? "✅" : "❌"} Contains a lowercase letter</p>

      <p>{hasNumber ? "✅" : "❌"} Contains a number</p>

      <p>{hasSpecialCharacter ? "✅" : "❌"} Contains a special character</p>

      {isPasswordValid && <h3>All password requirements satisfied!</h3>}
    </div>
  );
};

export default App;
