// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import ReactDOM from "react-dom";
import App from "../components/App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateArticle from "../components/articles/CreateArticle";
import Navbarout from "../components/navigation/Navbarout";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <App />,

    // <Navbarout />
    // <Router>
    //   <Switch>
    //     <Route exact path="/" component={App} />
    //     <Route exact path="/articles/new" component={CreateArticle} />
    //   </Switch>
    // </Router>
    document.body.appendChild(document.createElement("div"))
  );
});
