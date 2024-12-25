import React, { useState } from "react";
import QRCode from "react-qr-code";

const QR = () => {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");

  const handlQRgen = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setQrCode(input);
      setInput("");
    }
  };

  return (
    <section className="w-full h-screen p-4 mt-8 flex items-center justify-center">
      <div className="w-full max-w-[600px]">
        <h1 className="mx-auto w-fit text-2xl font-semibold mb-6">
          QR code Generator
        </h1>
        <form
          onSubmit={(e) => handlQRgen(e)}
          className="w-full max-w-[500px] mx-auto flex md:flex-row flex-col items-center justify-center"
        >
          <input
            className="py-1 px-2 w-full md:w-[80%] outline-none border border-black rounded-md"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="text here..."
          />
          <button
            className={`${
              input.trim() == ""
                ? "opacity-30 cursor-not-allowed "
                : " cursor-pointer"
            } font-semibold border text-white bg-blue-600 border-black w-full md:w-fit  py-1 px-4 m-3 rounded-md " type="submit `}
          >
            Generator
          </button>
        </form>

        <QRCode
          className="mx-auto m-6 w-full max-w-[400px] rounded-md p-2 "
          id="qr-code-value"
          value={qrCode}
          size={400}
        />
      </div>
    </section>
  );
};

export default QR;
