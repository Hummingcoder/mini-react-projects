import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const url = "https://picsum.photos/v2/list?page=1&limit=6";

const ImageSlider = () => {
  const [err, setErr] = useState("");
  const [loading, setloading] = useState(true);
  const [images, setImages] = useState([]);
  const [currentImg, setcurrentImg] = useState("");
  function handleDots(src) {
    setcurrentImg(src);
  }
  function handlePrev() {
    let getIndex = images.indexOf(currentImg);
    if (getIndex === 0) {
      getIndex = images.length;
    }
    setcurrentImg(images[getIndex - 1]);
  }
  function handleNext() {
    let getIndex = images.indexOf(currentImg);
    if (getIndex >= images.length - 1) {
      getIndex = 0;
      setcurrentImg(images[getIndex]);
    } else setcurrentImg(images[getIndex + 1]);
  }

  async function getImagesFromURL() {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setImages(data);
      setcurrentImg(data[0]);
      setloading(false);
    } catch (error) {
      setErr(error.massage);
    }
  }

  useEffect(() => {
    getImagesFromURL();
  }, []);
  if (loading === true) return <p>loading</p>;
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="relative w-full max-w-[500px] flex flex-col items-center justify-center">
        <img
          src={`${currentImg.download_url}`}
          alt=""
          className="w-[400px] h-[320px] rounded-lg m-4 shadow-lg"
        />
        <button
          onClick={handleNext}
          className="absolute shadow-lg right-8 top-[50%] translate-y-[-50%] p-4 bg-red-50 flex items-center justify-center rounded-full"
        >
          <FaArrowRight />
        </button>
        <button
          onClick={handlePrev}
          className="absolute shadow-lg left-8 top-[50%] translate-y-[-50%] p-4 bg-red-50 flex items-center justify-center rounded-full"
        >
          <FaArrowLeft />
        </button>
        <div className="absolute bottom-7 flex items-center justify-center gap-1">
          {images.map((i, index) => (
            <button
              key={index}
              onClick={() => handleDots(i)}
              className={`w-[8px] h-[8px] rounded-full bg-white hover:bg-[#ffffff95] ${
                currentImg.id === i.id && "scale-[140%]"
              } `}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
