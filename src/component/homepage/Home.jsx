import React, { useEffect, useState } from "react";
import { getArticles } from "../../api";
import ArticleCard from "./articles/ArticleCard";
function Home() {
  const [article, setArticle] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getArticles().then((res) => setArticle(res));
    setLoading(false);
  }, []);

  if (isLoading) {
    return <>Loading....</>;
  }
  return (
    <React.Fragment>
      <ArticleCard article={article} />
    </React.Fragment>
  );
}

export default Home;
