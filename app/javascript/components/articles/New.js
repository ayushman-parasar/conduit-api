import React from "react";

class New extends React.Component {
  constructor() {
    super();
    this.state = {
      article: {
        title: "",
        content: "",
        errors: null,
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
    e.preventDefault();
    alert("submit clicked");
  };

  render() {
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
            {/* <div className="form-group">
              <input
                name="taglist"
                value={this.state.taglist}
                onChange={this.handleChange}
                type="text"
                className="form-control"
                placeholder="Enter tags"
              />
            </div> */}
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

export default New;
