import React from "react";
import PropTypes from "prop-types";
import Hero from "./Hero";
import UserFeed from "./UserFeed";
class PersonalFeed extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>PersonalFeed</h1>
        <Hero title={this.props.currentUser.name} />
        <UserFeed currentUser={this.props.currentUser} />
      </React.Fragment>
    );
  }
}

export default PersonalFeed;
