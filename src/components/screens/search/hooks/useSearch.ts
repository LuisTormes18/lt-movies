import { formattedMovies, instanceAxios } from "@/utils";
import { useEffect, useState } from "react";

const useSearch = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(null);
  const [results, setResults] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const req = await instanceAxios.get(
        `/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${search}`
      );
      setResults(formattedMovies(req.data.results));
    }

    if (search) {
      setLoading(true);
      fetchData();
      setLoading(false);
    }
  }, [search]);

  return [results, loading, setSearch];
};

export default useSearch;
