import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="fixed flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-xl">
          <button
          onClick={() => setColor("red")}
            className="outline-none px-3 py-1 rounded-full  text-white shadow-lg "
            style={{ backgroundColor: "red" }}>
            RED
          </button>
          <button
          onClick={() => setColor("Green")}

            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "Green" }}>
            Green
          </button>
          <button
          onClick={() => setColor("yellow")}

            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "yellow" }}>
            yellow
          </button>
          <button
          onClick={() => setColor("orange")}

            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "orange" }}>
            orange
          </button>
          <button
          onClick={() => setColor("white")}

            className="outline-none px-4 py-1 rounded-full text-black shadow-lg "
            style={{ backgroundColor: "white" }}>
            White
          </button>
          <button
          onClick={() => setColor("lavender")}

            className="outline-none px-4 py-1 rounded-full text-lavender shadow-lg "
            style={{ backgroundColor: "lavender" }}>
            Lavender
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
