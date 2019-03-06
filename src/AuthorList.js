import React, { Component } from "react";
import authors from "./data";
import AuthorCard from "./AuthorCard";
class AuthorList extends Component {
  render() {
    const authorrList = this.props.authors.map(author => (
      <AuthorCard key={author.first_name} author={author} />
    ));

    return (
      <div className="content col-10">
        <div className="authors">
          <h3>Authors</h3>
          <div className="row">{authorrList}</div>
        </div>
      </div>
    );
  }
}

export default AuthorList;
