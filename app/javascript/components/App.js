import React from "react";
import PropTypes from "prop-types";
import List from "./articles/List";
import CreateArticle from "./articles/CreateArticle";
import { Route, Switch } from "react-router-dom";
import API from "../utils/API";
import axios from "axios";

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
    Promise.all([articles, tags]).then((res) => console.log(res));
  }

  privateRoutes = () => {
    <Switch>
      console.log("private")
      <Route exact path="/">
        {/* <Global articles={} /> */}
      </Route>
    </Switch>;
  };

  publicRoutes = () => {};
  render() {
    return <div></div>;
  }
}

export default App;
