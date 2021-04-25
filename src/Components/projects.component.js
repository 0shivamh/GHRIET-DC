import 'aos/dist/aos.css';


const Projects=()=>{

    return(
        <div className='project'>
            
            <p className="display-5">Top-Project</p>
            <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-center" id="projects" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <div className="row g-2">
                        <div className="col  d-flex align-items-center justify-content-center">
                            <img src="https://i.pinimg.com/originals/67/00/94/6700942183a036fb153d31ad225fce72.jpg" className="d-block" alt="..."/>
                        </div>
                        <div className="col my-auto">
                        <div className="card pcard">
                            <div className="card-body">
                                <h5 className="display-6">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">View</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="carousel-item">
                    <div className="row g-2">
                        <div className="col  d-flex align-items-center justify-content-center">
                            <img src="https://i.pinimg.com/originals/67/00/94/6700942183a036fb153d31ad225fce72.jpg" className="d-block" alt="..."/>
                        </div>
                        <div className="col my-auto">
                        <div className="card pcard">
                            <div className="card-body">
                                <h5 className="display-6">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">view</a>
                            </div>
                        </div>
                        </div>
                    </div></div>

                    <div className="carousel-item">
                    <div className="row g-2">
                        <div className="col  d-flex align-items-center justify-content-center">
                            <img src="https://fcit.usf.edu/matrix/wp-content/uploads/2016/12/Robot-24-C.jpg" className="d-block" alt="..."/>
                        </div>
                        <div className="col my-auto">
                        <div className="card pcard">
                            <div className="card-body">
                                <h5 className="display-6">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">View</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                
                <button className="carousel-control-prev" type="button" data-bs-target="#projects" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#projects" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>

            
            </div>

        
        </div>
        
    )
}
export default Projects;