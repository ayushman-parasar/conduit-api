import React from "react";
import PropTypes from "prop-types";
import List from "./articles/List";
import CreateArticle from "./articles/CreateArticle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "../utils/API";
import axios from "axios";
// import Cookies from "js-cookie";
import Global from "./feed/Global";
import Login from "./sessions/Login";
import UserFeed from "./feed/UserFeed";
import Navbarout from "./navigation/Navbarout";
import Navbarin from "./navigation/Navbarin";
import Settings from "./profile/Settings";
import PersonalFeed from "./feed/PersonalFeed";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: "",
      tags: "",
      currentUser: null,
    };
  }
  componentDidMount() {
    const articles = API.fetchArticles();
    const tags = API.fetchTags();
    const currentUser = API.fetchCurrentUser();

    Promise.all([articles, tags, currentUser]).then(
      (res) =>
        this.setState({
          articles: res[0].data.articles,
          tags: res[1].data.tags,
          currentUser: res[2].currentUser,
        })
      // console.log(res, "Promise resolved")
    );
  }
  logout = (id) => {
    console.log(`logout clicked ${id}`);
    fetch(`/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      this.setState({
        currentUser: null,
      });
    });
  };

  render() {
    return (
      // <>
      //   {/* <Navbarout /> */}
      //   <UserFeed />
      //   <aside className="bg-light h-75 w-25  pb-3 border border-light aside-container">
      //     <p className="pt-3 pl-3">Popular tags</p>
      //     <div className="d-flex pl-3 flex-wrap ">
      //       {this.state.tags
      //         ? this.state.tags.map((tag, index) => {
      //             return (
      //               <div
      //                 key={index}
      //                 onClick={() => this.handleClick(tag)}
      //                 className="border rounded-pill p-1 mb-1"
      //                 // key={index}
      //                 style={{
      //                   backgroundColor: "rgb(129,138,145)",
      //                   color: "white",
      //                   fontSize: "12px",
      //                   cursor: "pointer",
      //                 }}
      //               >
      //                 {tag.content}
      //               </div>
      //             );
      //           })
      //         : null}
      //     </div>
      //   </aside>
      // </>
      <Router>
        {this.state.currentUser ? (
          <Navbarout currentUser={this.state.currentUser} />
        ) : (
          <Navbarin />
        )}
        <Switch>
          <Route exact path="/articles/new">
            <CreateArticle />
          </Route>
          <Route exact path="/">
            <Global
              tags={this.state.tags}
              articles={this.state.articles}
              currentUser={this.state.currentUser}
            />
          </Route>
          <Route exact path="users/:name">
            <PersonalFeed />
          </Route>
          <Route exact path="/users/:id/settings">
            <Settings logout={this.logout} />
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default App;
