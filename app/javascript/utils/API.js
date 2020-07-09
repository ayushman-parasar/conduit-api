import * as Routes from "./Routes";

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
      return response.json();
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
};
