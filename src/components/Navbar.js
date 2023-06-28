import React from "react";

import logo from "./images/logo.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} className="logo" alt="" />
        </Link>
        <Link className="navbar-brand" to = "/">
          Aryavart Staffing Solutions
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item mr-5">
              <Link
                className="nav-link active"
                aria-current="page"
                to = "/home"
              >
                HOME
              </Link>
            </li>
            <li className="nav-item mr-5">
              <Link
                className="nav-link active"
                aria-current="page"
                to = "/ourjourney"
              >
                OUR JOURNEY
              </Link>
            </li>
            <li className="nav-item mr-5">
              <Link className="nav-link active" to ="/about">
                ABOUT US
              </Link>
            </li>
            <li className="nav-item mr-5">
              <Link className="nav-link active" to = "/services">
                SERVICES
              </Link>
            </li>

            <li className="nav-item" style={{ marginRight: "90px" }}>
              <Link className="nav-link active" to ="/whyus">
                WHY US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
