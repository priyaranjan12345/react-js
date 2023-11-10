import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);

  const incValue = () => {
    counter = counter + 1;
    setCounter(counter);
    console.log(counter);
  };

  const decValue = () => {
    // counter = counter - 1
    // setCounter(counter)
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    console.log(counter);
  };

  return (
    <>
      <h1>My Counter App</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={incValue}> Increment </button>
      <br />
      <br />
      <button onClick={decValue}> Decrement </button>
    </>
  );
}

export default App;
