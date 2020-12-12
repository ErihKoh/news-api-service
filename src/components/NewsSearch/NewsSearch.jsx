import React, { Component } from "react";
import NewsView from "../NewsView";
import NewsError from "../ErrorView";
import NewsPendingView from "../NewsPendingView";
import newsApi from "../../services/NewsApi/NewsApi";

class NewsSearch extends Component {
  state = {
    articles: null,
    error: null,
    status: "idle",
  };
  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.queryForNews;
    const nextQuery = this.props.queryForNews;

    if (prevQuery !== nextQuery) {
      this.setState({ status: "pending" });
      newsApi
        .FetchNews(nextQuery)
        .then(({ articles }) => this.setState({ articles, status: "resolved" }))
        .catch((error) => this.setState({ error, status: "rejected" }));
    }
  }
  render() {
    const { articles, error, status } = this.state;
    // const { queryForNews } = this.props;

    if (status === "idle") {
      return <div>enter query</div>;
    }

    if (status === "pending") {
      return <NewsPendingView />;
    }

    if (status === "rejected") {
      return <NewsError message={error.message} />;
    }

    if (status === "resolved") {
      return articles.length !== 0 ? (
        <NewsView articles={articles} />
      ) : (
        <NewsError message="По вашему запросу ничего не найдено" />
      );
    }
  }
}

export default NewsSearch;
