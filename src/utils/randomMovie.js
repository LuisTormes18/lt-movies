import { formatMovie } from "./formattedMovies";

const randomMovie = async (movies) => {
  const movie = movies[Math.floor(Math.random() * movies.length - 1)];
  const newMovie = formatMovie(movie);

  return newMovie;
};

export default randomMovie;
