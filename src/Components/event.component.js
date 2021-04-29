import 'aos/dist/aos.css';
const Event=()=>{
    return(
        <div className="event" id="event">
            <div className="row">
                <div className="col-sm eventcol">
                    <div id="event" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src="https://ghriet.raisoni.net/img/event/ph_5.jpg" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src="https://ghriet.raisoni.net/img/event/ph_7.jpg" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src="https://ghriet.raisoni.net/img/event/ph_22.jpg" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src="https://ghriet.raisoni.net/img/event/ph_23.jpg" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src="https://ghriet.raisoni.net/img/event/ph_20.jpg" className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev " type="button" data-bs-target="#event" data-bs-slide="prev">
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#event" data-bs-slide="next">

                    </button>
                    </div>
                </div>
                <div className="eventcol2 col-sm">
                    <p className="display-3">We share knowledge </p>
                    <p className="p1"> In May 2021, we empowered our first event . Since then we've grown to</p>
                    <div data-aos="zoom-in-down" className="p-3 boxx  "><p className="display-6">100+ Events</p></div>
                </div>
            </div>

            
        </div>
    )

}
export default Event;