import firebase from "../firebase/base";

const push=()=>{

    const messaging = firebase.messaging();
    messaging.requestPermission().then(()=>{
        return messaging.getToken()
      }).then(token=>{
        console.log('Token : ',token)
      }).catch((err)=>{
        console.log(err);
        
      })

    
    
    return(
        <>
            


        </>
    );

}
export default push;