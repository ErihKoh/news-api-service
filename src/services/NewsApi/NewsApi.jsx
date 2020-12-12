function FetchNews(query) {
  return fetch(
    `https://newsapi.org/v2/everything?q=${query}&apiKey=4330ebfabc654a6992c2aa792f3173a3`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`по запросу ${query} ничего не найдено`));
  });
}

const api = {
    FetchNews,
}
export default api;
