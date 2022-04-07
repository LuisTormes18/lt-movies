import { useNavigate } from "react-router-dom";

import "./poster.css";

const PosterMovie = ({movie}) => {
  const navigate = useNavigate();
  const base_url = import.meta.env.VITE_IMG_URL;

  function handleClickPosterMovie() {
    navigate(`/movie/${movie.id}`);
  }
    return (
        <div
            className="poster_movie"
            onClick={handleClickPosterMovie}
          >
            <img src={`${base_url}${movie.poster_path}`} alt={movie.title} />
          </div>
    )
}

export default PosterMovie