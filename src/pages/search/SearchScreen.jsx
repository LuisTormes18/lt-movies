import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

import Loading from "./../../components/Loading";
import PosterMovie from "./../../components/PosterMovie";
import { useInput, useSearch } from "./hooks";

import "./search.css";

const SearchScreen = () => {
  const [inputState, handleInputChange, reset] = useInput("");
  const [results, loading, setSearch] = useSearch(null);
  const [categorie, setCategorie] = useState(null);

  const base_url = import.meta.env.VITE_IMG_URL;


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

       {
          loading ? <Loading /> : (

            <div className="movies_container">

        {
          results?.map((m) => <PosterMovie key={m.id} movie={m} /> )}
        
      </div>
            )
        }
      
    </div>
  );
};

export default SearchScreen;
