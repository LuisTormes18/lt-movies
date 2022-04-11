import { useContext } from "react";
import Modal from "react-modal";
import YouTube from "react-youtube";

import Trailer from "./../Trailer";

import { appContext } from "../../context/contextProvider";

const ModalContainer = () => {
  const { modalIsOpen, setModalOpen, trailerId } = useContext(appContext);
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
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      style={customStyles}
      contentLabel="Container Modal"
    >
      <Trailer videoId={trailerId} />
    </Modal>
  );
};

export default ModalContainer;
