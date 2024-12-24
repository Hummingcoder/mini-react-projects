import React from "react";

const Item = (props) => {
  return (
    <article className="w-[250px] h-[360px] rounded-xl  border bg-slate-200 border-black m-3 p-4 break-inside">
      <img
        className="w-full h-fit max-h-[140px] rounded-xl bg-slate-300 object-contain object-center mb-3 border border-black"
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
