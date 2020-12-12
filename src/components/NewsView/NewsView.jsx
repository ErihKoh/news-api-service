function NewsView({ articles }) {
  return (
    <ul>
      {articles.map(({ url, urlToImage, content, description }) => (
        <li key={description}>
          <a href={url}>
            <img src={urlToImage} alt={content} width="200" />
            <p>{description}</p>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NewsView;
