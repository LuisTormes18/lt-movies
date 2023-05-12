import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./poster.module.css";

const PosterMovie = ({ movie }: any) => {
  const router = useRouter();
  function handleClickPosterMovie() {
    router.push(`/movie/${movie.media_type}-${movie.id}`);
  }
  return (
    <div className={`${styles.poster_movie}`} onClick={handleClickPosterMovie}>
      <Image src={movie.posterUrl} alt={movie.title} fill />
    </div>
  );
};

export default PosterMovie;
