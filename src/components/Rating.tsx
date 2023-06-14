import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// media max-width 35px
//  .stars {
//   display: none;
// }

export const Rating = ({ movie: { percentage, vote_count, star_rating } }: any) => {
  return (
    <div className="flex items-center gap-10 pb-3">
      <div className="circular-bar" style={{ width: 50, height: 50 }}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
      <div>
        <span>- votes: {vote_count} -</span>
      </div>
    </div>
  );
};
