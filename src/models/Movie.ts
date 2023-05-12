interface MovieInterface {
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

export class Movie implements MovieInterface {
  id: number;
  title: string;
  original_title: string;
  year: string;
  overview: string;
  posterUrl: string;
  backgroundUrl: string;
  seasons = {
    number: null,
    episodes: 0,
  };
  genres = null;
  star_rating = 0;
  vote_count = 0;
  percentage = 0;
  media_type = "movie";

  constructor(movie: any) {
    this.id = movie.id;
    this.title = movie.name || movie.title;
    this.original_title = movie.original_title || movie.original_name;
    this.year = movie.release_date;
    this.overview = movie.overview;
    this.posterUrl = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
    this.backgroundUrl = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
    this.seasons.number = movie.number_of_seasons || null;
    this.seasons.episodes = movie.number_of_episodes || null;
    this.genres = movie?.genres || null;
    this.star_rating = movie.vote_average / 2;
    this.vote_count = movie.vote_count || null;
    this.percentage = movie.vote_average * 10 || 0;
    this.media_type = movie.media_type || "movie";
  }

  Get() {
    return {
      id: this.id,
      title: this.title,
      original_title: this.original_title,
      overview: this.overview,
      posterUrl: this.posterUrl,
      backgroundUrl: this.backgroundUrl,
      seasons: this.seasons,
      genres: this.genres,
      star_rating: this.star_rating,
      vote_count: this.vote_count,
      percentage: this.percentage,
      media_type: this.media_type,
      year: this.year,
    };
  }
}
