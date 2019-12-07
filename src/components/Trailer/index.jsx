import { useState, useEffect } from "react";
import YouTube from "react-youtube";

const Trailer = ({ videoId }) => {
  const [activeTrailer, setActiveTrailer] = useState({});
  const [trailers, setTrailers] = useState([]);
  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  useEffect(() => {
    async function fetchData() {
      const api_key = import.meta.env.VITE_API_KEY;

      const resp = await instanceAxios.get(
        `/movie/${videoId}/videos?api_key=${api_key}`
      );
      const active = resp.data.results.pop();
      setActiveTrailer(active);
      setTrailers(resp.data.results);
    }
    fetchData();
  }, [videoId]);

  return (
    <div className="container">
      <div className="trailer_active">
        <YouTube videoId={activeTrailer?.key} opts={opts} />
      </div>
      <div className="trailers_container">
        {trailers?.map((t) => (
          <h2 key={t?.key}>{t?.key}</h2>
        ))}
      </div>
    </div>
  );
};
export default Trailer;
