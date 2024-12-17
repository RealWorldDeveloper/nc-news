import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function Article_Card_id() {
  const { article_id } = useParams();
  const [articleId, setArticleId] = useState({});
  const [comment, setComment] = useState([]);
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
    axios.get(urlComment).then((res) => setComment(res.data.comment));
  });

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
            <div class="row d-flex justify-content-center mt-100 mb-100">
              <div class="col-m-6">
                <div class="card-body text-center">
                  <h4 class="card-title">Latest Comments</h4>
                  <button type="button" className="btn btn-success">Post a Comment</button>
                </div>

                {comment.map((comments) => {
                  return (
                    <div class="card mb-1 py-2">
                      <div class="comment-widgets">
                        <div class="d-flex flex-row comment-row">
                          <div class="p-2">
                            <img
                              src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                              alt="user"
                              width="50"
                              class="rounded-circle"
                            />
                          </div>
                          <div class="comment-text w-100">
                            <h6 class="font-medium">{comments.author}</h6>{" "}
                            <span class="m-b-15 d-block">{comments.body} </span>
                            <div class="comment-footer">
                              <span class="text-muted float-right">
                                {comments.created_at}
                              </span><br />
                              <button type="button" className="btn btn-danger my-2">Delete post</button>
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

export default Article_Card_id;
