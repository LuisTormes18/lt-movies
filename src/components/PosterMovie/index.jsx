import { useNavigate } from "react-router-dom";

import "./poster.css";

const PosterMovie = ({ movie }) => {
  const navigate = useNavigate();

  function handleClickPosterMovie() {
    navigate(`/movie/${movie.media_type}-${movie.id}`);
  }
  return (
      	<div className="poster_movie" onClick={handleClickPosterMovie}>
      	<img load="lazy" src={movie.posterUrl} alt={movie.title} />
    </div>
   );
};

export default PosterMovie;
