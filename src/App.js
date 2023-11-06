import "./App.css";
import HeaderView from "./components/Header/HeaderView";
import React from 'react';
import SliderComp from './components/slidercomp/SliderComp';
import TimelineComp from "./components/TimelineComp/TimelineComp";



function App() {
  return (
    <div className="App">
      <HeaderView />;
      <SliderComp />;
      <TimelineComp />
    </div>
  );
}

export default App;
