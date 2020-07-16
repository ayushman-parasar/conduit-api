import React from "react";

import axios from "axios";
import Hero from "./Hero";

import UserFeed from "./UserFeed";
import AllFeed from "./AllFeed";

// const slug = React.createRef();

class Global extends React.Component {
  constructor() {
    super();
    this.state = {
      userArticles: null,
      tagArticles: null,
      currentTag: null,
      globalFeed: true,
      userFeed: false,
    };
  }
  handleGlobal = () => {
    this.setState({
      globalFeed: true,
    });
  };

  handleUserFeed = () => {
    this.setState({
      globalFeed: false,
    });
  };
  // };
  // handleClick = (atrib) => {
  //   axios(`api/articles?tag=${atrib}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then((res) =>
  //     // console.log(res)
  //     this.setState({
  //       tagArticles: res.data,
  //       currentTag: atrib,
  //       globalFeed: false,
  //     })
  //   );
  // };

  componentDidMount() {
    this.setState({
      userFeed: false,
    });
  }

  render() {
    return (
      <div>
        <Hero title="Conduit" />
        <div className="d-flex justify-content-center container">
          <div className="flex-column w-75">
            <section className=" col-md-10">
              <div style={{ width: "200px" }}>
                <div className="d-flex">
                  <p
                    onClick={this.handleGlobal}
                    className="text-success ml-4"
                    style={{ cursor: "pointer" }}
                  >
                    Global Feed
                  </p>
                  {/* {this.state.globalFeed ? null : (
                  <p
                    className="text-success ml-4"
                    style={{ cursor: "pointer" }}
                  >
                    {this.state.currentTag}
                  </p>
                )} */}
                  <p
                    onClick={this.handleUserFeed}
                    className="text-success ml-4"
                    style={{ cursor: "pointer" }}
                  >
                    Your Feed
                  </p>
                </div>
                <hr className="border border-success w-75 ml-0" />
              </div>
              {/*  */}
              {this.state.globalFeed ? (
                <AllFeed
                  articles={this.props.articles}
                  tags={this.props.tags}
                />
              ) : (
                <UserFeed currentUser={this.props.currentUser} />
              )}
            </section>
          </div>
          <aside className="bg-light h-75 w-25 pb-3 border border-light aside-container">
            <p className="pt-3 pl-3">Popular tags</p>
            <div className="d-flex pl-3 flex-wrap ">
              {this.props.tags
                ? this.props.tags.map((tag, index) => {
                    return (
                      <div
                        // onClick={() => this.handleClick(tag)}
                        className="border rounded-pill p-1 mb-1"
                        key={index}
                        style={{
                          backgroundColor: "rgb(129,138,145)",
                          color: "white",
                          fontSize: "12px",
                          cursor: "pointer",
                        }}
                      >
                        {tag.content}
                      </div>
                    );
                  })
                : null}
            </div>
          </aside>
        </div>
      </div>
    );
  }
}

export default Global;
