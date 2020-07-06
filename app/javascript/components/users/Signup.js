import React from "react";
import PropTypes from "prop-types";
import API from "../../utils/API";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
    };
  }
  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      user: {
        ...this.state.user,
        [name]: value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    API.postNewUser({ user: this.state.user }).then((response) => {
      console.log(response, "response");
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container d-flex justify-content-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group col-md-6">
              <input
                name="name"
                onChange={this.handleChange}
                value={this.state.user.name}
                placeholder="Name"
                type="text"
              />
            </div>
            <div className="form-group col-md-6">
              <input
                onChange={this.handleChange}
                name="email"
                value={this.state.user.email}
                type="email"
                placeholder="email"
              />
            </div>
            <div className="form-group col-md-6">
              <input
                onChange={this.handleChange}
                name="password"
                value={this.state.user.password}
                placeholder="password"
                type="password"
              />
            </div>
            <div className="form-group col-md-6">
              <input
                onChange={this.handleChange}
                name="password_confirmation"
                value={this.state.user.passwordConfirmation}
                placeholder="password confirmation"
                type="password"
              />
            </div>
            <div className="button d-flex justify-content-end ">
              <button
                type="submit"
                className="btn w-20 btn-lg px-4 btn-success"
              >
                Sign Up!!
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Signup;
