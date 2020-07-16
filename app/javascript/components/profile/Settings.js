import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import API from "../../utils/API";

class Settings extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
      user: {
        name: "",
        email: "",
        password: "",
        // password_confirmation: "",
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
    API.updateUser(this.props.match.params.id, {
      user: this.state.user,
    }).then((response) => {
      console.log(response, "response");
      // if (response.status == 200) {
      //   window.location.href = "/sessions/new";
      // }
    });
  };

  componentDidMount() {
    fetch(`/users/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          currentUser: res.user,
        })
      );
  }
  render() {
    return (
      <div className="container  font-size w-50">
        {console.log(this.state.currentUser)}
        <h3 className="text-center p-2">Settings</h3>
        <form className="font-family" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              name="name"
              value={this.state.user.name}
              onChange={this.handleChange}
              type="text"
              className="form-control font-size "
              placeholder={`${
                this.state.currentUser && this.state.currentUser.name
              }`}
            />
          </div>
          {/* <div className="form-group">
            <textarea
              className="form-control text-muted textarea"
              placeholder="Short bio about you"
              rows="7"
            ></textarea>
          </div> */}
          <div className="form-group">
            <input
              name="email"
              value={this.state.user.email}
              onChange={this.handleChange}
              type="email"
              className="form-control"
              placeholder={`${
                this.state.currentUser && this.state.currentUser.email
              }`}
            />
          </div>
          <div className="form-group">
            <input
              name="password"
              className="form-control"
              placeholder="Enter password"
              onChange={this.handleChange}
              value={this.state.user.password}
              type="password"
            />
          </div>
          <div className="d-flex flex-row-reverse">
            <div className="button d-flex justify-content-end">
              <button
                type="submit"
                className="btn w-20 btn-lg px-4 btn-success"
              >
                Update Setting
              </button>
            </div>
            <div className="button d-flex justify-content-end mr-2">
              <button
                onClick={() => this.props.logout(this.props.match.params.id)}
                type="submit"
                className="btn w-20 btn-md px-4 btn-danger"
              >
                Log out
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Settings);
