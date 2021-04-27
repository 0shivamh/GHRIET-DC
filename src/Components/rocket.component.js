import Aos  from 'aos';
import rock from "../img/rocket.gif"
 const Rocket=()=>{

    return(
        <div className="conatiner d-flex justify-content-center">
            <img data-aos="fade-up-right" src={rock} className="rocket img-fluid "/>
        </div>
    )
 }
 export default Rocket;