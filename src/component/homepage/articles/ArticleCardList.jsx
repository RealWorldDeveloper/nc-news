import React from "react";
import "./articleCard.css";
import { MdOutlineModeComment } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { FcGenericSortingAsc } from "react-icons/fc";

import { useNavigate } from "react-router-dom";
function ArticleCard({ article }) {
  const formatDate = (created_at) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour24: true,
    };
    return new Date(created_at).toLocaleDateString(undefined, options);
  };

  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/${id}`);
  };

  return (
    <div class="container">
      <div class="row mt-n5" style={{ animation: "fadeIn 3s" }}>
        {article.map((item) => {
          return (
            <div
              class="col-sm-4 mt-5 wow fadeInUp"
              data-wow-delay=".2s"
              style={{
                visibility: "visible",
                "animation-delay": "0.6s",
                "animation-name": "fadeInUp",
              }}
            >
              <div class="blog-grid">
                <div class="blog-grid-img position-relative">
                  <img alt="img" src={item.article_img_url} />
                </div>
                <div class="blog-grid-text p-4">
                  <h3 class="h5 mb-3">
                    <a href="#!">{item.title.substring(0, 43)}</a>
                  </h3>
                  <p class="display-30">
                    <FcGenericSortingAsc fontSize={20} /> {item.topic}
                  </p>
                  <div class="meta meta-style2">
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
                    <button type="button" className="btn button border border-dark-subtle rounded-2 px-4 mt-3 " onClick={()=> handleClick(item.article_id)}>Read</button>
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
{
  /* <div className="container-fluid py-3" style={{ animation: "fadeIn 3s" }}>
<h1 className="py-1 fs-1">Articles</h1>
<div className="row row-cols-1 row-cols-sm-6 g-5">
      {article.map(item => {
          return( <div className="col-sm-2">
    <div className="card h-100">
      <img src={item.article_img_url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5>
          Author Name: <span className="fs-6">{item.author}</span>
        </h5>
        <h5>
          Title:
          <span className="fs-6">{item.title}</span>
        </h5>
        <h5>Topic: <span className="fs-6">{item.topic}</span></h5>
       
        <h5>
          Votes: <span className="fs-6">{item.votes}</span>
        </h5>
        <h5>
          created at:
          <span className="fs-6"> {formatDate(item.created_at)}</span>
        </h5>
        <button type="button" className="btn btn-info" onClick={()=> handleClick(item.article_id)}>Read More</button>
      </div>
    </div>
  </div>)

      })}
</div>
</div> */
}
