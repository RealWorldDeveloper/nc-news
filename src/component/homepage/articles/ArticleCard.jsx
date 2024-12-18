import React from "react";
import { useNavigate } from "react-router-dom";
function ArticleCard({ article }) {
  const navigate = useNavigate()
  const handleClick = (id)=>{
  navigate(`/${id}`)
  }
  return (
    <div className="container-fluid py-3" style={{ animation: "fadeIn 3s" }}>
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
                article_id: <span className="fs-6">{item.article_id}</span>
              </h5>
              <h5>
                Title:
                <span className="fs-6">{item.title}</span>
              </h5>
              <h5>Topic: <span className="fs-6">{item.topic}</span></h5>
              <h5>
                created at:
                <span className="fs-6">{item.created_at}</span>
              </h5>
              <h5>
                Votes: <span className="fs-6">{item.votes}</span>
              </h5>
              <h5>
                Comment Count:
                <span className="fs-6">{item.comment_count}</span>
              </h5>
              <button type="button" className="btn btn-info" onClick={()=> handleClick(item.article_id)}>Read More</button>
            </div>
          </div>
        </div>)

            })}
      </div>
    </div>
  );
}

export default ArticleCard;
