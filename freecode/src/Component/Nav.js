import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const signbtn = () => {
    navigate("/signup");
  };
  return (
    <div className="">
      <ul className="Nav-ul">
        <li>
          {" "}
          <form className="d-flex">
            <button className="btnbtn" type="submit">
              Search
            </button>
            <input
              className="form-control"
              type="search"
              placeholder="Search"
            />
          </form>
        </li>
        <li>
          <span className="wordcenter">Freecodecamp</span>
        </li>
        <li>
          <button type="button" className="navbtn">
            Menu
          </button>
        </li>
        <li>
          <button type="button" onClick={signbtn} className="navbtn">
            Signup
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
