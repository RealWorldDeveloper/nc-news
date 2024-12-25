import React from "react";
import { useState } from "react";
import { apiClient } from "../../../../api";
import { toast } from "react-toastify";
import { useUser } from "../../../../UserContext";
function PostComment({ articleId, setComments }) {
  const { token, setToken , decodeData} = useUser();
const {username} = decodeData
const [input, setInput] = useState({ username, body: "" });


  const onChangeHandeler = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const postComment = (e) => {
    e.preventDefault();
    if (!token) {
      toast.info("Please login first ");} 
      else {
      apiClient.post(`/articles/${articleId}/comments`, input).then(() => {
        apiClient
          .get(`/articles/${articleId}/comments`)
          .then((res) => {
            setComments(res.data.comment);
            toast.success("Comment posted Successfully");
            setInput({username, body:''})
            setToken(token)
          })
          .catch((err) => {
            console.log("Catching error", err);
            toast.error("Failed to fetch comments:");
          });
      });
    }
  };

  return (
    <form className="card-body text-center" onSubmit={postComment}>
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
