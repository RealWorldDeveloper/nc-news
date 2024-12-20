import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticlesById } from "../../../api";
import CommentBody from "./comments/CommentBody";
import { toast } from "react-toastify";

function ArticleCardBody() {
  const { article_id } = useParams();
  const [likesCount, setLikesCount] = useState(0);
  const [articleId, setArticleId] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
        getArticlesById(article_id)
      .then((res) => {
        setLikesCount(likesCount);
        setArticleId(res);
        setLoading(false);
      })
      .catch((error) => {
        toast.error("Error loading article");
      })
    }, 1000);
 
     
  }, [article_id, likesCount]);

  return (
    <div>
      {isLoading ? (<div className=" container loader-container m-4">
        <h2>Please Wait....</h2>
            <div className="spinner mx-3">
            </div>
        </div>) : (      <div className="container d-flex flex-column justify-content-center align-items-center my-5">
        <h1 style={{ fontSize: 30 }}>{articleId.title}</h1>
        <div className="card">
          <img
            src={articleId.article_img_url}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="mb-3">
              Story : <span className="fs-6">{articleId.body}</span>
            </h5>
            <CommentBody
              articleId={article_id}
              setLikesCount={setLikesCount}
              likesCount={likesCount}
            />
          </div>
        </div>
      </div>)}

    </div>
  );
}
export default ArticleCardBody;
