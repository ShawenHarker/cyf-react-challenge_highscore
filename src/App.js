import React from "react";
import Header from "./Header";
import allCountryScores from "./Scores";
import DisplayPlayerScore from "./DisplayScoreTable";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="OuterBorder">
        <h1>High Scores Pre Country</h1>
        <div className="container">
          <Header results={allCountryScores}/>
          <DisplayPlayerScore results={allCountryScores}/>
        </div> 
      </div>  
    </div>
  );
};

export default App;
