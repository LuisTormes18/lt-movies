import { getVideoIdTrailer } from "./getVideoIdTrailer";

const formattedMovies = (movies) => {
  const base_url = import.meta.env.VITE_IMG_URL;

  const formatMovies = movies.map((movie) => {
    const trailerId = getVideoIdTrailer(movie.id);
    return {
      title:
        movie.name ||
        movie.title ||
        movie.original_name ||
        movie.original_title,
      overview: movie.overview,
      posterUrl: `${base_url}${movie.poster_path}`,
      backgroundUrl: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
      seasons: {
        number: movie.number_of_seasons || null,
        episodes: movie.number_of_episodes,
      },
      genres: movie.genres.map((g) => g.name),
      id: movie.id,
      trailerId,
    };
  });

  return formatMovies;
};

export default formattedMovies;
