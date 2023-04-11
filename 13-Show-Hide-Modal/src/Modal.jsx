import { FaWindowClose } from "react-icons/fa";
const Modal = ({ showModal, setShowModal }) => {
  const styles = {
    display: "block",
  };

  const conditionalStyles = showModal ? styles : {};
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <section className="modal-outer-box" style={conditionalStyles}>
      <div className="modal-container">
        <button onClick={() => closeModal()} className="close-modal-btn">
          <FaWindowClose />
        </button>
        <h3>Modal Content</h3>
      </div>
    </section>
  );
};

export default Modal;
