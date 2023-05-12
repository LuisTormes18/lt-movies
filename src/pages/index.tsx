import ModalContainer from "@/components/ModalContainer";
import RowMovies from "@/components/RowMovies";
import { Layout } from "@/components/layout/Layout";
import { appContext } from "@/context/contextProvider";
import { instanceAxios, randomMovie, requests, truncateString } from "@/utils";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const { handleSeeTrailer, modalIsOpen } = useContext<any>(appContext);
  const [movie, setMovie] = useState<any>([]);

  useEffect(() => {
    async function fetchData() {
      const req = await instanceAxios.get(requests.fetchNetflixOriginals);
      setMovie({ ...randomMovie(req.data.results), media_type: "tv" });
    }
    fetchData();
  }, []);

  return (
    <Layout title="LT Movies | Home">
      <div className="home_screen">
        <div
          className="home_screen__banner"
          style={{
            backgroundImage: `linear-gradient(to right, #000, transparent 100%), url(${movie?.backgroundUrl})`,
          }}
        >
          <div className="banner__text">
            <h1>{movie?.title}</h1>
            <p>{truncateString(movie?.overview, 160)}</p>
            <div className={`flex justify-start gap-[18px]`}>
              <button
                className="btn-outline hover:bg-blend-overlay"
                onClick={() => {
                  handleSeeTrailer(movie?.id, movie?.media_type);
                }}
              >
                See Trailer
              </button>
              <Link className="btn " href={`/movie/${movie.media_type}-${movie.id}`}>
                See Details
              </Link>
            </div>
          </div>
        </div>

        <div className="movies_container">
          <RowMovies title={"Trending Now"} fetchUrl={requests.fetchTrending} />
          <RowMovies title={"Comedy"} fetchUrl={requests.fetchComedyMovies} />
          <RowMovies title={"Horror"} fetchUrl={requests.fetchHorrorMovies} />
          <RowMovies title={"Action"} fetchUrl={requests.fetchActionMovies} />
          <RowMovies title={"Romance"} fetchUrl={requests.fetchRomanceMovies} />
        </div>
        {modalIsOpen && <ModalContainer />}
      </div>
    </Layout>
  );
}
