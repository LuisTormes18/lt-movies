import PosterMovie from "@/components/PosterMovie";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useInput, usePreviousSearch, useSearch } from "./hooks";

// import "./search.css";

const SearchScreen = () => {
  const [inputState, handleInputChange, reset] = useInput("");
  const [results, loading, setSearch] = useSearch(null);
  const [categories, setCategories] = useState(null);
  const [previousSearch, setPreviousSearch] = usePreviousSearch();

  function handleSubmit(e) {
    e.preventDefault();
    if (inputState !== "") {
      setSearch(inputState);
      setPreviousSearch(inputState);

      reset();
    }
  }
  function clickPreviousSearch({ target }) {
    setSearch(target.value);
  }

  return (
    <div className="search__screen">
      <header className="search__header">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={handleInputChange}
            value={inputState}
            placeholder="Movie Name..."
          />
          <button type="submit">
            <FaSearch size={18} color={"#f1f1f1"} />
          </button>
        </form>

        <div className="navbar__previous-search">
          {/* <span className="text-[1em] items-center">Previous search:</span> */}
          {previousSearch?.map((previous) => (
            <input
              key={previous}
              type="button"
              className="btn-categories hover:bg-blue-300 transition-[0.3s] hover:scale-105 hover:font-semibold]"
              value={previous}
              onClick={clickPreviousSearch}
            />
          ))}
        </div>
      </header>

      <div className="movies_container">
        {loading ? <div className="text-center text-[1.2em]">Loading...</div> : null}
        {results?.length <= 0 && <div className="text-center text-[1.5em]">Not Results</div>}
        {results?.map((m) => (
          <PosterMovie key={m.id} movie={m} />
        ))}
      </div>
    </div>
  );
};

export default SearchScreen;
