import instanceAxios from "./../utils/axios";

export class Movie {
  constructor(movie) {
    this.title = movie.name || movie.title;
    this.overview = movie.overview;
    this.posterUrl = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
    this.backgroundUrl = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
    this.seasons = {
      number: movie.number_of_seasons || null,
      episodes: movie.number_of_episodes,
    };
    this.id = movie.id;
   }
    Get = function () {
    return {
      title: this.title,
      overview: this.overview,
      posterUrl: this.posterUrl,
      backgroundUrl: this.backgroundUrl,
      seasons: this.seasons,
      genres: this.genres,
      id: this.id,
    };
  };
}
