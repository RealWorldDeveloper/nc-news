import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticlesById } from "../../../api";
import CommentBody from "./comments/CommentBody";
import { FcLike } from "react-icons/fc";
import { CiFaceFrown } from "react-icons/ci";
import { updateVote } from "../../../api";
import { toast } from "react-toastify";
function ArticleCardBody() {
  const { article_id } = useParams();
  const [articleId, setArticleId] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [likesCount, setLikesCount] = useState(0)
  useEffect(() => {
    setLoading(true);
    getArticlesById(article_id).then((res) => {
    setLikesCount(likesCount)
    setArticleId(res)});
    setLoading(false);
  }, []);
  const incrementLike = () => {
    setLikesCount((currentLikesCount) => currentLikesCount + 1);
    updateVote(article_id, {inc_votes: 1})
    .then(res=> toast('Thanks for a Like 💚')
    )
  } 
  const decrementLike = () => {
    setLikesCount((currentLikesCount) => currentLikesCount - 1);
    updateVote(article_id, {inc_votes: -1})
    .then(res=> toast.error('Sorry for disappointing 🥴')
    )
  } 
  if (isLoading) {
    return <>Loading....</>;
  }
  return (
    <div>
      <h1 className="articleid m-5 ">Article:{articleId.article_id}</h1>
      <div className="container d-flex justify-content-center align-items-center my-5">
        <div
          className="card"
          style={{ width: "70rem", animation: "fadeIn 3s" }}
        >
          <img
            src={articleId.article_img_url}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="mb-3">
            Story : <span className="fs-6">{articleId.body}</span>
            </h5>
            <h5 className="mb-3">
            Like : <span className="fs-6">{likesCount}</span>
            </h5>
            <button className="btn border-secondary fs-5 rounded-circle" onClick={incrementLike}><FcLike /></button>
            <button className="btn border-secondary fs-5 rounded-circle mx-4" onClick={decrementLike}><CiFaceFrown/></button>
            <hr />
            <CommentBody articleId={article_id} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ArticleCardBody;
