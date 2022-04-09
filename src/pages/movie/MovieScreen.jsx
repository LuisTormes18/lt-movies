import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Rating from "../../components/rating/Rating";
import ModalTrailer from "./../../components/Trailer";
import { instanceAxios, formatMovie } from "./../../utils";

import "./movie.css";

const MovieScreen = () => {
  const [movie, setMovie] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  let { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const api_key = import.meta.env.VITE_API_KEY;
      const req = await instanceAxios.get(`/movie/${id}?api_key=${api_key}`);
      console.log(req.data);

      setMovie(formatMovie(req.data));
    }

    fetchData();
  }, [id]);

  const handleSeeTrailer = () => {
    setIsOpen(true);
  };

  return (
    <div
      className="movie-screen"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(18, 18, 18, 0.6), rgba(18, 18, 18, 0.6) 100%), url(${movie?.backgroundUrl})`,
      }}
    >
      <ModalTrailer
        videoId={movie?.trailerId}
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
      />

      <div className="poster">
        <img src={movie?.posterUrl} alt={movie?.title} />
        <br />
        <button
          className="btn-outline"
          type="button"
          onClick={handleSeeTrailer}
        >
          See trailer...
        </button>
      </div>

      <div className="texts">
        <h1>{movie?.title}</h1>

        <Rating {...movie} />

        {movie?.seasons?.number && (
          <div>
            <span>Seasons: movie?.seasons?.number </span>

            <span>Episodes: movie?.seasons?.episodes </span>
          </div>
        )}

        <p>{movie?.overview}</p>

        <div className="details">
          <p>Genres:movies?.genres</p>
        </div>
      </div>
    </div>
  );
};

export default MovieScreen;
