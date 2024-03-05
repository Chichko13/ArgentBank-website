import { Form, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../api/loginApi";
export default function SignIn() {
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const formSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = await login(formData);
    if (result.success) {
      navigate("/user");
    } else {
      setErrorMessage(result.message);
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <Form method="post" onSubmit={formSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="email" id="username" name="email" required />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" type="submit">
            Sign In
          </button>
        </Form>
        {errorMessage && <div className="error__message">{errorMessage}</div>}
      </section>
    </main>
  );
}
