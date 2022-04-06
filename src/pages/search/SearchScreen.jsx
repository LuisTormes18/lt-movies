import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

import "./search.css";

const SearchScreen = () => {
  const [search, setSearch] = useState(null);
  const [result, setResult] = useState(null);
  const [categorie, setCategorie] = useState(null);

  return (
    <div className="search__screen">
      <header className="search__header">
        <form>
          
          <input type="search" placeholder="Movie Name..." />
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

      </div>

    </div>
  );
};

export default SearchScreen;
