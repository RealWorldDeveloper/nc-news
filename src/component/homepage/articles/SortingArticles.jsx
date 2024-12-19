import React from "react";

function SortingArticles({ setSortOption }) {
  const handleClick = (e) => {
    setSortOption(e.target.value); // Send the sort option to the parent
  };

  return (
    <div className="container d-flex">
      <h5 className="sort mx-4">Sort By: </h5>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="sortOption"
          value="created_at"
          onClick={handleClick}
        />
        <label className="form-check-label mx-3">By Date</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="sortOption"
          value="comment_count"
          onClick={handleClick}
        />
        <label className="form-check-label mx-3">By Comment Count</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="sortOption"
          value="votes"
          onClick={handleClick}
        />
        <label className="form-check-label mx-3">By Votes</label>
      </div>
    </div>
  );
}

export default SortingArticles;
