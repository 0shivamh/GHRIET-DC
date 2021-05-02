import React from "react";
import Nav from "./Components/nav.component";
import Footer from "./Components/footer.component";
import AllProject from "./backend/AllProjects.backend";

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

          {/* <Link to="/">Home</Link> */}
          <Home/>
          <Link to="/AllProjects" >Project</Link>
          <Route exact path="/Home" component={Home}/>
          <Route  path="/AllProjects" component={AllProject}/>
     
      </Router>
      <Footer/>


    </div>
  );
}

export default App;
