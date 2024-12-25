import React from "react";
import { CgClose } from "react-icons/cg";

const Modal = ({ close, content = "i am dumb " }) => {
  const handleClose = (e) => {
    if (e.target.id === "modal") {
      close();
    }
  };
  return (
    <section
      id="modal"
      onClick={handleClose}
      className="w-full h-screen bg-[#21202085] fixed top-0 left-0 flex items-center justify-center p-4 "
    >
      <div className="bg-white p-4 relative w-full max-w-[400px] h-[300px] flex items-center justify-center rounded-md shadow-md">
        <button onClick={close} className="absolute top-2 right-2">
          <CgClose size={30} />
        </button>
        <p>{content}</p>
      </div>
    </section>
  );
};

export default Modal;
