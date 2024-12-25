import React from "react";
import { useState } from "react";
import { apiClient } from "../../../../api";
import { toast } from "react-toastify";
import { useUser } from "../../../../UserContext";
function PostComment({ articleId, setComments }) {
  const { token, setToken, setActive } = useUser();
  const [input, setInput] = useState({ body: "" });

  const onChangeHandeler = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const postComment = (e) => {
    if(!token){
      toast.info('You need to login first')
    }
    e.preventDefault();
    apiClient.get("/users/verify").then((response) => {
      const { username } = response.data.decode;
      const result = { username, body: input.body };

      if (response.data.success) {
        apiClient.post(`/articles/${articleId}/comments`, result).then(() => {
          apiClient
            .get(`/articles/${articleId}/comments`)
            .then((res) => {
              setComments(res.data.comment);
              toast.success("Comment posted Successfully");
              setToken(token);
            })
            .catch((err) => {
              console.log("Catching error", err);
              toast.error("Failed to fetch comments:");
            });
        });
      } else {
        toast.warning("login first");
      }
    });
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
