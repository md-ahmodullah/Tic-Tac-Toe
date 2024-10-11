import { useState } from "react";

function Square({ value }) {
  function handleClick() {}

  return (
    <button
      className="bg-white w-12 h-12 m-1 border border-gray-400 leading-9"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <>
      <div className="flex">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>

      <div className="flex">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>

      <div className="flex">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
}
