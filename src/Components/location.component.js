import loc from '../img/path.png';
import { Parallax } from 'react-parallax';
import Typical from 'react-typical'
import { motion } from "framer-motion"


const Location=()=>{



    return(
        <>
        <div className="location">
        <Parallax blur={5} bgImage={loc} bgImageAlt="the location" strength={200}>

        <div className="under ">
            <p className="display-5 yellow">Where to find us?</p>
        
                <Typical
                id='para' className="display-6 white"
                        steps={['You still here,  click on the below button to join (Raisoni ID only).', 800]}
                        wrapper="p"
                    />
            
            
            <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}  className="joinbtn btn cbtn white " data-bs-toggle="modal" data-bs-target="#JoinUs" ><i className="fa fa-mouse-pointer" aria-hidden="true"></i>
            Join us</motion.button>
        </div>

        </Parallax>
        </div>
        </>
    )
}
export default Location;