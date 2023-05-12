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
// .container-trailer {
//   padding: 10px;

//   background-color: rgba(18, 18, 18, 0.7);
//   color: white;

//   width: 100%;
//   height: 100%;
//   min-height: 400px;
//   max-height: 500px;
//   max-width: 800px;
// }
// .trailer_active {
//   max-width: 1000px;

//   margin: auto;
// }
// h1 {
//   margin-bottom: 30px;
// }
/*.trailers_container{
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 10px ;
}
.poster_trailer{
	width: 100%;
	max-width: 200px;

	padding: 10px;
}*/
