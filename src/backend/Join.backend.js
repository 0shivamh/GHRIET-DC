import { useState } from "react";
import firebase from "../firebase/base";
const Join=()=>{

    const db = firebase.firestore()
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [Class,setClass]=useState("");
    const [College,setCollege]=useState("");
    const [Url,setUrl]=useState("");
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")

    const handleJoin=(e)=>{
        e.preventDefault();
        if(email.includes('raisoni.net')){
        db.collection("JoinUsRequest")
          .add({
            name: name,
            email: email,
            Class: Class,
            College: College,
            Url:Url,
          })
          .then(() => {
            setMessage("Project Submitted succesfully, We'll get Back to you soon");
            setTimeout(function(){ 
                setMessage('');
             }, 4000);
          })
          .catch((error) => {
              setError("Try to submit it again");
              setTimeout(function(){ 
                setError('');
             }, 3000);
          });


        setname("");
        setemail("");
        setClass("");
        setCollege("");
        setUrl("");
        }
        else{
            setError("Use Raisoni mail id");
            setTimeout(function(){ 
                setError('');
             }, 3000);
            setemail("");
        }
    
        
      };

    return(
        <div>

        <div className="modal fade " id="JoinUs" tabIndex="-1"  aria-hidden="true">
        <div className="modal-dialog ContactForm  modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Submit Your Project <i className="fa fa-info-circle" aria-hidden="true" title="
                You need to upload your project on Github, 
                Note: Join Using Raisoni ID Only
                "></i></h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form onSubmit={handleJoin}>
            {message && <div class="alert alert-success" role="alert">
                {message}
            </div>}
            {error && <div class="alert alert-danger" role="alert">
                {error}
            </div>}
                        <div className="mb-3">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control form-control1" id="floatingInput" placeholder="Shivam" value={name} onChange={(e)=> setname(e.target.value)}  required/>
                            <label htmlFor="floatingInput">Name</label>
                            </div>
                        </div>
                        <div className="mb-3">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control form-control1" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e)=> setemail(e.target.value)} required />
                            <label htmlFor="floatingInput">Email address</label>
                            </div>
                        </div>
                        <div className="mb-3">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control form-control1" id="floatingInput"  placeholder="GHRIET PUNE" value={College} onChange={(e)=> setCollege(e.target.value)} required />
                            <label htmlFor="floatingInput">College Name</label>
                            </div>
                        </div>
                        <div className="mb-3">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control form-control1" id="floatingInput"  placeholder="FE IT" value={Class} onChange={(e)=> setClass(e.target.value)} required />
                            <label htmlFor="floatingInput">Class</label>
                            </div>
                        </div>
                        <div className="mb-3">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control form-control1" id="floatingInput"  placeholder="https://github.com/project01" value={Url} onChange={(e)=> setUrl(e.target.value)} required />
                            <label htmlFor="floatingInput">Project Url</label>
                            </div>
                        </div>
                        <button type="submit" className="cbtn1 btn shadow rounded">Submit</button>
                    </form>
            </div>
            </div>
        </div>
        </div>
              
        </div>
    )

}
export default Join;