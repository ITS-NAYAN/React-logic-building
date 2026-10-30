import { useState } from "react";

const App = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle changes in all input fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear the success message if the user edits the form
    setSubmitted(false);
  };

  // Validate all fields
  const validate = (values) => {
    const newErrors = {};

    if (!values.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!values.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!values.password) {
      newErrors.password = "Password is required.";
    } else if (values.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    if (!values.confirm_password) {
      newErrors.confirm_password = "Please confirm your password.";
    } else if (values.password !== values.confirm_password) {
      newErrors.confirm_password = "Passwords do not match.";
    }

    return newErrors;
  };

  // Mark a field as touched when the user leaves it
  const handleBlur = (e) => {
    const { name } = e.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    // Validate and update errors
    const validationErrors = validate(form);
    setErrors(validationErrors);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(form);

    setErrors(validationErrors);

    // Mark every field as touched so all errors can appear
    setTouched({
      name: true,
      email: true,
      password: true,
      confirm_password: true,
    });

    if (Object.keys(validationErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
  };

  // Display an error only when its field has been touched
  // or the user has attempted to submit the form.
  const getError = (field) => {
    return touched[field] || Object.keys(touched).length === 4
      ? errors[field]
      : "";
  };

  return (
    <div>
      <h1>Signup Form Validation</h1>

      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name">Full Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {getError("name") && (
            <p style={{ color: "red" }}>{getError("name")}</p>
          )}
        </div>

        <br />

        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {getError("email") && (
            <p style={{ color: "red" }}>{getError("email")}</p>
          )}
        </div>

        <br />

        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {getError("password") && (
            <p style={{ color: "red" }}>{getError("password")}</p>
          )}
        </div>

        <br />

        <div>
          <label htmlFor="confirm_password">Confirm Password:</label>
          <input
            id="confirm_password"
            name="confirm_password"
            type="password"
            value={form.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {getError("confirm_password") && (
            <p style={{ color: "red" }}>{getError("confirm_password")}</p>
          )}
        </div>

        <br />

        <button type="submit">Sign Up</button>

        {submitted && <p style={{ color: "green" }}>Signup successful!</p>}
      </form>
    </div>
  );
};

export default App;
