import { Suspense, lazy, useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

import { PosterMovie } from "../../components";
import { useInput, useSearch, usePreviusSearch } from "./hooks";

import "./search.css";

const SearchScreen = () => {
  const [inputState, handleInputChange, reset] = useInput("");
  const [results, loading, setSearch] = useSearch(null);
  const [categorie, setCategorie] = useState(null);
  const [previusSearch, setPreviusSearch] = usePreviusSearch();

  function handleSutmit(e) {
    e.preventDefault();
    if (inputState !== "") {
      setSearch(inputState);
      setPreviusSearch((p) => [inputState, ...p.slice(0, 4)]);

      reset();
    }
  }
  function clickPreviusSearch({ target }) {
    setSearch(target.value);
  }

  return (
    <div className="search__screen">
      <header className="search__header">
        <form onSubmit={handleSutmit}>
          <input
            type="search"
            onChange={handleInputChange}
            value={inputState}
            placeholder="Movie Name..."
          />
          <FaSearch size={18} color={"#f1f1f1"} />
        </form>

        <div className="navbar__previus-search">
          {previusSearch?.map((previus) => (
            <input
              key={previus}
              type="button"
              className="btn-categorie"
              value={previus}
              onClick={clickPreviusSearch}
            />
          ))}
        </div>
      </header>

      {loading ? (
        <Loading />
      ) : (
        <div className="movies_container">
          {results?.map((m) => (
            <PosterMovie key={m.id} movie={m} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchScreen;
