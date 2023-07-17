import React from "react";
import { useNavigate } from "react-router-dom";
const Menu = () => {
  const navigate = useNavigate();

  const Menu = () => {
    navigate("/signup");
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1>Learn to code - for free</h1>
          <br></br>
          <h2 className="p-list">Build projects</h2>
          <br></br>
          <h2 className="p-list">Earn certifications</h2>
          <br></br>
          <p>
            Since 2014,more than 40,000 freeCodeCamp.org graduates have gotten
            <br></br>
            jobs at tech companies including:
          </p>
          <span>
            <i class="bi bi-apple"></i>
          </span>
          <span>Google</span>
          <span>
            <i class="bi bi-microsoft"></i>microsoft
          </span>
          <span>
            <i class="bi bi-spotify"></i>spotify
          </span>
          <span>amazon.com</span>
        </div>
        <button type="button" onClick={() => Menu()} className="btn-free">
          Get Started (it's free){" "}
        </button>
      </div>
    </div>
  );
};

export default Menu;
