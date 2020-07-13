import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

class UserFeed extends React.Component {
  componentDidMount() {
    axios("/1/feed", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res, "cdm in Userfeed");
    });
  }
  render() {
    return (
      <React.Fragment>
        <h2>UserFeed</h2>
      </React.Fragment>
    );
  }
}

export default UserFeed;
