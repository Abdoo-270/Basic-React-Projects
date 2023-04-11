import { FaBars } from "react-icons/fa";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import { useState } from "react";
const Home = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section>
      <div className="modal-btn">
        <button className="btn" onClick={() => setShowModal(true)}>
          show modal
        </button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </section>
  );
};

export default Home;
