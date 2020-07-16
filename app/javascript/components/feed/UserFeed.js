import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

class UserFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: null,
    };
  }
  componentDidMount() {
    axios(`/users/${this.props.currentUser.id}/feed`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      this.setState({
        articles: res.data.articles,
      });

      // console.log(res, "rs");
    });
  }
  render() {
    return (
      <React.Fragment>
        {this.state.articles
          ? this.state.articles.map((article, index) => {
              return (
                <div key={index} className="p-2">
                  <div className="p-2 d-flex flex-row justify-content-between">
                    <div className="d-flex">
                      <img
                        src="https://i.imgur.com/g5qR3O8.png"
                        style={{ width: "40px", borderRadius: "50%" }}
                      />
                      <div className="ml-2">
                        <h6
                          className="mb-1"
                          style={{
                            fontSize: "13px",
                            fontWeight: "300",
                            color: "grey",
                          }}
                        >
                          author
                        </h6>
                        <small className="text-disable">
                          Created At:{article.created_at.split("T")[0]}
                        </small>
                      </div>
                    </div>
                    <div
                      onClick={() => {
                        console.log("clicked");
                      }}
                      className="upvote-btn border border-success rounded p-2"
                    >
                      <FaHeart color="rgb(102,184,92)" />
                      <span className="text-success">3</span>
                    </div>
                  </div>

                  <div className="p-2">
                    <h6 className="text-success mb-1">
                      {article.title.toUpperCase()}
                    </h6>
                    <p className="text-dark ">{article.content}</p>
                    <Link
                      className="d-block text-secondary"
                      style={{ fontSize: "12px" }}
                      to={`/articles/${article.id}`}
                      // ref={slug}
                      // onClick={this.handleClick}
                    >
                      Read more
                    </Link>
                  </div>
                  <hr />
                </div>
              );
            })
          : null}
      </React.Fragment>
    );
  }
}

export default UserFeed;
