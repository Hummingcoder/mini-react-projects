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

          console.log(
            fullName.slice(0, input.length) ===
              input.replace(/\s+/g, "").toLowerCase()
          );

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
    <section className="w-full h-screen pt-12">
      <div>
        <input
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
      </div>
    </section>
  );
};

export default SearchComp;
