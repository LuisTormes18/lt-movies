import { useState, useEffect } from "react";

import { instanceAxios, formattedMovies } from "./../../../utils";

const useSearch = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(null);
  const [results, setResults] = useState(null);

  const api_key = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (search) {
      setLoading(true);
      async function fetchData() {
        const req = await instanceAxios.get(
          `/search/movie?api_key=${api_key}&query=${search}`
        );
        setResults(formattedMovies(req.data.results));
      }

      fetchData();
      setLoading(false);
    }
  }, [search]);

  return [results, loading, setSearch];
};

export default useSearch;
