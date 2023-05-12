import { formatMovie } from "./formattedMovies";

const randomMovie = (movies: any) => {
  const movie = movies[Math.floor(Math.random() * movies.length - 1)];
  const newMovie = formatMovie(movie);

  return newMovie;
};

export default randomMovie;
