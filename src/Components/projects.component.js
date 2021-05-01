import 'aos/dist/aos.css';
import p1 from "../img/project/ai.png";
import p2 from "../img/project/drone.png"
import p3 from "../img/project/app.png"
const Projects=()=>{
    return(
        <div id="pro" className='project' >  
        <div >
            <p data-aos="fade-down" className="display-5">Top-Project</p>
            <div  id="projects" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <div className="row g-2">
                        <div className="col  d-flex align-items-center justify-content-center">
                            <img src={p1} className=" img-fluid" alt="..."/>
                        </div>
                        <div className="col-sm my-auto">
                        <div className="card pcard">
                            <div className="card-body">
                                <h5 className="display-6">AI ChatBot</h5>
                                <p className="card-text">Chatbot using reactjs based on AI technology, where you ask questions like What is Sin(1),etc.</p>
                                <a href="#" className="btn btn-primary">View</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="carousel-item">
                    <div className="row g-2">
                        <div className="col  d-flex align-items-center justify-content-center">
                            <img src={p2} className=" img-fluid" alt="..."/>
                        </div>
                        <div className="col-sm my-auto">
                        <div className="card pcard">
                            <div className="card-body">
                                <h5 className="display-6">Drone</h5>
                                <p className="card-text">A IOT based project,Drones are small remotely controlled aerial vehicles, i.e., they are unmanned aerial vehicles. They look like helicopters or reconnaissance aircraft</p>
                                <a href="#" className="btn btn-primary">view</a>
                            </div>
                        </div>
                        </div>
                    </div></div>

                    <div className="carousel-item">
                    <div className="row g-2">
                        <div className="col  d-flex align-items-center justify-content-center">
                            <img src={p3} className=" img-fluid" alt="..."/>
                        </div>
                        <div className="col-sm my-auto">
                        <div className="card pcard">
                            <div className="card-body">
                                <h5 className="display-6">Attendance Android App</h5>
                                <p className="card-text">Best Attendance App: Surest way to track employees' attendance. Keep a check on employee Time and location with high accuracy. Enjoy 15 days Free Trial.</p>
                                <a href="#" className="btn btn-primary">View</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                
                <button className="carousel-control-prev" type="button" data-bs-target="#projects" data-bs-slide="prev">
                <i className="fa fa-arrow-circle-left red fa-10x" aria-hidden="true"></i>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#projects" data-bs-slide="next">
                <i className="fa fa-arrow-circle-right red" aria-hidden="true"></i>
                </button>
                </div>

            
            </div>
            <a  href="/" className='display-7'>View All</a>
        </div>
        
        </div>
        
    )
}
export default Projects;