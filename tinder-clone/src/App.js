import React from "react";
import './App.css';
import Header from "./header"
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons"

function App() {
  return (
    <div className="App">

      {/* Header */}
      <Header  />

      {/* tinder card */}
      <TinderCards />

      {/* SwipeButton */}
      <SwipeButtons />
    </div>
  );
}

export default App;
