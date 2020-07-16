import React from "react";
import PropTypes from "prop-types";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
class AllFeed extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section>
          <div>
            {this.props.articles
              ? this.props.articles.map((article, index) => {
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
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default AllFeed;
