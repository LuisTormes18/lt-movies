import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import RowMovies  from "../../components/RowMovies";
import ModalTrailer from "./../../components/Trailer";
import { instanceAxios, requests, randomMovie } from "./../../utils";

import "./home.css";


const HomeScreen = () => {
  const [movie, setMovie] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const req = await instanceAxios.get(requests.fetchTrending);
      const rmovie = await randomMovie(req.data.results)
      setMovie(rmovie);
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
          <RowMovies title={"Trending Now"} fetchUrl={requests.fetchTrending} />
          {
          /*
          <RowMovies title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
          <RowMovies title={"Comedy"} fetchUrl={requests.fetchComedyMovies} />
          <RowMovies title={"Horror"} fetchUrl={requests.fetchHorrorMovies} />
          <RowMovies title={"Action"} fetchUrl={requests.fetchActionMovies} />
          <RowMovies title={"Romance"} fetchUrl={requests.fetchRomanceMovies} />
      		*/
  		  }
      </div>
    </div>
  );
};

export default HomeScreen;
