import React from "react";
import Nav from "./Components/nav.component";
import Location from "./Components/location.component";
import Footer from "./Components/footer.component";
import About from "./Components/about.component";
import AllProject from "./backend/AllProjects.backend";
import Tnp from "./Components/tnp.component";
import Rocket from "./Components/rocket.component";
import Contact from "./backend/contact.backend";
import Join from "./backend/Join.backend";
import Community from "./backend/community.backend";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./Home";
function App() {


  return (
    <div className="App">
      
      <Nav/> 
      <Router>
          <Route exact path="/" component={Home}/>
          <Route  path="/AllProjects" component={AllProject}/>
          <Link to="/AllProjects"><p className="display-6">View all</p></Link>
          <Tnp/>
          <About/>
          <Contact/>
          <Join/>
          <Location/>
          <Rocket/> 
          <Community/>
      </Router>
      <Footer/>


    </div>
  );
}

export default App;
