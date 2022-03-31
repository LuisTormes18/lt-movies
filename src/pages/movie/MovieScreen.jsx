import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import instanceAxios from "./../../axios";

import "./movie.css";

const MovieScreen = () => {

  const [movie, setMovie] = useState(null);

  let { id } = useParams();
  const base_url = import.meta.env.VITE_IMG_URL;

  useEffect(() => {
    
    async function fetchData() {
      const api_key = import.meta.env.VITE_API_KEY;


      const req = await instanceAxios.get(`/tv/${id}?api_key=${api_key}`);

      setMovie(req.data);
      console.log(req.data);
    }

    fetchData();

  }, [id]);

  return (
    <div className="movie-screen">

      <div className="poster">

        <img src={`${base_url}${movie?.poster_path}`} alt={movie?.name || movie?.title} />
        <br />
        <button type="button">See trailer...</button>
      
      </div> 

      <div className="texts">
        <h1>{ movie?.name || movie?.title }</h1>
        <p>{ movie?.overview }</p>

      </div>
    </div>
  );
};

export default MovieScreen;
