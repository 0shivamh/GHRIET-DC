import { useEffect, useState } from "react";
import mainicon from "../img/dev.gif";
import Aos  from 'aos';
import 'aos/dist/aos.css';
import firebase from "../firebase/base"
const Header=()=> {
      useEffect(()=>{
        Aos.init({duration:1000});
      },[]);

      const db = firebase.firestore()
      const [email,setemail]=useState("");
      const [error, setError] = useState("")
      const [message, setMessage] = useState("")

      const handleNotification=(e)=>{
        e.preventDefault();
        db.collection("Notification")
          .add({
            email: email,
          })
          .then(() => {
            setMessage("Message sent");
            setTimeout(function(){ 
                setMessage('');
             }, 2000);
          })
          .catch((error) => {
              setError("Try again");
              setTimeout(function(){ 
                setError('');
             }, 2000);
          });
    
        setemail("");
      };

        return(
            <>
      <div className="mainarea" >
      <div className="row gx-5 ">
        <div className="col">
          <img src={mainicon} className="img-fluid vert-move"  alt="GHRIET-DC" />
          <div className="container px-4">
            <div className="row gx-5">
              <div className="col">
                <form className="input-group input-group-lg" onSubmit={handleNotification}>

                {message && 
                <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                  <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body">
                  {message}
                </div>
              </div>
                }
                {error && 
                <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                  <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body">
                  {error}
                </div>
              </div>
                
                }   

                  <input type="text" className="form-control cform" placeholder="Join us" aria-label="Recipient's username" aria-describedby="button-addon2"  value={email} onChange={(e)=> setemail(e.target.value)} required/>
                  <button  className="btn btn-outline-secondary cbtn" type="submit" id="button-addon2"><i className="fa fa-paper-plane" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <p className="display-6">Skill is only developed by hours and <b className="green">hours</b> of work</p>
        </div>
      </div>
    </div> 
            </>
        )
  
}
export default Header;