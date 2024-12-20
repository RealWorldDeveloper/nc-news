import React from "react";
import { useState, useEffect } from "react";
import { getAllComments } from "../../../../api";
import { deleteCommmentUrl } from "../../../../api";
import PostComment from "./PostComment";
import CommentVote from "./CommentVote";
import { toast } from "react-toastify";
import { apiClient } from "../../../../api";
function CommentBody({ articleId,setLikesCount,likesCount}) {
  const [comments, setComments] = useState([]);
  const formatDate =(created_at) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour24: true,
    };
  return new Date(created_at).toLocaleDateString(undefined, options)
} 

  useEffect(() => {
    getAllComments(articleId).then((res) => {
      
      setComments(res)});
  }, []);

  const deleteComment = (commentId) => {
    deleteCommmentUrl(commentId)
      .then((res) => {
        setComments((prev) =>
          prev.filter((comment) => comment.comment_id !== commentId)
        );
        toast.warning("Comment deleted successfully");
      })
      .catch((err) => toast.error("Something went Wrong"));
  };

  return (
    <div className="row d-flex justify-content-center mt-100 mb-100">
      <div className="col-m-4">
        <CommentVote setLikesCount ={setLikesCount} likesCount={likesCount} articleId={articleId}/>
        <PostComment articleId={articleId} setComments={setComments} />
        <h4 className="card-title">Latest Comments</h4>
        {comments.map((comment) => {
          return (
            <div className="card mb-1 py-2">
              <div className="comment-widgets">
                <div className="d-flex flex-row comment-row">
                  <div className="px-2">
                    <img
                      src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                      alt="user"
                      width="50"
                      className="rounded-circle"
                    />
                  </div>
                  <div className="comment-text w-100">
                    <div className="container d-flex justify-content-between">
                      <h5>{comment.author}</h5>
                        <h6>
                        <strong>{formatDate(comment.created_at)}</strong>
                      </h6>
                    </div>
                    
                    <span className="m-b-15 d-block mx-2">{comment.body} </span>
                    <div className="comment-footer">
                    
                      <br />
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => deleteComment(comment.comment_id)}
                      >
                        Delete post
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CommentBody;
