import { Movie } from "./../models/Movie";

export const formatMovie = (movie) => {
  const newMovie = new Movie(movie);

  console.log(newMovie.Get());
  return newMovie.Get();
};
export const formattedMovies = (movies) => {
  const formatMovies = movies.map((movie) => formatMovie(movie));
  return formatMovies;
};
