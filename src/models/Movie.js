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
    this.genres = this.mapGenres(movie.genres);
    this.id = movie.id;
    this.trailerId = this.getVideoIdTrailer(movie.id);
  }
  getVideoIdTrailer = async function (movieId) {
    const api_key = import.meta.env.VITE_API_KEY;

    try {
      const req = await instanceAxios.get(
        `/movie/${movieId}/videos?api_key=${api_key}`
      );

      return req?.data?.results[0]?.key || undefined;
    } catch (err) {
      return undefined;
    }
  };

  mapGenres = function (genres) {
    return this.genres.map((g) => g.name);
  };
  Get = function () {
    return {
      title: this.title,
      overview: this.overview,
      posterUrl: this.posterUrl,
      backgroundUrl: this.backgroundUrl,
      seasons: this.seasons,
      genres: this.genres,
      id: this.id,
      trailerId: this.trailerId,
    };
  };
}
