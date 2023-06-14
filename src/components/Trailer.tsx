import YouTube from "react-youtube";

// import "./trailer.css";

const Trailer = ({ videoId }: any) => {
  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  function onReady(event: any) {
    event.target.pauseVideo();
  }
  return (
    <div className="container-trailer">
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={onReady}
        className="embed embed-youtube"
        // containerClassName="embed embed-youtube"
      />
    </div>
  );
};
export default Trailer;
