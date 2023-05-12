import { formatMovie, instanceAxios, truncateString } from "@/utils";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

import Loading from "@/components/Loading";
import RatingMovie from "@/components/Rating";
import { Layout } from "@/components/layout/Layout";
import { appContext } from "@/context/contextProvider";
import Image from "next/image";
import ModalContainer from "./../components/ModalContainer";

const MovieScreen = () => {
  const { handleSeeTrailer, modalIsOpen } = useContext(appContext);
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const router = useRouter();

  console.log(router);
  let media = router.query.movie;
  let [media_type, id] = media.split("-");

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const api_key = process.env.NEXT_PUBLIC_API_KEY;
      const req = await instanceAxios.get(`/${media_type}/${id}?api_key=${api_key}`);
      setMovie({ ...formatMovie(req.data), media_type });
      setLoading(false);
    }

    fetchData();
  }, [id, media_type]);

  if (loading) {
    return <Loading />;
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

            <RatingMovie {...movie} />

            <p>{truncateString(movie?.overview, 160)}</p>

            <div className="details">
              {movie?.seasons?.number && (
                <div className="seasons">
                  <p>
                    Seasons: <span>{movie?.seasons?.number}</span>{" "}
                  </p>

                  <p>
                    Episodes: <span>{movie?.seasons?.episodes}</span>{" "}
                  </p>
                </div>
              )}
              <p>
                Genres: <span>{movie?.genres.map(({ name }) => `${name}, `)}</span>{" "}
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
