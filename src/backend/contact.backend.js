import { useState } from "react";
import firebase from "../firebase/base";
const Contact=()=>{

    const db = firebase.firestore()
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [query,setquery]=useState("");
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")

    const handleContact=(e)=>{
        e.preventDefault();
    
        db.collection("devfellowcon")
          .add({
            name: name,
            email: email,
            query: query,
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
    
        setname("");
        setemail("");
        setquery("");

        

      };

    return(
        <div>

        <div className="modal fade " id="contact" tabIndex="-1"  aria-hidden="true">
        <div className="modal-dialog ContactForm  modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Contact Us</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form onSubmit={handleContact}>
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
                        <div className="form-floating">
                            <textarea className="form-control form-control1 " placeholder="Leave a your query here" id="floatingTextarea2" value={query} onChange={(e)=> setquery(e.target.value)}  required></textarea>
                            <label htmlFor="floatingTextarea2">Query</label>
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
export default Contact;