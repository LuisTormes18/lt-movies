import { Suspense, lazy, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import PosterMovie from "./../PosterMovie";
import Loading from "./../Loading";
import { formattedMovies, instanceAxios } from "./../../utils";

import "./index.css";

const PosterMovie = lazy(() => import("./../PosterMovie"));

const RowMovies = ({ title, fetchUrl }) => {
  console.log(title);
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const req = await instanceAxios.get(fetchUrl);
      setMovies(formattedMovies(req.data.results));
    }

    if (movies.length <= 0) {
      fetchData();
    }
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="row-title">{title}</h2>

      <div className="posters_container">
        {movies.map((m) => (
           <Suspense fallback={<Loading />}>
              <PosterMovie key={m.id} movie={m} />
            </Suspense>
        ))}
      </div>
    </div>
  );
};

export default RowMovies;
