import { getVideoIdTrailer } from "./getVideoIdTrailer";
import { Movie } from "./../models/Movie";

export const formatMovie = (movie) => {
  const newMovie = new Movie(movie);
  return newMovie;
};
export const formattedMovies = (movies) => {
  const formatMovies = movies.map((movie) => formatMovie(movie));
  return formatMovies;
};
