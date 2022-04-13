import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./rating.css";

const RatingMovie = ({ percentage, vote_count, star_rating }) => {
  return (
    <div className="rating">
      <div className="circular-bar" style={{ width: 50, height: 50 }}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
      <div>
        <span>- votes: {vote_count} -</span>
      </div>
    </div>
  );
};

export default RatingMovie;
