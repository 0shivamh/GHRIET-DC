import { useEffect, useState } from "react";
import mainicon from "../img/dev.gif";
import Aos  from 'aos';
import 'aos/dist/aos.css';
import firebase from "../firebase/base";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header=()=> {
      useEffect(()=>{
        Aos.init({duration:1000});
      },[]);


      const db = firebase.firestore()
      const [email,setemail]=useState("");

      const handleNotification=(e)=>{
        e.preventDefault();
        db.collection("Notification")
          .add({
            email: email,
          })
          .then(() => {
            toast.info('Now you will recieve emails!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
          })
          .catch((err) => {
            toast.error('Failed, Try Again', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
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
 
                <ToastContainer />
                  <input type="email" className="cform form-control " placeholder="Join us" aria-describedby="button-addon2"  value={email} onChange={(e)=> setemail(e.target.value)} required/>
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


    <div className="toast" id="notification" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                  <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body">
                  Hi
                </div>
              </div>
            </>
        )
  
}
export default Header;