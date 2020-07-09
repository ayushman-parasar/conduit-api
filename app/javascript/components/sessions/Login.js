import React from "react";
import PropTypes from "prop-types";
import API from "../../utils/API";
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        email: "",
        password: "",
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
    API.loginNewUser(this.state.user).then((res) => {
      console.log(res);
      if (res.status == 200) {
        console.log(res.status);
        window.location.href = "/articles";
      }
    });
  };
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              name="email"
              value={this.state.user.email}
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={this.handleChange}
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              name="password"
              value={this.state.user.password}
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              onChange={this.handleChange}
              placeholder="Password"
            />
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
