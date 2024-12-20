import React from "react";
import { useState } from "react";
import { postCommentUrl } from "../../../../api";
import { toast } from "react-toastify";
import { getAllComments } from "../../../../api";
function PostComment({ articleId, setComments }) {
  const [input, setInput] = useState({ username: "cooljmessy", body: "" });
  const onChangeHandeler = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  const postComment = (e) => {
    e.preventDefault();
    postCommentUrl(articleId, input).then(() => {
      getAllComments(articleId)
        .then((res) => {
          setComments(res);
          toast.success("Comment posted Successfully");
          setInput({ username: "cooljmessy", body: "" });
        })
        .catch((err) => {
          console.log("Catching error", err);
          toast.error("Failed to fetch comments:");
        });
    });
  };

  return (
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
  );
}

export default PostComment;
