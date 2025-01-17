import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SortingArticles from "../homepage/articles/SortingArticles";
import { formatDate } from "../../utils";
function TopicFilterCard({ topicFilter }) {
  const navigation = useNavigate();
  const readMoreClick = (id) => {
    navigation(`/${id}`);
  };
  return (
    <>
      <SortingArticles />
      <div className="container py-3">
        <div
          className="row row-cols-1 row-cols-sm-6 g-5"
          style={{ animation: "fadeIn 3s" }}
        >
          {topicFilter.map((item) => {
            return (
              <div className="col-sm-4">
                <div className="card h-100">
                  <img
                    src={item.article_img_url}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5>
                      Author Name: <span className="fs-6">{item.author}</span>
                    </h5>
                    <h5>
                      article_id:{" "}
                      <span className="fs-6">{item.article_id}</span>
                    </h5>
                    <h5>
                      Title:
                      <span className="fs-6">{item.title}</span>
                    </h5>
                    <h5>
                      Topic: <span className="fs-6">{item.topic}</span>
                    </h5>
                    <h5>
                      created at:
                      <span className="fs-6">
                        {formatDate(item.created_at)}
                      </span>
                    </h5>
                    <h5>
                      Votes: <span className="fs-6">{item.votes}</span>
                    </h5>
                    <h5>
                      Comment Count:
                      <span className="fs-6">{item.comment_count}</span>
                    </h5>
                    <button
                      type="button"
                      className="btn btn-info"
                      onClick={() => readMoreClick(item.article_id)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TopicFilterCard;
