import { useState } from "react";

function App() {
  let [bgColor, setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: bgColor }}></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor('red')} className="outline-none px-10 py-4 rounded-full" style={{ backgroundColor: 'red', color: 'white' }}> Red </button>
          <button onClick={() => setColor('green')} className="outline-none px-10 py-4 rounded-full" style={{ backgroundColor: 'green', color: 'white' }}> Green </button>
          <button onClick={() => setColor('blue')} className="outline-none px-10 py-4 rounded-full" style={{ backgroundColor: 'blue', color: 'white' }}> Blue </button>
          <button onClick={() => setColor('yellow')} className="outline-none px-10 py-4 rounded-full" style={{ backgroundColor: 'yellow', color: 'white' }}> Yellow </button>
        </div>
      </div>
    </>
  );
}

export default App;
