import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewsForm from "./components/NewsForm";
import NewsSearch from "./components/NewsSearch";
import "./App.css";

const App = () => {
  const [queryForNews, setQueryForNews] = useState("");

  const handleFormSubmit = (query) => {
    setQueryForNews(query);
  };

  return (
    <div>
      <NewsForm onSubmit={handleFormSubmit} />
      <NewsSearch queryForNews={queryForNews} />
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default App;
