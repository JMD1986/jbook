import React from "react";
import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const onClick = () => {
    console.log(input);
  };

  return (
    <div className="App">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        title="codebox"
      ></textarea>
      <div>
        <button onClick={onClick}>submit</button>
        <pre>{code}</pre>
      </div>
    </div>
  );
}

export default App;
