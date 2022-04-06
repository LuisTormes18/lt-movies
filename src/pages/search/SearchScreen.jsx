import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useInput, useSearch } from "./hooks";

import "./search.css";

const SearchScreen = () => {
  const [inputState, handleInputChange, reset] = useInput("");
  const [results, setSearch] = useSearch(null);
  const [categorie, setCategorie] = useState(null);

  function handleSutmit(e) {
    e.preventDefault();

    setSearch(inputState);

    reset();
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

        <div className="navbar__categories">
          <button className="btn-categorie" onClick={setCategorie}>
            Action
          </button>
          <button className="btn-categorie" onClick={setCategorie}>
            Comedia
          </button>
          <button className="btn-categorie" onClick={setCategorie}>
            Aventura
          </button>
          <button className="btn-categorie" onClick={setCategorie}>
            Drama
          </button>
          <button className="btn-categorie" onClick={setCategorie}>
            Terror
          </button>
        </div>
      </header>
      <div className="movies_container">
        {results?.map((movie) => (
          <h2>{movie?.title}</h2>
        ))}
      </div>
    </div>
  );
};

export default SearchScreen;
