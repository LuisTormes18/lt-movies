import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import {useObserver} from "./../hooks"
import PosterMovie from "./../PosterMovie";
import { formattedMovies, instanceAxios } from "./../../utils";

import "./index.css";

const RowMovies = ({ title, fetchUrl }) => {
  // const [observer, setElements, entries] = useObserver({threshold:0, root:null });
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const req = await instanceAxios.get(fetchUrl);
      setMovies(formattedMovies(req.data.results));
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="row-title">{title}</h2>

      <div className="posters_container">
        {movies.map((m) => (
          <PosterMovie key={m.id} movie={m} />
        ))}
      </div>
    </div>
  );
};

export default RowMovies;
