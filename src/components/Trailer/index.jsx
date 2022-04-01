import { useState } from "react";
import YouTube from "react-youtube";
import Modal from "react-modal";

const ModalTrailer = ({ urlTrailer }) => {

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

  const [modalIsOpen, setIsOpen] = useState(true);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {urlTrailer === "undefined" ? (
        <span> Not Trailer!! </span>
      ) : (
        <YouTube
          videoId={urlTrailer}
          opts={{
            height: "400",
            width: "100%",
            playerVars: {
              autoplay: 1,
            },
          }}
        />
      )}
    </Modal>
  );
};

export default ModalTrailer;
