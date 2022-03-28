import { useEffect, useState } from "react";

import RowMovies from "../../components/RowMovies";

import "./home.css";
import Button from "./../../components/Button/index";

import instanceAxios from "./../../axios";
import requests from "./../../requests";

const HomeScreen = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const req = await instanceAxios.get(requests.fetchTrending);
      setMovie(
        req.data.results[Math.floor(Math.random() * req.data.results.length - 1)]
      );
    }

    fetchData();
    console.log(movie)
  }, []);

  return (
    <div className="home_screen">
      <div
        className="home_screen__banner"
        style={{
          backgroundImage: `linear-gradient(to right, #000, transparent 100%), url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`
        }}
      >
        <div className="banner__text">
          <h1>Movie Title</h1>
          <div>start</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            tempore architecto molestiae tenetur placeat quas numquam
            perspiciatis consequuntur.
          </p>
          <Button type="primary"> Ver Trailer </Button>
        </div>
      </div>
      <div className="movies_container">
        <RowMovies
          title={"Netflix Originals"}
          fetchUrl={requests.fetchNetflixOriginals}
        />
        <RowMovies title={"Trending Now"} fetchUrl={requests.fetchTrending} />
        <RowMovies title={"Action"} fetchUrl={requests.fetchActionMovies} />
      </div>
    </div>
  );
};

export default HomeScreen;
