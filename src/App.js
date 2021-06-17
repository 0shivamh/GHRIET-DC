import React from "react";
import Nav from "./Components/nav.component";
import Location from "./Components/location.component";
import Footer from "./Components/footer.component";
import About from "./Components/about.component";
import Header from './Components/header.component';
import Terminal from "./Components/terminal.component";
import Projects from "./Components/projects.component";
import Event from "./Components/event.component";
import Code from "./Components/code.component";
import Tnp from "./Components/tnp.component";
import Rocket from "./Components/rocket.component";
import Contact from "./backend/contact.backend";
import Join from "./backend/Join.backend";
import Community from "./backend/community.backend";

function App() {


  return (
    <div className="App">
      
      <Nav/> 
      <Header/>
      <Terminal/>
      <Event/>
      <Code/>
      <Projects/>
      <Tnp/>
          <About/>
          <Contact/>
          <Join/>
          <Location/>
          <Rocket/> 
          <Community/>    
      <Footer/>
    </div>
  );
}

export default App;
