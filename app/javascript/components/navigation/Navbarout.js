import React from "react";
import { Link, NavLink } from "react-router-dom";
// import "../../App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Navbarout(props) {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="header-container header container">
          <Link
            className="navbar-brand col-md-8 "
            style={{
              color: "rgb(92,184,92)",
              fontWeight: "bold",
              fontSize: "22px",
            }}
            to="#"
          >
            conduit
          </Link>
          <div
            className="collapse navbar-collapse header-link"
            id="navbarSupportedContent"
          >
            <div>
              <div className="navbar-nav ">
                <a className="nav-link nav-item navFont" href="/">
                  Home
                </a>
                <a className="nav-link nav-item navFont" href="/articles/new">
                  New Post
                </a>
                <a
                  className="nav-link nav-item navFont"
                  href={`/user/${props.id}`}
                >
                  Setting
                </a>
                <a className="nav-link nav-item navFont" href="/register">
                  {props.name}
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Router>
  );
}
export default Navbarout;
