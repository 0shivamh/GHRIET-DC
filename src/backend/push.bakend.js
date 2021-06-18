import firebase from "../firebase/base";
import { ToastContainer, toast } from 'react-toastify';

const push=()=>{

  

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

    const messaging = firebase.messaging();
    messaging.requestPermission().then(()=>{
        return messaging.getToken()
      }).then(token=>{
        // console.log('Token : ',token)
      }).catch((err)=>{
        // console.log(err);
        
      })


      
    
    
    return(
        <>
           


        </>
    );

}
export default push;