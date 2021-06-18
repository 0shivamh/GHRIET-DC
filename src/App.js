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
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AllProject from "./backend/AllProjects.backend";
import events from "./backend/events.bakend";
import Push from "./backend/push.bakend";
import Admin from "./backend/Admin.backend";
import ReactPageScroller from 'react-page-scroller';

function App() {


  return (
    <div className="App">

      <Push/>

      <Nav/> 
      <Router>
        <Switch>

        <Route path="/" exact component={Home}/>
        <Route path="/projects" component={AllProject} />
        <Route path="/community" component={Community} />
        <Route path="/events" component={events} />
        <Route path="/adminpanel" component={Admin} />
 
        </Switch>
        
     </Router>

      {/* footer part */}
      <Rocket/> 
      <Footer/>
    </div>
  );
}

const Home=() =>(
 
  <div>
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
  </div>
)
export default App;
