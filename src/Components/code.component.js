import code from "../img/code.gif";
import 'aos/dist/aos.css';
const Code = ()=>{
    return(
        <div className="container code">
            <div className="row g-2">
                <div data-aos="zoom-in-up" className="col d-flex align-items-center justify-content-center">
                    <img src={code} className="img-fluid"></img>
                </div>
                <div className="col-sm codecol ">
                    <p data-aos="flip-left" className="display-5">“Everybody should learn to program a computer, because it teaches you how to think.”</p><p>- Steve Jobs</p>
            </div>
        </div>
        </div>
    )

}
export default Code;