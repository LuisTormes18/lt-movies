import formattedMovies from "./formattedMovies";

const randomMovie = async (movies) => {
  const movie = movies[Math.floor(Math.random() * movies.length - 1)];
  const formatMovie = formattedMovies([movie]);

  return formatMovie[0];
};

export default randomMovie;
