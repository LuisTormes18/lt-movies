import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Rating = ({ percentage, vote_count }) => {
  return (
    <div style={{ display: "flex", paddingBottom: "20px" }}>
      <div style={{ width: 50, height: 50 }}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
      <div>
        <span>(votes: {vote_count})</span>
      </div>
    </div>
  );
};

export default Rating;
