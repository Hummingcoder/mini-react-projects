import React, { useState } from "react";
import Modal from "./Modal";

const ModalContainer = () => {
  const [showModal, setshowModal] = useState(false);

  const handleShowModal = () => {
    setshowModal((prev) => !prev);
  };

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div>
        <button
          onClick={handleShowModal}
          className="border border-black rounded-md px-6 py-2 text-lg bg-white hover:bg-gray-100"
        >
          click to know the truth
        </button>
        {showModal === true && <Modal close={handleShowModal} />}
      </div>
    </section>
  );
};

export default ModalContainer;
