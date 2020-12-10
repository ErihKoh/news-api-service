import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewsForm from "./components/NewsForm";
import NewsSearch from "./components/NewsSearch";
import "./App.css";

class App extends Component {
  state = {
    queryForNews: "",
  };

  handleFormSubmit = (query) => {
    this.setState({ queryForNews: query });
  };

  render() {
    return (
      <div>
        <NewsForm onSubmit={this.handleFormSubmit} />
        <NewsSearch queryForNews={this.state.queryForNews} />
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}

export default App;
