import { useEffect } from "react";
import Aos  from 'aos';
import 'aos/dist/aos.css';
import Typical from 'react-typical'



const Terminal=()=>  {

        useEffect(()=>{
            Aos.init({duration:1000});
        },[]);

    
        

        return(
            <>
            <div className="card terminal align-middle shadow-lg p-3 mb-5 bg-body rounded "  data-aos="zoom-in">
                <div className="card-header ">
                <i className="fa fa-circle red" aria-hidden="true"></i>
                <i className="fa fa-circle yellow" aria-hidden="true"></i>
                <i className="fa fa-circle green" aria-hidden="true"></i>
                </div>
                <div className="card-body terminal-body">
                    <p><b>Dev-Fellow@DC :</b></p>
                    <Typical
                        steps={['Hello there', 1000, 'We empowering the open-source community.', 800]}
                        wrapper="p"
                    />
                    <p id="typewriter"></p> 
                </div>
            </div>

            
            </>
        )

        
    
}
export default Terminal;