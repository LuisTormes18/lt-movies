import { useEffect, useState } from "react";

import PosterMovie from "./../PosterMovie";
// import Loading from "./../Loading";
import { formattedMovies, instanceAxios } from "./../../utils";
import { useObserver } from "./../../hooks";

import "./index.css";

const RowMovies = ({ title, fetchUrl }) => {
  const [isIntersecting, ref] = useObserver();
  const [movies, setMovies] = useState([]);

  console.log("Row, Aparecio la fila de: ", title)
  useEffect(() => {
    async function fetchData() {
      const req = await instanceAxios.get(fetchUrl);
      setMovies(formattedMovies(req.data.results));
    }

    if (isIntersecting) {
      fetchData();
    }
  }, [fetchUrl, isIntersecting]);

  return (
    <div ref={ref} className="row">
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
