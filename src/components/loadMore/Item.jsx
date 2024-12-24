import React from "react";

const Item = (props) => {
  return (
    <article className="w-[250px] h-fit border border-black m-3 p-4 break-inside">
      <img
        className="w-full max-h-[240px] object-contain object-center mb-3 border border-black"
        src={props.images[0]}
        alt={props.title}
      />
      <div>
        <h3 className="text-lg mb-1 font-semibold">{props.title}</h3>
        <p className="text-sm">{props.description}</p>
      </div>
    </article>
  );
};

export default Item;
