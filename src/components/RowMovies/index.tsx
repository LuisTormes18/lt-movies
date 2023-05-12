"use client";

import { useEffect, useState } from "react";
import { useObserver } from "../../hooks";
import { formattedMovies, instanceAxios } from "../../utils";
import PosterMovie from "../PosterMovie";

import styles from "./row.module.css";

const RowMovies = ({ title, fetchUrl }: any) => {
  const [isIntersecting, ref] = useObserver();
  const [movies, setMovies] = useState([]);

  console.log("Row, Aparecio la fila de: ", title);
  useEffect(() => {
    async function fetchData() {
      const req = await instanceAxios.get(fetchUrl);
      console.log(req);
      setMovies(formattedMovies(req.data.results));
    }

    if (isIntersecting) {
      fetchData();
    }
  }, [fetchUrl, isIntersecting]);

  return (
    <div ref={ref} className={styles.row}>
      <h2 className={styles.row_title}>{title}</h2>

      <div className={styles.posters_container}>
        {movies.map((m: any) => (
          <PosterMovie key={m.id} movie={m} />
        ))}
      </div>
    </div>
  );
};

export default RowMovies;
