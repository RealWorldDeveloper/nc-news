import React, { useEffect, useState } from "react";
import "../topics/topic.css";
import { getTopics } from "../../api";
import { apiClient } from "../../api";
// import { getArticles } from "../../api";
import TopicFilterCard from "./TopicFilterCard";
function Topic() {
  const [topic, setTopic] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    getTopics()
      .then((res) => setTopic(res.topics))
      .catch((err) => console.log("something went wrong", err));
  }, []);

  const [filter, setFilterArticle] = useState([]);
  const filterArticle = (slug) => {
    setLoading(true);
    setTimeout(() => {
      apiClient.get('/articles')
        .then((res) => {
          setFilterArticle(
            res.data.article.filter((item) => item.topic === slug)
          );
          setLoading(false)
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
      {isLoading ? (<div className="container-fluid loader-container">
        <h1>Loading</h1>
            <div className="spinner mx-3">
            </div>
        </div>):(<TopicFilterCard topicFilter={filter} />)}
      
    </>
  );
}

export default Topic;
