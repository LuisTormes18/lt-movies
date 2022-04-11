export class Movie {
  constructor(movie) {
    this.id = movie.id;
    this.title = movie.name || movie.title;
    this.overview = movie.overview;
    this.posterUrl = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
    this.backgroundUrl = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
    this.seasons = {
      number: movie.number_of_seasons || null,
      episodes: movie.number_of_episodes,
    };
    this.genres = movie?.genres || null;
    this.star_rating = movie.vote_average / 2;
    this.vote_count = movie.vote_count;
    this.percentage = movie.vote_average * 10;
    this.media_type = movie.media_type;
  }
  Get = function () {
    return {
      id: this.id,
      title: this.title,
      overview: this.overview,
      posterUrl: this.posterUrl,
      backgroundUrl: this.backgroundUrl,
      seasons: this.seasons,
      genres: this.genres,
      star_rating: this.star_rating,
      vote_count: this.vote_count,
      percentage: this.percentage,
      media_type: this.media_type,
    };
  };
}
