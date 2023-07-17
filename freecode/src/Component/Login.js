import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/secondPage");
    }
  }, []);

  const loginbutton = async () => {
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.auth) {
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", JSON.stringify(result.auth));
      navigate("/secondPage");
    } else {
      alert("Enter valid email");
    }
  };
  return (
    <div className="container-fluid">
      <div className="row2">
        <h3>Login</h3>
        <div className="col">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="loginbox"
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="loginbox"
          />
          <button type="submit" on onClick={loginbutton} className="loginbtn">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
