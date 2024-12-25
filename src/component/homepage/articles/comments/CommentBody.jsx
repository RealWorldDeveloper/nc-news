import React from "react";
import { useState, useEffect } from "react";
import PostComment from "./PostComment";
import CommentVote from "./CommentVote";
import { toast } from "react-toastify";
import { apiClient } from "../../../../api";
import { formatDate } from "../../../../utils";
function CommentBody({ articleId, setLikesCount, likesCount }) {
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState([]);
  const [username, setusername] = useState("");
  useEffect(() => {
    apiClient.get("/users").then((res) => {
      setUser(res.data.user);
    });
  }, []);

  useEffect(() => {
    apiClient.get(`/articles/${articleId}/comments`).then((res) => {
      setComments(res.data.comment);
    });
  }, []);
  useEffect(() => {
    apiClient.get("/users/verify").then((res) => {
      setusername(res.data.decode.username);
    });
  });
  const deleteComment = (commentId) => {
    apiClient
      .delete(`/comments/${commentId}`)
      .then(() => {
        setComments((prev) =>
          prev.filter((comment) => comment.comment_id !== commentId)
        );
        toast.warning("Comment deleted successfully");
      })
      .catch(() => toast.error("Something went Wrong"));
  };

  return (
    <div className="row d-flex justify-content-center mt-100 mb-100">
      <div className="col-m-4">
        <CommentVote
          setLikesCount={setLikesCount}
          likesCount={likesCount}
          articleId={articleId}
        />
        <PostComment articleId={articleId} setComments={setComments} />
        <h4 className="card-title">Latest Comments</h4>
        {comments.map((comment) => {
          return (
            <div className="card mb-1 py-2" key={comment.comment_id}>
              <div className="comment-widgets">
                <div className="d-flex flex-row comment-row">
                  {user.map((item) => {
                    if (item.username === comment.author) {
                      return (
                        <div className="px-2" key={item.comment_id}>
                          <img
                            src={item.avatar_url}
                            alt="user"
                            width="50"
                            className="rounded-circle"
                          />
                        </div>
                      );
                    }
                  })}

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
                    </div>
                    {username === comment.author ? (
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => deleteComment(comment.comment_id)}
                      >
                        Delete post
                      </button>
                    ) : (
                      <></>
                    )}
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
