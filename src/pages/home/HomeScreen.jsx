import { Suspense, lazy, useEffect, useState } from "react";

import Loading from "../../components/Loading";


import instanceAxios from "./../../axios";
import requests from "./../../requests";

const RowMovies =  lazy(() => import("../../components/RowMovies"));


import "./home.css";


const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);

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

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <div className="home_screen">
      <div
        className="home_screen__banner"
        style={{
          backgroundImage: `linear-gradient(to right, #000, transparent 100%), url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        }}
      >
        <div className="banner__text">
          <h1>{movie?.name || movie?.original_name }</h1>
          <p>{movie?.overview}</p>
          <button className="btn-outline"> Ver Trailer </button>
        </div>
      </div>
      <div className="movies_container">
        <Suspense fallback={<div>Loading...</div>}>
          <RowMovies
            title={"Netflix Originals"}
            fetchUrl={requests.fetchNetflixOriginals}
          />
        </Suspense>

       {
       /* <Suspense fallback={<div>Loading...</div>}>
          <RowMovies title={"Trending Now"} fetchUrl={requests.fetchTrending} />
        </Suspense>*/
      }

        {/*
        <RowMovies title={"Comedy"} fetchUrl={requests.fetchComedyMovies} />
        <RowMovies title={"Action"} fetchUrl={requests.fetchActionMovies} />*/}
      </div>
    </div>
  );
};

export default HomeScreen;
