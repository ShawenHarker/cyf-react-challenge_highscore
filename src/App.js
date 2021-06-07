import React from "react";
import allCountryScores from "./Scores";
import PlayerRatings from "./PlayerRatings";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>High Score Pre Country</h1>
      <PlayerRatings results={allCountryScores}/>
    </div>
  );
};

export default App;