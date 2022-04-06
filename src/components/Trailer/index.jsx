import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import Modal from "react-modal";

const ModalTrailer = ({ videoId, setVideoIdTrailer }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (videoId || videoId === undefined) {
      setIsOpen(true);
    }
  }, [videoId]);

  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0px",
      backgroundColor: "#000",
      border: "none",
      width: "80%",
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setVideoIdTrailer(null);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Container Modal"
    >
      {videoId === undefined && (
        <div
          style={{ color: "white", display: "flex", justifyContent: "center" }}
        >
          {" "}
          <h2> Not Trailer! </h2>{" "}
        </div>
      )}
      {videoId && <YouTube videoId={videoId} opts={opts} />}
    </Modal>
  );
};

export default ModalTrailer;
