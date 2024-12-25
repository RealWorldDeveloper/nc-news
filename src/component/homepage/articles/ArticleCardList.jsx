import React from "react";
import "./articleCard.css";
import { MdOutlineModeComment } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { FcGenericSortingAsc } from "react-icons/fc";
import { formatDate } from "../../../utils";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../UserContext";
function ArticleCard({ article }) {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/${id}`);
  };
  return (
    <div className="container">
      <div className="row mt-n5" style={{ animation: "fadeIn 3s" }}>
        {article.map((item) => {
          return (
            <div
              className="col-sm-4 col-sm-4 mt-5  wow fadeInUp"
              data-wow-delay=".2s"
              style={{
                visibility: "visible"
              }}
              key={item.article_id}
            >
              <div className="blog-grid">
                <div className="blog-grid-img position-relative">
                  <img alt="img" src={item.article_img_url} />
                </div>
                <div className="blog-grid-text p-4">
                  <h3 className="h5 mb-3">
                    <a href="#!">{item.title.substring(0, 43)}</a>
                  </h3>
                  <p className="display-30">
                    <FcGenericSortingAsc fontSize={20} /> {item.topic}
                  </p>
                  <div className="meta meta-style2">
                    <ul className="d-flex justify-content-between">
                      <li>{formatDate(item.created_at)}</li>
                      <li>
                        <strong>Author:</strong> {item.author}
                      </li>
                      <li>
                        <MdOutlineModeComment /> {item.comment_count}
                      </li>
                      <li>
                        <SlLike /> {item.votes}
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="btn button border border-dark-subtle rounded-2 px-4 mt-3 "
                      onClick={() => handleClick(item.article_id)}
                    >
                      Read
                    </button>
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

export default ArticleCard;
