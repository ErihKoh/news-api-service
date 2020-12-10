import React, { Component } from "react";

class NewsSearch extends Component {
  state = {
    articles: null,
    loading: false,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.queryForNews;
    const nextQuery = this.props.queryForNews;

    if (prevQuery !== nextQuery) {
      this.setState({ loading: true });
      fetch(
        `https://newsapi.org/v2/everything?q=${nextQuery}&apiKey=4330ebfabc654a6992c2aa792f3173a3`
      )
        .then((res) => res.json())
        .then(({ articles }) => this.setState({ articles }))
        .finally(() => this.setState({ loading: false }));
    }
  }
  render() {
    const { articles, loading } = this.state;
    const { queryForNews } = this.props;

    return (
      <div>
        {loading && <div>Загружаеm...</div>}
        <h2>{queryForNews}</h2>
        {!queryForNews && <div>enter query</div>}
        {articles && <div>hi</div>}
      </div>
    );
  }
}

export default NewsSearch;
