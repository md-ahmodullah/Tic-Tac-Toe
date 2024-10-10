function Square({ value }) {
  function handleClick() {
    console.log("Clicked");
  }

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
  return (
    <>
      <div>
        <Square value={1} />
        <Square value={2} />
        <Square value={3} />
      </div>

      <div>
        <Square value={4} />
        <Square value={5} />
        <Square value={6} />
      </div>

      <div>
        <Square value={7} />
        <Square value={8} />
        <Square value={9} />
      </div>
    </>
  );
}
