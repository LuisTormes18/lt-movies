import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Rating from "../../components/rating/Rating";
import ModalTrailer from "./../../components/Trailer";

import { getVideoIdTrailer } from "./../../utils/getVideoIdTrailer";
import instanceAxios from "./../../axios";

import "./movie.css";

const MovieScreen = () => {
  const [movie, setMovie] = useState(null);
  const [videoIdTrailer, setVideoIdTrailer] = useState(null);

  let { id } = useParams();
  const base_url = import.meta.env.VITE_IMG_URL;

  useEffect(() => {
    async function fetchData() {
      const api_key = import.meta.env.VITE_API_KEY;

      const req = await instanceAxios.get(
        `/movie/${id}?api_key=${api_key}&append_to_response=video`
      );
      setMovie(req.data);
    }

    fetchData();
  }, [id]);

  const handleSeeTrailer = async () => {
    const videoId = await getVideoIdTrailer(movie.id);
    setVideoIdTrailer(videoId);
  };

  return (
    <div
      className="movie-screen"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(18, 18, 18, 0.6), rgba(18, 18, 18, 0.6) 100%), url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
      }}
    >
      {/*Load trailer*/}
      <ModalTrailer
        videoId={videoIdTrailer}
        setVideoIdTrailer={setVideoIdTrailer}
      />

      <div className="poster">
        <img
          src={`${base_url}${movie?.poster_path}`}
          alt={movie?.name || movie?.title}
        />
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
        <h1>{movie?.name || movie?.title}</h1>

        <Rating {...movie} />

        {movie?.seasons && (
          <div>
            <span>Seasons: {movie?.number_of_seasons} </span>

            <span>Episodes: {movie?.number_of_episodes} </span>
          </div>
        )}

        <p>{movie?.overview}</p>

        <div className="details">
          <p>
            Genres:
            {movie?.genres?.map((g) => (
              <span> {g.name}, </span>
            ))}
          </p>

          <p>
            Production Companies:
            {movie?.production_companies?.map((p_c) => (
              <span> {p_c.name}, </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieScreen;
