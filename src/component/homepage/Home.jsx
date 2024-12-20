import React, { useEffect, useState } from "react";
// import { getArticles } from "../../api";
import ArticleCard from "./articles/ArticleCardList";
import SortingArticles from "./articles/SortingArticles";
import { sortArticles } from "../../utils";
import { apiClient } from "../../api";

function Home() {
  const [articles, setArticles] = useState([]);
  const [sortedArticles, setSortedArticles] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [sortOption, setSortOption] = useState("created_at");

  useEffect(() => {
    setLoading(true);
    setTimeout(()=>{
       apiClient.get('/articles').then((res) => {  
      setArticles(res.data.article);
      setSortedArticles(res.data.article);
      setLoading(false);
    })
    },3000)
   
  }, []);


  useEffect(() => {
    const sorted = sortArticles(articles, sortOption);
    setSortedArticles(sorted);
  }, [sortOption, articles]);


  return (
    <React.Fragment>
      {isLoading ? (<div className="container loader-container m-4">
        <h2>Please Wait....</h2>
            <div className="spinner mx-3">
            </div>
        </div>): (<>
          <SortingArticles setSortOption={setSortOption} />
        <ArticleCard article={sortedArticles} />
        </>)}
      
    </React.Fragment>
  );
}

export default Home;
