import TopProjects from "../Components/projects.component";
import { useState } from "react";   
import firebase from "../firebase/base"
import { data } from "jquery";
const AllProject =() =>{

    const db = firebase.firestore()
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const [email,setEmail]=useState("");
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [name,setName] = useState("")


    var ref = db.collection("Projects");


    const AddProject=(e)=>{

        e.preventDefault();
    
        db.collection("Projects")
          .add({
            name: name,
            email: email,
            title: title,
            desc: desc,
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
    
        setName("");
        setEmail("");
        setTitle("")
        setDesc("");  
    }

   return(
       <>
       <h1>test</h1>

        <h1>working</h1>
        

        <div className="modal fade" id="AllPROJECT" tabIndex="-1" aria-labelledby="AllPROJECTLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl ">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="AllPROJECTLabel">Made with <i className="fa fa-heart red" aria-hidden="true"></i> by Dev-Fellows</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                    <div className="row">

                        <div className="col-sm" visible="false">
                            <div className="card proCard">
                                <div className="card-body">
                                    <h5 className="card-title">{title} </h5>
                                    <p className="card-text"> {desc} </p>
                                    <a href="#" className="btn btn-primary"> </a>
                                </div>
                            </div>
                        </div>



                    </div>  

                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#PROJECTS" >Add Project</button>
                    </div>
                </div>
                </div>
            </div>












            {/* Add Operation */}
            <div className="modal fade " id="PROJECTS" tabIndex="-1"  aria-hidden="true">
        <div className="modal-dialog PROJECTSForm  modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">PROJECTS Us</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form onSubmit={AddProject}>
            {message && <div className="alert alert-success" role="alert">
                {message}
            </div>}
            {error && <div className="alert alert-danger" role="alert">
                {error}
            </div>}

                        <div className="mb-3">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control form-control1" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e)=> setEmail(e.target.value)} required />
                            <label htmlFor="floatingInput">Email</label>
                            </div>
                        </div>
                        <div className="mb-3">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control form-control1" id="floatingInput" placeholder="Shivam" value={title} onChange={(e)=> setTitle(e.target.value)}  required/>
                            <label htmlFor="floatingInput">Title</label>
                            </div>
                        </div>
                        <div className="mb-3">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control form-control1" id="floatingInput" placeholder="name@example.com" value={desc} onChange={(e)=> setDesc(e.target.value)} required />
                            <label htmlFor="floatingInput">Description</label>
                            </div>
                        </div>
                        <div className="mb-3">
                        <div className="form-floating">
                            <textarea className="form-control form-control1 " placeholder="Leave a your query here" id="floatingTextarea2" value={name} onChange={(e)=> setName(e.target.value)}  required></textarea>
                            <label htmlFor="floatingTextarea2">Name</label>
                            </div>
                        </div>
                        <button type="submit" className="cbtn1 btn shadow rounded">Submit</button>
                    </form>
            </div>
            </div>
        </div>
        </div>
       </>
   )

}
export default AllProject;