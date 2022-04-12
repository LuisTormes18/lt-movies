import { CircularProgressbar } from "react-circular-progressbar";
import Rating from "react-star-rating-lite";
import "react-circular-progressbar/dist/styles.css";

import "./rating.css";

const RatingMovie = ({ percentage, vote_count, star_rating }) => {
  return (
    <div className="rating">
      <div className="circular-bar" style={{ width: 50, height: 50 }}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
      <div>
        <div className="stars">
          {star_rating !== undefined && (
            <Rating value={`${star_rating}`} readonly />
          )}
        </div>
        <span>- votes: {vote_count} -</span>
      </div>
    </div>
  );
};

export default RatingMovie;
