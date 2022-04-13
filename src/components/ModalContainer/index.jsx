import { useContext } from "react";
import Modal from "react-modal";

import Trailer from "./../Trailer";
import { appContext } from "../../context/contextProvider";

const ModalContainer = () => {
  const { modalIsOpen, setModalOpen, trailerId, loading } =
    useContext(appContext);
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

  console.log("Se importo el Modal Container...");

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      style={customStyles}
      contentLabel="Container Modal"
    >
      {!loading && <Trailer videoId={trailerId} />}
    </Modal>
  );
};

export default ModalContainer;
