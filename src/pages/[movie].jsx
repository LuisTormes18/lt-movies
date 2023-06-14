import { Layout, Loading, ModalContainer, Rating } from "@/components";
import { appContext } from "@/context/contextProvider";
import { formatMovie, instanceAxios, truncateString } from "@/utils";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

const MovieScreen = () => {
  const { handleSeeTrailer, modalIsOpen } = useContext(appContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    let media = router?.query?.movie?.split("-") || [];
    let media_type = media[0];
    let id = media[1];

    async function fetchData() {
      const api_key = process.env.NEXT_PUBLIC_API_KEY;
      try {
        const req = await instanceAxios.get(`/${media_type}/${id}?api_key=${api_key}`);
        const movieFormatted = formatMovie({ ...req?.data, media_type });
        setMovie(movieFormatted);
        setLoading(false);
      } catch (err) {
        console.log("err:", err);
        setError(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return (
      <>
        <div className="flex items-center justify-center w-full h-screen bg-transparent">
          <div>
            <h2 className={`text-white font-[1.2rem]`}>Upps! Ocurrio un error inesperado.</h2>
          </div>
        </div>
      </>
    );
  }
  return (
    <Layout>
      <div className="movie-screen">
        <div
          className="hero"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(18, 18, 18, 0.6), rgba(18, 18, 18, 0.6) 100%), url(${movie?.backgroundUrl})`,
          }}
        >
          <div className="poster">
            <Image src={movie?.posterUrl} alt={movie?.title} width={300} height={400} />
            <br />
            <button
              className="btn-outline"
              type="button"
              onClick={() => {
                handleSeeTrailer(movie?.id, movie?.media_type);
              }}
            >
              See trailer...
            </button>
          </div>

          <div className="texts">
            <h1>{movie?.title}</h1>

            {movie && <Rating movie={movie} />}

            <p>{truncateString(movie?.overview, 160)}</p>

            <div className="details">
              {movie?.seasons?.number && (
                <div className="seasons">
                  <p>
                    Seasons: <span>{movie?.seasons?.number}</span>
                  </p>
                  <p>
                    Episodes: <span>{movie?.seasons?.episodes}</span>
                  </p>
                </div>
              )}
              <p>
                Genres: <span>{movie?.genres?.map((genre) => `${genre?.name}`)}</span>
              </p>
            </div>
          </div>
        </div>
        {modalIsOpen && <ModalContainer />}
      </div>
    </Layout>
  );
};

export default MovieScreen;
