import React, { Component } from "react";
import { graphql } from "react-apollo";

import { getAuthorsQuery } from "../queries/queries";

class AddBook extends Component {
  displayAuthor() {
    const data = this.props.data;

    if (data.loading) {
      return <option disabled>Loading Authors...</option>;
    }
    return data.authors.map(author => {
      return (
        <option key={author.key} value={author.id}>
          {author.name}
        </option>
      );
    });
  }

  render() {
    return (
      <form id="add-book">
        <div className="field">
          <label>Book name:</label>
          <input type="text" />
        </div>

        <div className="field">
          <label>Genre:</label>
          <input type="text" />
        </div>

        <div className="field">
          <label>Author:</label>
          <select>{this.displayAuthor()}</select>
        </div>

        <button>+</button>
      </form>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);
