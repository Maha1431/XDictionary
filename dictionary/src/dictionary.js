import React, { useState } from "react";
import "./styel.css";

function Dictionary() {
  const initialDictionary = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];
  const [dictionary, setDictionary] = useState(initialDictionary);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const foundWord = dictionary.find(entry => entry.word.toLowerCase() === search.toLowerCase());

    if (foundWord) {
      setResult(foundWord.meaning);
    } else {
      setResult('Word not found in the dictionary.');
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
       
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder=" Search for a word:" />
      <button onClick={handleSearch}>Search</button>
      <p className="def">Definition:</p>
      {result && (
        <div>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}
export default Dictionary;
