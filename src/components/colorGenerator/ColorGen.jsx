import React, { useState } from "react";

const ColorGen = () => {
  const [hexCode, setHexCode] = useState(() => randomColor());
  const [copiedCode, setCopiedCode] = useState("");
  function randomColor() {
    const refCode = "123456789abcdef";
    let newColor = "";

    for (let i = 0; i < 6; i++) {
      let ranNum = Math.floor(Math.random() * refCode.length);
      newColor += refCode.charAt(ranNum);
    }
    return "#" + newColor;
  }

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(hexCode);
    setCopiedCode(hexCode);
  };

  return (
    <section
      style={{
        background: hexCode,
      }}
      className="w-full h-screen flex items-center justify-center flex-col"
    >
      <div className="flex items-center justify-between bg-slate-800 text-white w-[240px] h-[40px] p-2">
        <input
          className="w-[150px] h-full outline-none bg-transparent"
          type="text"
          readOnly
          value={hexCode}
        />
        <button onClick={copyToClipboard} className="w-[50px]">
          {hexCode === copiedCode ? "👍" : "copy"}
        </button>
      </div>
      <button
        onClick={() => setHexCode(randomColor())}
        className="bg-red-400 w-[240px] p-3 font-bold text-lg"
      >
        New Color
      </button>
    </section>
  );
};

export default ColorGen;
