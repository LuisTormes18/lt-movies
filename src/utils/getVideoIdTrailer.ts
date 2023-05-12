import instanceAxios from "./axios";

export const getVideoIdTrailer = async (movieId: any) => {
  const api_key = process.env.NEXT_PUBLIC_API_KEY;

  try {
    const req = await instanceAxios.get(`/movie/${movieId}/videos?api_key=${api_key}`);

    return req?.data?.results[0]?.key || undefined;
  } catch (err) {
    return undefined;
  }
};
