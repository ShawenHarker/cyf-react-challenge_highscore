import React from "react";
import allCountryScores from "./Scores";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>High Score Pre Country</h1>
      <ul>
        {allCountryScores.map( (element, index) => {
          return (
            <li className="list-item" key={index}>
              <h2>HI SCORES: {element.name}</h2>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default App;
