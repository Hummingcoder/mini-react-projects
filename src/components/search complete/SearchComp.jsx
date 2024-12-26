import React, { useEffect, useState } from "react";

const SearchComp = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);
  const [users, setUsers] = useState(null);

  const handleInput = async () => {
    try {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      if (data && data.users && input.trim().length > 0) {
        const userData = [];
        data.users.forEach((user) => {
          const fullName = (user.firstName + user.lastName).toLowerCase();
          if (
            fullName.slice(0, input.length) ===
            input.replace(/\s+/g, "").toLowerCase()
          ) {
            userData.push(user.firstName + " " + user.lastName);
          }
        });
        setUsers(userData);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    handleInput();
  }, [input]);

  return (
    <section className="w-full min-h-[50vh] pt-12 flex items-start justify-center bg-emerald-200">
      <div>
        <input
          className="border border-black rounded-md px-4 py-2"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="search..."
        />
        {users &&
          users.length > 0 &&
          users.map((item, i) => (
            <button onClick={() => setInput(item)} className="block " key={i}>
              {item}
            </button>
          ))}
        {error && error.length > 0 && <p>{error}</p>}
      </div>
    </section>
  );
};

export default SearchComp;
