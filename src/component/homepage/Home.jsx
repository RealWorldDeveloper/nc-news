import React, { useEffect, useState } from "react";
import { getArticles } from "../../api";
import ArticleCard from "./articles/ArticleCard";
import SortingArticles from "./articles/SortingArticles";

function Home() {
  const [articles, setArticles] = useState([]);
  const [sortedArticles, setSortedArticles] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [sortOption, setSortOption] = useState("created_at"); // Default sorting: Date

  useEffect(() => {
    setLoading(true);
    getArticles().then((res) => {
      setArticles(res);
      setSortedArticles(res); // Initialize sorted list
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const sortArticles = () => {
      const sorted = [...articles]; // Copy original articles
      sorted.sort((a, b) => {
        if (sortOption === "votes") {
          return b.votes - a.votes; // Sort by votes descending
        } else if (sortOption === "comment_count") {
          return b.comment_count - a.comment_count; // Sort by comments descending
        } else {
          return new Date(b.created_at) - new Date(a.created_at); // Sort by date descending
        }
      });
      setSortedArticles(sorted);
    };
    sortArticles();
  }, [sortOption, articles]); // Re-sort when `sortOption` or `articles` change

  if (isLoading) {
    return <>Loading....</>;
  }

  return (
    <React.Fragment>
      <SortingArticles setSortOption={setSortOption} />
      <ArticleCard article={sortedArticles} />
    </React.Fragment>
  );
}

export default Home;
