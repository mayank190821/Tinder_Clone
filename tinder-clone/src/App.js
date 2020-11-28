import React from "react";
import './App.css';
import Header from "./header"
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons"
import  {BrowserRouter, Route,Link,NavLink, Switch} from 'react-router-dom';
function App() {
  return (
    // <BrowserRouter>
    <div className="App">

      {/* Header */}
      <Header  />

      {/* tinder card */}
      {/* <Switch>
        <Route path="/chat" component={chat}/>
      </Switch> */}
      <TinderCards />

      {/* SwipeButton */}
      <SwipeButtons />
    </div>
    // </BrowserRouter>
  );
}

export default App;
