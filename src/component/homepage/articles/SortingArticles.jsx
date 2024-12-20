import React from "react";

function SortingArticles({ setSortOption }) {
  const handleClick = (e) => {
    setSortOption(e.target.value); 
  };

  return (
    <div className="container d-flex">
      <h5 className="sort mx-4 fs-6">Sort By: </h5>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="sortOption"
          value="created_at"
          onClick={handleClick}
        />
        <label className="form-check-label mx-3">Date</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="sortOption"
          value="comment_count"
          onClick={handleClick}
        />
        <label className="form-check-label mx-3">Comment Count</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="sortOption"
          value="votes"
          onClick={handleClick}
        />
        <label className="form-check-label mx-3">Votes</label>
      </div>
    </div>
  );
}

export default SortingArticles;
