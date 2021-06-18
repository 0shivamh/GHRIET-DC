import Push from './push.bakend';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import firebase from '../firebase/base';
const Admin=()=>{

    let database = firebase.database()

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
        <button onClick={pushToast} >
            Click to push
        </button>
        <button onClick={Get} >
            Click to View
        </button>

        {/* <div className="form-floating mb-3">
                            <input type="text" className="form-control form-control1" id="floatingInput" placeholder="Shivam" value={name} onChange={(e)=> setname(e.target.value)}  required/>
                            <label htmlFor="floatingInput">Name</label>
        </div>
        <div className="form-floating mb-3">
                            <input type="text" className="form-control form-control1" id="floatingInput" placeholder="Shivam" value={name} onChange={(e)=> setname(e.target.value)}  required/>
                            <label htmlFor="floatingInput">Name</label>
        </div> */}


        {/* imp */}
        <ToastContainer />



        <div className="App" style={{marginTop : 250}}>
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

export default Admin;