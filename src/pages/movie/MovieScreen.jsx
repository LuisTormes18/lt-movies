import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { Rating, ModalContainer } from "../../components/";
import { appContext } from "../../context/contextProvider";
import { instanceAxios, formatMovie } from "./../../utils";

import "./movie.css";

const MovieScreen = () => {
  const { handleSeeTrailer } = useContext(appContext);
  const [movie, setMovie] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const api_key = import.meta.env.VITE_API_KEY;
      const req = await instanceAxios.get(`/movie/${id}?api_key=${api_key}`);
      setMovie(formatMovie(req.data));
    }

    fetchData();
  }, [id]);

  return (
    <div className="movie-screen">
      <div
        className="hero"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(18, 18, 18, 0.6), rgba(18, 18, 18, 0.6) 100%), url(${movie?.backgroundUrl})`,
        }}
      >
        <div className="poster">
          <img src={movie?.posterUrl} alt={movie?.title} />
          <br />
          <button
            className="btn-outline"
            type="button"
            onClick={() => {
              handleSeeTrailer(movie?.id);
            }}
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
            <p>
              Genres:{" "}
              <span>{movie?.genres.map(({ name }) => `${name}, `)}</span>{" "}
            </p>
          </div>
        </div>
      </div>
      <ModalContainer />
    </div>
  );
};

export default MovieScreen;
