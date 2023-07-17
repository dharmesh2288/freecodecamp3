import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/login");
    }
  });

  const collectdata = async () => {
    if (!name || !email || !password) {
      setError(true);
      return false;
    }

    let result = await fetch("http://localhost:5000/signup", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: { "content-type": "application/json" },
    });
    result = await result.json();
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result.result));
    localStorage.setItem("token", JSON.stringify(result.auth));
    navigate("/secondPage");
  };

  const loginPage = () => {
    navigate("/login");
  };

  return (
    <div className="">
      <div className="row1">
        <h3>Signup</h3>
        <div className="col">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="fullname"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="inputbox"
            required
          />

          <label>E-mail</label>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="inputbox"
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="inputbox"
            required
          />
          <button type="button" onClick={collectdata} className="signupbtn">
            Signup
          </button>
          <button type="submit" onClick={loginPage} className="signbtn">
            Already a user
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
