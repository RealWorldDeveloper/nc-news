import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios, { Axios } from "axios";
function ArticleCardBody() {
  const { article_id } = useParams();
  const [articleId, setArticleId] = useState({});
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState({ username: "", body: "" });
  const [isLoading, setLoading] = useState(false);

  const url = `https://mynew-nc-news.onrender.com/api/articles/${article_id}`;
  const urlComment = `https://mynew-nc-news.onrender.com/api/articles/${article_id}/comments`;

  useEffect(() => {
    setLoading(true);
    axios.get(url).then((res) => {
      setArticleId(res.data.articles[0]);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    axios.get(urlComment).then((res) => setComments(res.data.comment));
  });

  const onChangeHandeler = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  const postComment = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://mynew-nc-news.onrender.com/api/articles/${article_id}/comments`,
        input
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

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
            <div className="row d-flex justify-content-center mt-100 mb-100">
              <div className="col-m-4">
                <form className="card-body text-center" onSubmit={postComment}>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Enter your username"
                    name="username"
                    onChange={onChangeHandeler}
                  />
                  <textarea
                    className="form-control mb-4"
                    rows="3"
                    placeholder="Write your comment here..."
                    name="body"
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
                            <span className="m-b-15 d-block">
                              {comment.body}{" "}
                            </span>
                            <div className="comment-footer">
                              <span className="text-muted float-right">
                                {comments.created_at}
                              </span>
                              <br />
                              <button
                                type="button"
                                className="btn btn-danger my-2"
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
          </div>
        </div>
      </div>
    </div>
  );
}
export default ArticleCardBody;
