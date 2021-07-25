import Push from './push.bakend';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import firebase from '../firebase/base';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import "./admin.css"
import AddBanner from '../backend/AddBanner.admin';
const Admin=()=>{

    const database = firebase.database()

    const [name , setName] = useState();
    const [age , setAge] = useState();
        
    // const [name,setname]=useState("");

    const pushToast=()=>{
        toast('🦄 Wow so easy!', {
            position: "top-center",
            autoClose: false,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });

             
      }

      const Push = () => {
        database.ref("user").set({
          name : name,
          age : age,
        }).catch(alert);
      }

      var childData;

      const Get = ()=>{
        var leadsRef = database.ref('user');
        leadsRef.on('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
            childData = childSnapshot.val();
            // alert(childData);

            toast('🦄 Wow so easy!'+ childData, {
                position: "top-center",
                autoClose: false,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            });
        });

        
      }
      
    return(
        <>


    <Router>
        <Switch>
          <Route path="/adminpanel" exact component={AdminCom} />
          <Route path="/adminpanel/addBanner" component={AddBanner} />




 
        </Switch>
        
     </Router>


        <button onClick={pushToast} >
            Click to push
        </button>
        <button onClick={Get} >
            Click to View
        </button>

        <ToastContainer />



        <div className="App" style={{marginTop : 50}}>
        <center>
        <input placeholder="Enter your name" value={name} 
        onChange={(e) => setName(e.target.value)}/>
        <br/><br/>
        <input placeholder="Enter your age" value={age} 
        onChange={(e) => setAge(e.target.value)}/>
        <br/><br/> 
        <button onClick={Push}>PUSH</button>
        </center>
        </div>
                            
        </>
    )

}
const AdminCom=()=>{
  return(
    <>
      <div className="container px-2 ">
        <div className="row gx-3 ">
          <div className="col dash">
          <a href=""><div className="p-3 border1 ">Add Project</div></a>
          </div>
          <div className="col dash">
            <a href=""><div className="p-3 border1">Add Team Member</div></a>
          </div>
        </div>

        <div className="row gx-3 ">
            <div className="col dash">
            <a href="/adminpanel/addBanner"><div className="p-3 border1 ">Add Banner</div></a>
            </div>
            <div className="col dash">
              <a href=""><div className="p-3 border1">Add Event</div></a>
            </div>
          </div>
      </div>
    </>
  )
}

export default Admin;