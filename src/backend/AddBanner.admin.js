import "./admin.css"
import { useState } from "react";
import firebase from "../firebase/base"
import { ToastContainer, toast } from 'react-toastify';
import 'firebase/storage';



const AddBanner = ()=>{


    


    const storage = firebase.storage()

    let database = firebase.database();
     

    let [b_url,setb_url]=useState("");
    let [state_val,setVal]=useState("");
    let [img_url,setImg]=useState("");



    const [image , setImage] = useState('');
    const upload = ()=>{
    if(image == null)
        return;
    storage.ref(`/Banners/${image.name}`).put(image)
    .on("state_changed" , alert("success") , alert);
    
        // complete function ...
        storage
        .ref("Banners")
        .child(image.name)
        .getDownloadURL()
        .then(url => {
            console.log(url);
            img_url=url;
            setImg(url);
        });
}
   
    var issue;

    const BannerAdd=()=>{
        
        database.ref("Banner").set({
            url:b_url,
            State_img:state_val,
            Img_URL: img_url,
          }).catch(alert);

        //   BannerReady() 

          var leadsRef = database.ref('Banner/');
          leadsRef.on('value', function(snapshot) {
            snapshot.forEach(snap => {
                 issue = snap.val();

          console.log(snap.val())

              });
            
              console.log(issue)

             
          });
    }

    

  
    return(
        <> 
       
        
        <div className="container px-4">
            <div className="row gx-5">
                <div className="col-sm">
                    <p>Add Banner Details</p>
                    <div className="mb-3">
                    <select className="form-select form-control1" aria-label="Default select example" value={state_val} onChange={(e)=> setVal(e.target.value)}>
                        <option defaultValue>Open this select Visible state</option>
                        <option value="True">True</option>
                        <option value="False">False</option>
                    </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="B_file" className="form-label">Choose Image</label>
                        <input className="form-control form-control1" type="file" 
                        accept=".png, .jpg, .jpeg"  onChange={(e)=>{setImage(e.target.files[0])}}/>
                        <button className="btn borderbtn" onClick={upload}>Upload</button>
                    </div>

                    <div className="form-floating mb-3">
                            <input type="text" className="form-control form-control1" id="BannerURL" placeholder="URL" value={b_url} onChange={(e)=> setb_url(e.target.value)} required/>
                            <label htmlFor="BannerURL">OnClick URl</label>
                    </div>




                 <button className="btn borderbtn" onClick={BannerAdd} >Update</button>
                </div>


                <div className="col-sm">
                    <p>It looks like:</p>
                    <a href={b_url} target="_blank">
                    <div className="card banner">
                        <img src={img_url}  className="card-img-top" alt="Banner goes here.."/>
                    </div>
                    </a>

                    <ToastContainer >
                    
                    </ToastContainer>

                   

                </div>
            </div>
        </div>

        </>
    )

}

export default AddBanner;