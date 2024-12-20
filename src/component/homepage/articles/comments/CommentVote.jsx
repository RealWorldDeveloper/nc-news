import React from "react";
import { FcLike } from "react-icons/fc";
import { CiFaceFrown } from "react-icons/ci";
import { updateVote } from "../../../../api";
import { toast } from "react-toastify";
function CommentVote({ setLikesCount, likesCount, articleId }) {
  console.log();

  const incrementLike = () => {
    setLikesCount((currentLikesCount) => currentLikesCount + 1);
    updateVote(articleId, { inc_votes: 1 }).then((res) => {
      localStorage.setItem("likeCount", likesCount);
      toast("Thanks for a Like 💚");
    });
  };
  const decrementLike = () => {
    setLikesCount((currentLikesCount) => currentLikesCount - 1);
    updateVote(articleId, { inc_votes: -1 }).then((res) =>
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
