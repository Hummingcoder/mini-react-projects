import React, { useEffect, useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const TicTacToe = () => {
  const [boxes, setBoxes] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [moves, setMoves] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [playerMoves, setPlayerMoves] = useState([]);
  const [computerMoves, setComputerMoves] = useState([]);

  const [winner, setWinner] = useState("");

  function handlePlayerMove(n) {
    if (moves.includes(n) && !winner.length) {
      setPlayerMoves((prev) => [...prev, n]);
      setMoves((prev) => prev.filter((item) => item !== n));
    }
  }

  function handleWins(pl, w) {
    const winStates = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];

    winStates.forEach((state) => {
      if (state.every((num) => pl.includes(num))) {
        setWinner(w);
        setMoves([]);
      }
    });
  }

  function handleReset() {
    setPlayerMoves([]);
    setComputerMoves([]);
    setMoves([...boxes]);
    setWinner("");
  }

  useEffect(() => {
    handleWins(playerMoves, "player");
    if (playerMoves.length && moves.length && !winner.length) {
      const randNum = Math.floor(Math.random() * moves.length);
      setComputerMoves((prev) => [...prev, moves[randNum]]);
      setMoves((prev) => prev.filter((item) => item !== moves[randNum]));
    }
  }, [playerMoves]);

  useEffect(() => {
    if (!winner || !winner.length) {
      handleWins(computerMoves, "computer");
    }
  }, [computerMoves]);

  return (
    <section className="w-full h-screen flex flex-col pt-12 items-center bg-violet-500 justify-center">
      <article className="w-fit h-fit grid grid-cols-3  p-1 rounded-md gap-1 bg-black ">
        {boxes.map((box) => (
          <div
            onClick={() => handlePlayerMove(box)}
            className={` ${
              playerMoves.includes(box)
                ? "bg-emerald-300"
                : computerMoves.includes(box)
                ? "bg-rose-400"
                : "bg-white"
            } w-[90px] h-[90px] ${
              moves.includes(box) ? "cursor-pointer" : "cursor-not-allowed"
            } rounded-md flex items-center justify-center`}
            key={box}
          >
            {playerMoves.includes(box) ? (
              <FaRegCircle size={50} />
            ) : computerMoves.includes(box) ? (
              <IoMdClose size={60} />
            ) : (
              ""
            )}
          </div>
        ))}
      </article>
      <div className="flex flex-col items-center justify-center min-h-[200px] w-full">
        {winner.length > 0 && (
          <p className="text-white text-xl font-serif">{winner} wins!!</p>
        )}

        <button
          onClick={handleReset}
          className="bg-slate-50 px-6 py-1 text-xl rounded-md shadow-md border-[1px] border-black m-5 border-b-[3px]"
        >
          reset
        </button>
      </div>
    </section>
  );
};

export default TicTacToe;
