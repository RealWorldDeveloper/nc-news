import React, { useEffect, useState } from "react";
import "../topics/topic.css";
import { getTopics } from "../../api";
import { getArticles } from "../../api";
import TopicFilterCard from "./TopicFilterCard";
function Topic() {
  const [topic, setTopic] = useState([]);
  useEffect(() => {
    getTopics()
      .then((res) => setTopic(res.topics))
      .catch((err) => console.log("something went wrong", err));
  }, []);

  const [filter, setFilterArticle] = useState([]);
  const filterArticle = (slug) => {
    getArticles()
    .then((res) => {
      setFilterArticle(res.filter((item) => item.topic === slug));
    })
    .catch(err => console.log('No topics found', err)
    )
    
  };

  return (
    <>
      <div className="container my-5">
        <div className="row">
          {topic.map((topics) => {
            return (
              <div className="col-sm">
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
      <TopicFilterCard topicFilter={filter} />
    </>
  );
}

export default Topic;
