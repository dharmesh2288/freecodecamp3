import React from "react";
import { useNavigate } from "react-router-dom";

const SecondPage = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h6>Welcome to freeCodeCamp.org</h6>
          <div className="Thought">
            "I have not failed. I've just found 10,000 ways
            <br />
            <center>that won't work"</center>
            <center>- Thomas A. Edison</center>
            <div className="courselist">
              (New) Responsive Web Design Certification (300 hours){" "}
            </div>
            <br />
            <div className="courselist">
              Legacy Responsive Web Design Certification (300 hours){" "}
            </div>
            <br />
            <div className="courselist">
              Jacascript Algorithms and Data Structure Certification (300 hours){" "}
            </div>
            <br />
            <div className="courselist">
              Front End Development Libraries certification (300 hours){" "}
            </div>
            <br />
            <div className="courselist">
              Data Visulaization Certification (300 hours){" "}
            </div>
            <br />
            <div className="courselist">
              Back End Development and APIs certification (300 hours){" "}
            </div>
            <br />
            <div className="courselist">
              Quality Assurance certification (300 hours){" "}
            </div>
          </div>
        </div>
      </div>
      <button type="button" onClick={Logout} to="/signup" className="logoutbtn">
        Logout
      </button>
    </div>
  );
};

export default SecondPage;
