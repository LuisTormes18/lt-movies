import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { RatingMovie, ModalContainer } from "../../components/";
import { appContext } from "../../context/contextProvider";
import { instanceAxios, formatMovie, truncateString } from "./../../utils";

import "./movie.css";

const MovieScreen = () => {
  const { handleSeeTrailer, modalIsOpen } = useContext(appContext);
  const [movie, setMovie] = useState(null);
  let { media } = useParams();
  let [media_type, id] = media.split("-");

  useEffect(() => {
    async function fetchData() {
      const api_key = import.meta.env.VITE_API_KEY;
      const req = await instanceAxios.get(
        `/${media_type}/${id}?api_key=${api_key}`
      );
      setMovie({ ...formatMovie(req.data), media_type });
      console.log(movie);
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
              handleSeeTrailer(movie?.id, movie?.media_type);
            }}
          >
            See trailer...
          </button>
        </div>

        <div className="texts">
          <h1>{movie?.title}</h1>

          <RatingMovie {...movie} />

          <p>{truncateString(movie?.overview, 160)}</p>

          <div className="details">
            {movie?.seasons?.number && (
              <div className="seasons">
                <p>
                  Seasons: <span>{movie?.seasons?.number}</span>{" "}
                </p>

                <p>
                  Episodes: <span>{movie?.seasons?.episodes}</span>{" "}
                </p>
              </div>
            )}
            <p>
              Genres:{" "}
              <span>{movie?.genres.map(({ name }) => `${name}, `)}</span>{" "}
            </p>
          </div>
        </div>
      </div>
      {modalIsOpen && <ModalContainer />}
    </div>
  );
};

export default MovieScreen;
