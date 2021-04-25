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
import Studword from "./Components/studentWords"
function App() {
  return (
    <div className="App">
      
      <Nav/>
      <Header/>
      <Terminal/>
{/* 
      <Competiton bg={codefest} name="codefest" link="#" about=" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "/> */}


      <Event/>
      <Code/>
      <About/>
      {/* <Projects/> */}
      <Location/> 
      <Studword/>
      <Footer/>

    </div>
  );
}

export default App;
