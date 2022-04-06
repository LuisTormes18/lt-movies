import instanceAxios from "./../axios";

export const getVideoIdTrailer = async (movieId) => {
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
