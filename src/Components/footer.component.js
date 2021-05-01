import 'aos/dist/aos.css';
import icon from "../img/open.png"

const Footer=()=>{

    return(
        <>
            <footer>
            <div className="container">
            <div className="footersoc">
                  <p> Follow us</p> 
                   <a aria-hidden='true' className='fa fa-envelope' href='/' id='devso' target='_blank' rel="noreferrer"></a>
                    <a aria-hidden='true' className='fa fa-instagram' href='/' id='devso' target="_blank" rel="noreferrer"></a>
                    <a aria-hidden='true' className='fa fa-twitter' href='' id='devso' target='_blank' rel="noreferrer"></a>
                    <a aria-hidden='true' className='fa fa-linkedin' href='/' id='devso' target='_blank' rel="noreferrer"></a>
                    <a aria-hidden='true' className='fa fa-github' href='/' id='devso' target='_blank' rel="noreferrer"></a>
                    <a aria-hidden='true' className='fa fa-youtube-play' href='#' id='devso' target='_blank' rel="noreferrer"></a></div>
                   <hr></hr>
                   

                   <p className="footertext display-5">We love to code</p>

                   <div className="footerpage">
                       <a href="" id="link">community</a>
                       <a href="" id="link">Jobs</a>
                       <a href="" id="link">Home</a>
                       <a href="" id="link">Help</a>
                       <a href="#contact" data-bs-toggle="modal" data-bs-target="#contact" id="link">Contact</a>

                    </div>

                <hr></hr>
                <p className="white ">Copyright @ 2021 |
                        <img src={icon} className="img-fluid vert-move" alt="dev-fellow" width="30" height="24" className="d-inline-block align-text-top"/>
                        Dev-Fellow
                    </p>
                
                </div>
            </footer>
        </>
    )
}
export default Footer;