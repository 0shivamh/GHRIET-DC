import React, { useEffect } from 'react'
import icon from "../img/open.png";
const Nav=()=> {

    const navlink=()=>{
        setTimeout(function(){
           document.getElementById("nbtn").click();
       }, 1000);
    }
    
        return(

            <div>
               <nav className="navbar fixed-top navbar-expand-lg navbar-light shadow-lg p-3 mb-5 bg-body rounded">
                    <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={icon} className="img-fluid vert-move" alt="dev-fellow" width="30" height="24" className="d-inline-block align-text-top"/>
                        Dev-Fellow
                    </a>
                        <button className="navbar-toggler" id="nbtn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#about" onClick={navlink}>About</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#" onClick={navlink}>Team</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#pro" onClick={navlink}>Projects</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#event" onClick={navlink}>Events</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#contact" data-bs-toggle="modal" data-bs-target="#contact" onClick={navlink}>Contact</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </nav>                    
            </div>
        )

        
}
export default Nav;