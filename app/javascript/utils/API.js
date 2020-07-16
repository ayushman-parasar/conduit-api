import * as Routes from "./Routes";
import axios from "axios";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').content,
};

export default {
  postNewUser: (payload) => {
    return fetch(Routes.users_new_path(), {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    }).then((response) => {
      if (!response.ok) {
        return response;
      }
      return response;
    });
  },

  loginNewUser: (payload) => {
    return fetch(Routes.sessions_new_path(), {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    }).then((response) => {
      console.log(response, "response in api.js");
      if (!response.ok) {
        return response;
      }
      return response;
    });
  },
  postNewArticle: (payload) => {
    return fetch(Routes.articles_new_path(), {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    }).then((res) => {
      return res;
    });
  },
  fetchArticles: () => {
    return axios(Routes.articles_new_path(), {
      method: "GET",
      headers,
      mode: "cors",
    }).then((res) => {
      console.log(res, "articles");
      return res;
    });
  },
  fetchTags: () => {
    return axios("api/v1/tags", {
      method: "GET",
      headers,
    }).then((res) => {
      console.log(res, "tags");
      return res;
    });
  },
  fetchCurrentUser: () => {
    return fetch("/sessions", {
      method: "GET",
      headers,
    })
      .then((res) => res.json())
      .then((res) => {
        return res;
      });
  },
  updateUser: (id, payload) => {
    return fetch(`/api/v1/users/${id}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify(payload),
    }).then((res) => {
      // console.log(res, "updateuser");
      return res;
    });
  },
};
