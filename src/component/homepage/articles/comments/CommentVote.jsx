import React, { useEffect } from "react";
import { FcLike } from "react-icons/fc";
import { CiFaceFrown } from "react-icons/ci";
import { apiClient, updateVote } from "../../../../api";
import { toast } from "react-toastify";
function CommentVote({ setLikesCount, likesCount, articleId }) {

useEffect(()=>{
  const getCount = localStorage.getItem('likeCount')
  if(getCount){
    setLikesCount(parseInt(getCount,10))
  } 
  else{
    setLikesCount(0)
  }
},[])

   const incrementLike = () => {
    setLikesCount((currentLikesCount) => {
      const localStorageLike = currentLikesCount + 1
      localStorage.setItem("likeCount", localStorageLike);
      return localStorageLike
    });
    apiClient.patch(`/articles/${articleId}`,{ inc_votes: +1 } )
    .then(() => {
      toast("Thanks for a Like 💚");
    });
  };
  const decrementLike = () => {
    setLikesCount((currentLikesCount) => currentLikesCount - 1);
    apiClient.patch(`/articles/${articleId}`,{ inc_votes: -1 } )
    .then(() =>
      toast.error("Sorry for disappointing 🥴")
    );
  };
  
  return (
    <>
      <h5 className="mb-3">
        Like : <span className="fs-6">{likesCount}</span>
      </h5>
      <button
        className="btn border-secondary fs-5 rounded-circle"
        onClick={incrementLike}
      >
        <FcLike />
      </button>
      <button
        className="btn border-secondary fs-5 rounded-circle mx-4"
        onClick={decrementLike}
      >
        <CiFaceFrown />
      </button>
      <hr />
    </>
  );
}

export default CommentVote;
