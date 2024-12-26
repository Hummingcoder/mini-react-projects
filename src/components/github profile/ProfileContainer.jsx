import React, { useState } from "react";
import Profile from "./Profile";
import { BiSearch } from "react-icons/bi";

const ProfileContainer = () => {
  const [input, setInput] = useState("");
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  async function handleFetchProfile(name) {
    setLoading(true);
    try {
      const res = await fetch(`https://api.github.com/users/${name}`);
      const data = await res.json();
      if (data.status && data.status === "404") {
        setError(data.message);
      } else {
        setError("");
        setProfile(data);
      }
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  }

  function handleInput(e) {
    e.preventDefault();

    handleFetchProfile(input);
  }
  return (
    <section className=" bg-pink-500 p-4 flex items-center justify-center flex-col w-full h-screen gap-5 ">
      <h1 className="font-semibold text-2xl text-white mb-4">
        Search Github Profile
      </h1>
      <form
        className="w-full max-w-[400px] bg-white flex items-center justify-between border-2 border-blue-500 rounded-full p-1"
        onSubmit={handleInput}
      >
        <input
          className="w-full outline-none pl-4"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="search..."
        />
        <button className=" w-[60px] h-[30px] bg-blue-500 rounded-full flex items-center justify-center text-white ">
          <BiSearch size={20} />
        </button>
      </form>
      {profile !== null && !loading && !error && <Profile {...profile} />}
      {error && !loading ? <p className="text-white">{error}</p> : null}
      {loading === true && <p className="text-white">Loading...</p>}
    </section>
  );
};

export default ProfileContainer;
