import React from "react";
import * as Routes from "../../utils/Routes";
import API from "../../utils/API";

class CreateArticle extends React.Component {
  constructor() {
    super();
    this.state = {
      article: {
        title: "",
        content: "",
        errors: null,
        taglist: "",
        tag: [],
      },
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      article: {
        ...this.state.article,
        [name]: value,
      },
    });
  };

  handleSubmit = (e) => {
    const { title, content, taglist } = this.state.article;
    e.preventDefault();
    const payload = {
      title,
      content,
      // taglist,
      tags_attributes: taglist.split(", ").map((tag) => ({ content: tag })),
    };
    console.log(payload, "payload");
    API.postNewArticle(payload).then((res) => {
      if (res.status == 200) {
        window.location.href = "/articles";
      }
    });
  };

  render() {
    console.log(this.state.article.taglist, "taglist");
    return (
      <>
        <h2>Form for new Article</h2>
        <div className="container p-5 font-size w-75">
          <form className="font-family" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                name="title"
                onChange={this.handleChange}
                value={this.state.article.title}
                type="text"
                className="form-control input-title pl-4 text-muted"
                placeholder="Article Title"
              />
            </div>
            <div className="form-group">
              <textarea
                name="content"
                onChange={this.handleChange}
                value={this.state.article.content}
                className="form-control text-muted textarea"
                rows="7"
              >
                Write your Content (in markdown)
              </textarea>
            </div>
            <div className="form-group">
              <input
                name="taglist"
                value={this.state.article.taglist}
                onChange={this.handleChange}
                type="text"
                className="form-control"
                placeholder="Enter tags"
              />
            </div>
            <div className="button d-flex justify-content-end ">
              <button
                type="submit"
                className="btn w-20 btn-lg px-4 btn-success"
              >
                Publish Article
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default CreateArticle;
