import React from "react";
import { Link, NavLink } from "react-router-dom";
// import "../../App.css";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";

class Navbarout extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    fetch("/sessions", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res, "cdm navbarout");
      });
  }
  render() {
    return (
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
                <Link className="nav-link nav-item navFont" to="/articles/new">
                  New Post
                </Link>
                <Link
                  className="nav-link nav-item navFont"
                  to={`/users/${
                    this.props.currentUser && this.props.currentUser.id
                  }/settings`}
                >
                  Settings
                </Link>
                {/* <Link
                  className="nav-link nav-item navFont"
                  to={`/users/${
                    this.props.currentUser && this.props.currentUser.name
                  }`}
                >
                  {props.name}
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbarout;
