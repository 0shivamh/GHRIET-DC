import React from "react";
import Nav from "./Components/nav.component";
import Header from './Components/header.component';
import Terminal from "./Components/terminal.component";
import About from "./Components/about.component";
import Slider from "./Components/slider.component";
import Location from "./Components/location.component";
import Footer from "./Components/footer.component";
import Projects from "./Components/projects.component";
import Event from "./Components/event.component";
import Code from "./Components/code.component";

function App() {
  return (
    <div className="App">
      
      <Nav/>
      <Header/>
      <Terminal/>
      <Event/>
      <Code/>
      <About/>
      {/* <Projects/> */}
      <Location/> 
      <Footer/>
    </div>
  );
}

export default App;
