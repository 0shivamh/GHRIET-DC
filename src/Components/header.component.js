import { Component } from "react";
import mainicon from "../img/dev.png"
export default class Header extends Component{
    render(){
        return(
            <>
             <div className="mainarea" >
      <div className="row gx-5 ">
        <div className="col">
          <img src={mainicon} className="img-fluid vert-move"  alt="GHRIET-DC" />
          <div className="container px-4">
            <div className="row gx-5">
              <div className="col">
                <div className="input-group input-group-lg">
                  <input type="text" className="form-control cform" placeholder="Your Email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                  <a href="#" className="btn btn-outline-secondary cbtn" type="button" id="button-addon2"><i className="fa fa-paper-plane" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p className="display-6">Skill is only developed by hours and <b>hours</b> of work</p>
          
        </div>
      </div>
    </div> 
            </>
        )
    }
}