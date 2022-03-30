import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import instanceAxios from "./../../axios";

import "./movie.css";

const MovieScreen = () => {
  const api_key = "9708e26b3212dc53fa4084f8be9aaff6";
  const { id } = useParams();
  const p = useParams();


  const [movie, setMovie] = useState(null);

  useEffect(() => {

  console.log(id, p);
    
    async function fetchData() {
      const req = await instanceAxios.get(`/movie/${99966}?api_key=${api_key}`);

      setMovie(req.data);
      console.log(req.data)
    }

    fetchData();
  }, [id]);

  return (
    <div>
      <h1>{movie?.name || movie?.title }</h1>
    </div>
  );
};

export default MovieScreen;
