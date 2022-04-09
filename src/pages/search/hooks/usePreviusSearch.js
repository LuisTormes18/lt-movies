import { useState, useEffect } from "react";

const usePreviusSearch = () => {
  const previus = JSON.parse(localStorage.getItem("previusSearch")) || [];
  const [state, setState] = useState(previus);

  useEffect(() => {
    localStorage.setItem("previusSearch", JSON.stringify(state));
  }, [state]);

  return [state, setState];
};

export default usePreviusSearch;
