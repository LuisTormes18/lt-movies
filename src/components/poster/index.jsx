import "./movie.css";

const Movie = ({ budget }) => {
  function handleClick() {}
  return (
    <div className="movie" onClick={handleClick}>
      <img src="../../../data_example/posterExample.png" />
    </div>
  );
};

export default Movie;
