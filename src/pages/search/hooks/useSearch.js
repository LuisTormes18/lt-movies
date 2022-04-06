import { useState, useEffect } from "react";
import instanceAxios from "./../../../axios";

const useSearch = () => {
  const [search, setSearch] = useState(null);
  const [results, setResults] = useState(null);

  const api_key = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (search) {
      async function fetchData() {
        const req = await instanceAxios.get(`/search/movie/${search}?api_key=${api_key}`);
        setResults(req.data);

        console.log('req.data', req.data)
      }

      fetchData();
    }
  }, [search]);

  return [results, setSearch];
};

export default useSearch;
