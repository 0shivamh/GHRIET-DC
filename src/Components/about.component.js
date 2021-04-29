import img from '../img/open.gif';
import 'aos/dist/aos.css';
const About=()=>{

    return(
        <>
        <div id="about" className="container">

        <p className="display-5">Who we are</p>
            <div className="row" >
                <div data-aos="fade-right" className="col-sm">
                    <img className="img-fluid" src={img}/>
                </div>
                <div data-aos="fade-left" className="col-sm about">
                    <p className='p2'>The rapid development in the computer field in areas like networking, multimedia, and the internet GH Raisoni College of Engineering and Technology is the Best IT Engineering College in Pune which gives vast job opportunities in the computer and IT sector. The Information Technology sector is also witnessing the fastest growth and rapid change. In the field of BTech IT Engineering, new software and techniques come out every month and professionals have to keep pace with the rapid advancements. Introduction with the advent of PC, the information technology industry has undergone a quantum change. The software revolution has changed the way of living. Today, probably no sector is untouched by Information Technology</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default About;