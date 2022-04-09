import React, { Suspense, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ModalTrailer from "./../../components/Trailer";
import { instanceAxios, requests, randomMovie } from "./../../utils";

import "./home.css";

const RowMovies = React.lazy(() => import("../../components/RowMovies"));

const HomeScreen = () => {
  const [movie, setMovie] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const req = await instanceAxios.get(requests.fetchTrending);
      setMovie(randomMovie(req.data.results));
    }

    fetchData();
  }, []);

  function handleSeeTrailer() {
    setIsOpen(true);
  }
  function handleSeeDetails() {
    navigate(`/movie/${movie.id}`);
  }

  return (
    <div className="home_screen">
      <ModalTrailer
        videoId={movie?.trailerId}
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
      />

      <div
        className="home_screen__banner"
        style={{
          backgroundImage: `linear-gradient(to right, #000, transparent 100%), url(${movie?.backgroundUrl})`,
        }}
      >
        <div className="banner__text">
          <h1>{movie?.title}</h1>
          <p>{movie?.overview}</p>
          <div
            style={{ display: "flex", justifyContent: "start", gap: "18px" }}
          >
            <button className="btn-outline" onClick={handleSeeTrailer}>
              See Trailer
            </button>
            <button className="btn " onClick={handleSeeDetails}>
              See Details
            </button>
          </div>
        </div>
      </div>
      <div className="movies_container">
        <Suspense fallback={<div>Loading...</div>}>
          <RowMovies title={"Trending Now"} fetchUrl={requests.fetchTrending} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <RowMovies title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <RowMovies title={"Comedy"} fetchUrl={requests.fetchComedyMovies} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <RowMovies title={"Horror"} fetchUrl={requests.fetchHorrorMovies} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <RowMovies title={"Action"} fetchUrl={requests.fetchActionMovies} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <RowMovies title={"Romance"} fetchUrl={requests.fetchRomanceMovies} />
        </Suspense>
      </div>
    </div>
  );
};

export default HomeScreen;
