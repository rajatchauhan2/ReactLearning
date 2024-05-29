import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(9);
  const [numberallowed, setNumberallowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberallowed) {
      str += "1234567890";
      if (charAllowed) {
        str += "!@#$%^&*()*+,-./{}[]{}()*+,-./";
        for (let i = 1; i <= length; i++) {
          let char = math.floor(math.random() * str.length + 1);
          pass += str.charAt(char);
        }
        setPassword(pass);
      }
    }
  }, [length, numberallowed, charAllowed, setPassword]);


  useEffect(() => {
    passwordGenerator()
  }, [length, numberallowed, charAllowed, passwordGenerator])
  return (
    
    <>
      <h1 className="text-4xl text-center text-white"> Password Generator</h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-5 py-4 my-8 text-orange-500 bg-gray-700">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
        />
        <button className="outline-none bg-blue-700 px-3 py-0.5 shrink-0 text-white">
          Copy
        </button>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              name=""
              id=""
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name=""
              id="numberInput"
              defaultChecked={numberallowed}
              onChange={() => {
                setNumberallowed((prev) => !prev);
              }}
            />
            <label htmlFor="">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name=""
              id="charactersInput"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charactersInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
