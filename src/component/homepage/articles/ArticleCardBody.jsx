import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticlesById } from "../../../api";
import axios, { Axios } from "axios";
import CommentBody from "./comments/CommentBody";
function ArticleCardBody() {
  const { article_id } = useParams();
  const [articleId, setArticleId] = useState({});

  const [isLoading, setLoading] = useState(false);
  const urlComment = `https://mynew-nc-news.onrender.com/api/articles/${article_id}/comments`;

  useEffect(() => {
    setLoading(true);
    getArticlesById(article_id).then((res) => setArticleId(res));
    setLoading(false);
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
          style={{ width: "50rem", animation: "fadeIn 3s" }}
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
            <CommentBody articleId={article_id} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ArticleCardBody;
