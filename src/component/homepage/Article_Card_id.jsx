import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function Article_Card_id() {
  const { article_id } = useParams();
  const [articleId, setArticleId] = useState({});
  const [isLoading, setLoading] = useState(false);
  const url = `https://mynew-nc-news.onrender.com/api/articles/${article_id}`;
  useEffect(() => {
    setLoading(true);
    axios.get(url).then((res) => {
      setArticleId(res.data.articles[0]);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <>Loading....</>;
  }

  return (
    <div>
      <h1 className="articleid m-5 ">Article:{articleId.article_id}</h1>
      <div className="container d-flex justify-content-center align-items-center my-5">
        <div
          className="card"
          style={{ width: "30rem", animation: "fadeIn 3s" }}
        >
          <img
            src={articleId.article_img_url}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5>
              Title: <span className="fs-6">{articleId.title}</span>
            </h5>
            <h5>
              Topic: <span className="fs-6">{articleId.topic}</span>
            </h5>
            <h5>
              Author: <span className="fs-6">{articleId.author}</span>
            </h5>
            <h5>
              Body: <span className="fs-6">{articleId.body}</span>
            </h5>
            <h5>
              Created_at: <span className="fs-6">{articleId.created_at}</span>
            </h5>
            <h5>
              Votes: <span className="fs-6">{articleId.votes}</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article_Card_id;
