import { Suspense, lazy, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ModalTrailer from "./../../components/Trailer";

import { getVideoIdTrailer } from "./../../utils/getVideoIdTrailer";
import requests from "./../../requests";

const RowMovies = lazy(() => import("../../components/RowMovies"));

import "./home.css";

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const [videoIdTrailer, setVideoIdTrailer] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const req = await instanceAxios.get(requests.fetchTrending);

      setMovie(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );

      setLoading(false);
    }

    fetchData();
  }, []);

  const handleSeeTrailer = async () => {
    const videoId = await getVideoIdTrailer(movie.id);
    setVideoIdTrailer(videoId);
  };

  return (
    <div className="home_screen">
      {videoIdTrailer && <ModalTrailer videoId={videoIdTrailer} />}

      <div
        className="home_screen__banner"
        style={{
          backgroundImage: `linear-gradient(to right, #000, transparent 100%), url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        }}
      >
        <div className="banner__text">
          <h1>
            {movie?.name ||
              movie?.title ||
              movie?.original_name ||
              movie?.original_title}
          </h1>
          <p>{movie?.overview}</p>
          <div
            style={{ display: "flex", justifyContent: "start", gap: "18px" }}
          >
            <button className="btn-outline" onClick={handleSeeTrailer}>
              {" "}
              See Trailer{" "}
            </button>
            <button
              className="btn "
              onClick={() => {
                navigate(`/movie/movie-${movie?.id}`);
              }}
            >
              See Deatils
            </button>
          </div>
        </div>
      </div>
      <div className="movies_container">
        <Suspense fallback={<div>Loading...</div>}>
          <RowMovies title={"Trending Now"} fetchUrl={requests.fetchTrending} />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <RowMovies
            title={"Netflix Originals"}
            fetchUrl={requests.fetchNetflixOriginals}
          />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <RowMovies title={"Comedy"} fetchUrl={requests.fetchComedyMovies} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <RowMovies title={"Action"} fetchUrl={requests.fetchActionMovies} />
        </Suspense>
      </div>
    </div>
  );
};

export default HomeScreen;
