export interface IMovie {
  id: number;
  title: string;
  original_title: string;
  year: string;
  overview: string;
  posterUrl: string;
  backgroundUrl: string;
  seasons: {
    number: number | null;
    episodes: number;
  };
  genres: any[] | null;
  star_rating: number;
  vote_count: number;
  percentage: number;
  media_type: string;
}
export const formattedMovies = (movies: any) => {
  const formatMovies = movies.map((movie: any) => formatMovie(movie));
  return formatMovies?.slice(0, 10);
};
export const formatMovie = (movie: any) => {
  return {
    id: movie.id,
    title: movie.name || movie.title,
    original_title: movie.original_title || movie.original_name,
    year: movie.release_date,
    overview: movie.overview,
    posterUrl: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
    backgroundUrl: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
    seasons: {
      number: movie.number_of_seasons || null,
      episodes: movie.number_of_episodes || null,
    },
    genres: movie?.genres || [],
    star_rating: movie.vote_average / 2,
    vote_count: movie.vote_count || null,
    percentage: movie.vote_average * 10 || 0,
    media_type: movie.media_type || "movie",
  };
};
