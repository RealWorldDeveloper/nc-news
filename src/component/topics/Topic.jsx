import React, { useEffect, useState } from "react";
import "../topics/topic.css";
import { apiClient } from "../../api";
import { useUser } from "../../UserContext";
import TopicFilterCard from "./TopicFilterCard";
function Topic() {
  const [isLoading, setLoading] = useState(false);
  const { topic, setTopic, filter, setFilterArticle } = useUser();
  useEffect(() => {
    apiClient
      .get("/topics")
      .then((res) => setTopic(res.data.topics))
      .catch((err) => console.log("something went wrong", err));
  }, []);

  const filterArticle = (slug) => {
    setLoading(true);
    setTimeout(() => {
      apiClient
        .get("/articles")
        .then((res) => {
          setFilterArticle(
            res.data.article.filter((item) => item.topic === slug)
          );
          setLoading(false);
        })
        .catch((err) => console.log("No topics found", err));
    }, 1000);
  };

  return (
    <>
      <div className="container my-5" style={{ animation: "fadeIn 3s" }}>
        <div className="row">
          {topic.map((topics) => {
            return (
              <div className="col-sm mt-2">
                <div className="card l-bg-orange-dark p-3 h-100">
                  <div className="card-statistic-3">
                    <div className="mb-1">
                      <h5 className="card-title mb-0">Article Topics</h5>
                    </div>
                    <div className="row align-items-center mb-2 d-flex">
                      <div className="col-8">
                        <h2 className="d-flex align-items-center mb-0">
                          {topics.slug}
                        </h2>
                      </div>
                      <div className="col-6 text-right">
                        <span>{topics.description}</span>
                      </div>
                      <span>
                        <button
                          className="btn bg-success mt-4"
                          onClick={() => filterArticle(topics.slug)}
                        >
                          Find Articles
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {isLoading ? (
        <div className="container-fluid loader-container">
          <h1>Loading</h1>
          <div className="spinner mx-3"></div>
        </div>
      ) : (
        <TopicFilterCard topicFilter={filter} />
      )}
    </>
  );
}

export default Topic;
