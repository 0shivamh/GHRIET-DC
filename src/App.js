import React from "react";
import Nav from "./Components/nav.component";
import Header from './Components/header.component';
import Terminal from "./Components/terminal.component";
import About from "./Components/about.component";
// import Slider from "./Components/slider.component";
import Location from "./Components/location.component";
import Footer from "./Components/footer.component";
import Projects from "./Components/projects.component";
import Event from "./Components/event.component";
import Code from "./Components/code.component";
import Tnp from "./Components/tnp.component";
import Rocket from "./Components/rocket.component";
import AllProject from "./backend/AllProjects.backend";
import Contact from "./backend/contact.backend";
// import firebase from "./firebase/base"
function App() {

  // React.useEffect(()=>{
  //   const msg=firebase.messaging();
  //   msg.requestPermission().then(()=>{
  //     return msg.getToken();
  //   }).then((data)=>{
  //     console.warn("token",data)
  //   })
  // })
  return (
    <div className="App">
      
      <Nav/>
      <Header/>
      <Terminal/>
      <Event/>
      <Code/>
      <Projects/>
      {/* <AllProject/> */}
      <Tnp/>
      <About/>
      <Contact/>
      <Location/>
      <Rocket/> 
      <Footer/>
    </div>
  );
}

export default App;
