
export  const sortArticles = (articles,sortOption) => {
    const sorted = [...articles];
    sorted.sort((a, b) => {
      if (sortOption === "votes") {
        return b.votes - a.votes; 
      } else if (sortOption === "comment_count") {
        return b.comment_count - a.comment_count; 
      } else {
        return new Date(b.created_at) - new Date(a.created_at);
      }
    });
        return sorted
  };

