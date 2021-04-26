import 'aos/dist/aos.css';
import icon from "../img/open.png"

const Footer=()=>{

    return(
        <>
            <footer>
            <div className="container">
            <div className="footersoc">
                  <p> Follow us</p> 
                   <a aria-hidden='true' className='fa fa-envelope' href='mailto:' id='devso' target='_blank'></a>
                    <a aria-hidden='true' className='fa fa-instagram' href='/' id='devso'></a>
                    <a aria-hidden='true' className='fa fa-twitter' href='' id='devso' target='_blank'></a>
                    <a aria-hidden='true' className='fa fa-linkedin' href='/' id='devso' target='_blank'></a>
                    <a aria-hidden='true' className='fa fa-github' href='' id='devso' target='_blank'></a>
                    <a aria-hidden='true' className='fa fa-youtube-play' href='#' id='devso' target='_blank'></a></div>
                   <hr></hr>
                   

                   <p className="col1 display-5">We love to code</p>

                   <div class="footerpage">
                       <a href="" id="link">community</a>
                       <a href="" id="link">Jobs</a>
                       <a href="" id="link">Home</a>
                       <a href="" id="link">Help</a>
                       <a href="" id="link">Contact</a>

                    </div>

                <hr></hr>
                <p className="white ">Copyright @ 2021 |
                        <img src={icon} className="img-fluid vert-move" alt="dev-fellow" width="30" height="24" class="d-inline-block align-text-top"/>
                        Dev-Felllow
                    </p>
                
                </div>
            </footer>
        </>
    )
}
export default Footer;