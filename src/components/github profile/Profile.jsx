import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Profile = ({ avatar_url, html_url, name, login }) => {
  return (
    <article className="w-fit rounded-md shadow-md bg-slate-50 max-w-[360px] p-4 border-2 border-blue-500 flex flex-col items-center justify-between gap-3">
      <img
        className="w-[120px] h-[120px] rounded-full object-contain object-center"
        src={avatar_url}
        alt={name}
      />
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl text-slate-700 font-semibold capitalize ">
          {" "}
          {name}{" "}
        </p>
        <a
          className="text-violet-700 flex items-center justify-center gap-2"
          href={html_url}
        >
          <span className="font-semibold underline">{login}</span>{" "}
          <FaExternalLinkAlt />
        </a>
      </div>
    </article>
  );
};

export default Profile;
