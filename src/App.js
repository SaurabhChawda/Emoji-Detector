import React, { useState } from "react";
import "./styles.css";

var emojiLib = {
  "๐ค": "White Heart",
  "๐": "Growing Heart",
  "๐": "Beating Heart",
  "๐": "Green Heart",
  "๐": "Broken Heart",
  "๐": "Yellow Heart",
  "๐": "Heart with Ribbon",
  "๐งก": "Orange Heart",
  "๐": "Blue Heart",
  "๐ค": "Black Heart"
};
var emojilist = Object.keys(emojiLib);

export default function App() {
  var [A, setA] = useState("");

  function emojibyinput(event) {
    var userInput = event.target.value;
    var A = emojiLib[userInput];

    if (A === undefined) {
      A = "Please Choose Valid Emoji";
    }
    setA(A);
  }

  function emojibyclick(emoji) {
    var A = emojiLib[emoji];
    setA(A);
  }

  return (
    <div className="App">
      <h2>Emoji Detector!!</h2>
      <input onChange={emojibyinput}></input>
      <h2> {A}</h2>
      <h3>"Click on Emoji"</h3>
      {emojilist.map(function (emoji) {
        return (
          <span
            onClick={() => emojibyclick(emoji)}
            style={{ padding: "1rem", cursor: "move" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
