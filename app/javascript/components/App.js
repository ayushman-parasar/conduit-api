import React from "react";
import PropTypes from "prop-types";
import List from "./articles/List";
import CreateArticle from "./articles/CreateArticle";
import { Route, Switch } from "react-router-dom";
import API from "../utils/API";
import axios from "axios";
// import Cookies from "js-cookie";
import Global from "./feed/Global";
import Login from "./sessions/Login";
import UserFeed from "./feed/UserFeed";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: "",
      tags: "",
    };
  }
  componentDidMount() {
    const articles = axios("/articles", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    // const articles = API.fetchArticles();
    const tags = API.fetchTags();
    Promise.all([articles, tags]).then((res) =>
      this.setState({
        articles: res[0].data.articles,
        tags: res[1].data.tags,
      })
    );
  }

  render() {
    return (
      <>
        <UserFeed />
        <aside className="bg-light h-75 w-25  pb-3 border border-light aside-container">
          <p className="pt-3 pl-3">Popular tags</p>
          <div className="d-flex pl-3 flex-wrap ">
            {this.state.tags
              ? this.state.tags.map((tag, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => this.handleClick(tag)}
                      className="border rounded-pill p-1 mb-1"
                      // key={index}
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
      </>
    );
  }
}
export default App;
