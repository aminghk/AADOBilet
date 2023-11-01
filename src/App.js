import "./App.css";
import HeaderView from "./components/Header/HeaderView";
import React from 'react';
import SliderComp from './components/slidercomp/SliderComp';



function App() {
  return (
    <div className="App">
      <HeaderView />;
      <SliderComp />
    </div>
  );
}

export default App;
