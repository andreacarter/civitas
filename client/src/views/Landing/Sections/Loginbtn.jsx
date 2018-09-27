import React from "react";
import { Link } from "react-router-dom";

class Loginbtn extends React.Component {
  render() {
    return (
      <div id="loginbtn">
        <button className="btn btn-info ml-5" type="button">
          <Link to={"/dashboard"}>
            <span className="text-white">Sign In</span>
          </Link>
        </button>
      </div>
    );
  }
}

export default Loginbtn;
