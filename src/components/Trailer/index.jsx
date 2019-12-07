import { useState } from "react";
import YouTube from "react-youtube";
import Modal from "react-modal";

const ModalTrailer = ({ videoId }) => {
  const [modalIsOpen, setIsOpen] = useState(true);

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
  }

  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {videoId === "undefined" ? (
        <span> Not Trailer!! </span>
      ) : (
        <YouTube videoId={videoId} opts={opts} />
      )}
    </Modal>
  );
};

export default ModalTrailer;
