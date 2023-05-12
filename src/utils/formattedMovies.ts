import { Movie } from "./../models/Movie";

export const formattedMovies = (movies: any) => {
  const formatMovies = movies.map((movie: any) => formatMovie(movie));
  return formatMovies.slice(0, 10);
};
export const formatMovie = (movie: any) => {
  const newMovie = new Movie(movie);
  return newMovie.Get();
};
