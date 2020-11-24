import React from "react";
import './App.css';
import Header from "./header"
import TinderCards from "./TinderCards";
function App() {
  return (
    <div className="App">

      {/* Header */}
      <Header  />

      {/* tinder card */}
      <TinderCards />

      {/* SwipeButton */}
    </div>
  );
}

export default App;
