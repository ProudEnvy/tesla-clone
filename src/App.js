import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 600,
  speedAsDuration: true,
});

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
