import { CircularProgressbar } from "react-circular-progressbar";
import { Rating as Stars } from "react-star-rating-lite";

import "react-circular-progressbar/dist/styles.css";

const Rating = ({ percentage, vote_count, star_rating }) => {
  return (
    <div style={{ display: "flex", paddingBottom: "20px" }}>
      <div style={{ width: 50, height: 50 }}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
      <div>
        <Stars name="read-only" value={star_rating} readOnly />
        <span>(votes: {vote_count})</span>
      </div>
    </div>
  );
};

export default Rating;
