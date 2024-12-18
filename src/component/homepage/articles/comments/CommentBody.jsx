import React from "react";
import { useState, useEffect } from "react";
import { getAllComments } from "../../../../api";
import { postCommentUrl } from "../../../../api";
import { deleteCommmentUrl } from "../../../../api";
import { toast } from "react-toastify";
function CommentBody({ articleId }) {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState({ username: "", body: "" });
  //Fetch All Comments
  useEffect(() => {
    getAllComments(articleId).then((res) => setComments(res));
  }, []);
  // input handler
  const onChangeHandeler = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  // Post a Comment
  const postComment = (e) => {
    e.preventDefault();
    postCommentUrl(articleId, input).then(() => {
      // Fetch updated comments from the server
      getAllComments(articleId)
        .then((res) => {
          setComments(res);
          toast.success('Comment posted Successfully')
          setInput({ username: "", body: "" });
        })

        .catch((err) => toast.error("Failed to fetch comments:"));
    });
  };

  // Delete a comment
  const deleteComment = (commentId) => {
    deleteCommmentUrl(commentId)
    .then((res) => {
        
      setComments((prev) =>
        prev.filter((comment) => comment.comment_id !== commentId)
      );
      
      toast.success('Comment deleted successfully')
    })
    .catch(err => toast.error('Something went Wrong'))
  };
  return (
    <div className="row d-flex justify-content-center mt-100 mb-100">
      <div className="col-m-4">
        <form className="card-body text-center" onSubmit={postComment}>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Enter your username"
            name="username"
            value={input.username}
            onChange={onChangeHandeler}
          />
          <textarea
            className="form-control mb-4"
            rows="3"
            placeholder="Write your comment here..."
            name="body"
            value={input.body}
            onChange={onChangeHandeler}
          ></textarea>
          <button type="submit" className="btn btn-success">
            Post a Comment
          </button>
        </form>
        <h4 className="card-title">Latest Comments</h4>
        {comments.map((comment) => {
          return (
            <div className="card mb-1 py-2">
              <div className="comment-widgets">
                <div className="d-flex flex-row comment-row">
                  <div className="p-2">
                    <img
                      src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                      alt="user"
                      width="50"
                      className="rounded-circle"
                    />
                  </div>
                  <div className="comment-text w-100">
                    <h6 className="font-medium">{comment.author}</h6>{" "}
                    <span className="m-b-15 d-block">{comment.body} </span>
                    <div className="comment-footer">
                      <span className="text-muted float-right">
                        {comments.created_at}
                      </span>
                      <br />
                      <button
                        type="button"
                        className="btn btn-danger my-2"
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
