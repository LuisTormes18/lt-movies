import React, { Suspense, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { RowMovies, ModalContainer, Loading } from "../../components";
import { appContext } from "../../context/contextProvider";
import {
  instanceAxios,
  requests,
  randomMovie,
  truncateString,
} from "./../../utils";

// styles
import "./home.css";

const HomeScreen = () => {
  const { handleSeeTrailer, modalIsOpen } = useContext(appContext);
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const req = await instanceAxios.get(requests.fetchNetflixOriginals);
      setMovie({ ...randomMovie(req.data.results), media_type: "tv" });
    }

    fetchData();
  }, []);

  function handleSeeDetails() {
    navigate(`/movie/${movie.media_type}-${movie.id}`);
  }

  return (
    <div className="home_screen">
      <div
        className="home_screen__banner"
        style={{
          backgroundImage: `linear-gradient(to right, #000, transparent 100%), url(${movie?.backgroundUrl})`,
        }}
      >
        <div className="banner__text">
          <h1>{movie?.title}</h1>
          <p>{truncateString(movie?.overview, 160)}</p>
          <div
            style={{ display: "flex", justifyContent: "start", gap: "18px" }}
          >
            <button
              className="btn-outline"
              onClick={() => {
                handleSeeTrailer(movie?.id, movie?.media_type);
              }}
            >
              See Trailer
            </button>
            <button className="btn " onClick={handleSeeDetails}>
              See Details
            </button>
          </div>
        </div>
      </div>

      <div className="movies_container">
        <RowMovies title={"Trending Now"} fetchUrl={requests.fetchTrending} />
        <RowMovies title={"Comedy"} fetchUrl={requests.fetchComedyMovies} />
        <RowMovies title={"Horror"} fetchUrl={requests.fetchHorrorMovies} />
        <RowMovies title={"Action"} fetchUrl={requests.fetchActionMovies} />
        <RowMovies title={"Romance"} fetchUrl={requests.fetchRomanceMovies} />
      </div>
      {modalIsOpen && <ModalContainer />}
    </div>
  );
};

export default HomeScreen;
