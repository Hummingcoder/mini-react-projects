import React, { useRef, useState } from "react";
import useClickOutside from "./useClickOutside";

function ClickOut() {
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => setShow(false));
  return (
    <section className="w-full min-h-[50vh] pt-20">
      <div
        ref={ref}
        className=" w-fit mx-auto h-fit flex-col grid place-content-center border border-black rounded-md p-4"
      >
        <button
          className="border text-sm border-black rounded-md px-3 py-1"
          onClick={() => setShow(true)}
        >
          know the ancient secret
        </button>
        {show === true && (
          <div className="p-3 w-fit h-fit">
            <p className="text-center">i am loosing my mind 😭😭</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ClickOut;
