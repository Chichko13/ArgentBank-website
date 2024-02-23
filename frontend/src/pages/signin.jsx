import { useDispatch } from "react-redux";
import { redirect, Form } from "react-router-dom";

export async function action({ request }) {
  const form = await request.formData();
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(Object.fromEntries(form)),
    });
    const data = await response.json();
    if (response.status === 200) {
      console.log(data);
      sessionStorage.setItem("userToken", data.body.token);
      return redirect("/user");
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error(error);
  }
  return null;
}
export default function SignIn() {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <Form method="post">
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="email" id="username" name="email" />
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
      </section>
    </main>
  );
}
