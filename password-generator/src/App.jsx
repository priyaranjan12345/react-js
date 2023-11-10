import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setNumberAlloowed] = useState(false);
  const [isSpecialCharAllowed, setSpecialCharAlloowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumberAllowed) {
      str += "1234567890"
    }

    if (isSpecialCharAllowed) {
      str += "!@#$%^&*(){}[]"
    }

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass);
  }, [length, isNumberAllowed, isSpecialCharAllowed, setPassword]);

  // effect hook
  useEffect(() => {
    passwordGenerator()
  },
    [length, isNumberAllowed, isSpecialCharAllowed, passwordGenerator]
  )

  // ref hook
  const passwordRef = useRef(null)

  const copyPasswotdToClipboard = useCallback(
    () => { 
      passwordRef.current?.select()
      passwordRef.current?.setSelectionRange(0, 10)
      window.navigator.clipboard.writeText(password)
     },
    [password]
  )


  return (
    <>
      <div className="w-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-10 my-8 text-orange-400 bg-gray-700">
        <h1 className="text-4xl text-center text-white"> Password Generator</h1>
        <br />
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" className="outline-none w-full py-2 px-4" placeholder="Password" value={password} ref={passwordRef} readOnly />
          <button className="outline-none bg-blue-700 text-white px-2 py-1 shrink-0" onClick={copyPasswotdToClipboard}>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={8} max={100} value={length} className="cursor-pointer" onChange={(e) => { setLength(e.target.value) }} />
            <label> Length: {length} </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={isNumberAllowed} id="includeNumber" onChange={() => setNumberAlloowed((val) => !val)} />
            <labe> Include Number </labe>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={isSpecialCharAllowed} id="includeSpecialChar" onChange={() => setSpecialCharAlloowed((val) => !val)} />
            <labe> Include Special Character </labe>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
