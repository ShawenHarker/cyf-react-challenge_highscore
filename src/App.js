import React from "react";
import allCountryScores from "./Scores";
import ListCountryNames from "./ListCountryName";
import ToggleScore from "./ListCountryName";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>High Score Pre Country</h1>
      <button className="btn" onClick={ToggleScore}>Toggle Button</button>
      <ListCountryNames results={allCountryScores}/>
    </div>
  );
};

export default App;