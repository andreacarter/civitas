import React from "react";
import logo from "../../../assets/img/logo.jpg";

class LandingNav extends React.Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-white fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" href="#" width="250">
            <img src={logo} />
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#features">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#signup">
                  Contact
                </a>
              </li>
            </ul>
            <div id="start">
              <form className="form-inline">
                <a
                  href="#about"
                  className="btn btn-outline-dark ml-5 js-scroll-trigger"
                >
                  Learn more
                </a>
              </form>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default LandingNav;
