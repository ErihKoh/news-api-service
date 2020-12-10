import React, { Component } from "react";
import { toast } from "react-toastify";

import s from "./NewsForm.module.css";
import { ImSearch } from "react-icons/im";

class NewsForm extends Component {
  state = {
    query: "",
  };

  handleNewsSubmit = (e) => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.query.trim() === "") {
      toast.error("Wow so easy !");
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          autoComplete="off"
          type="text"
          name="query"
          value={this.state.query}
          onChange={this.handleNewsSubmit}
        />
        <button type="submit">
          <ImSearch />
          search
        </button>
      </form>
    );
  }
}

export default NewsForm;
