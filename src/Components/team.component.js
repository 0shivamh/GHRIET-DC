const Team =()=>{
    return(
        <div className="conatiner team">
            <p className="display-5 white">Team</p>
                <div id="team" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner ">
                        <div className="carousel-item active pslide">
                            <div className="card profile ">
                                <img src="https://lh3.googleusercontent.com/a-/AOh14Gg-BRAYMJLbvbSkD_w8gSWy4Jq27wLMWFLREY9GQg=s96-c-rg-br100" class="pic img-fluid " alt="..."/>
                                <div className="card-body">
                                    <h5 class="card-title">Shivam</h5>
                                    <p className="card-text">I mainly write code</p>
                                    <a aria-hidden='true' className='fa fa-twitter' href='' id='devso' target='_blank'></a>
                                    <a aria-hidden='true' className='fa fa-linkedin' href='/' id='devso' target='_blank'></a>
                                    <a aria-hidden='true' className='fa fa-github' href='' id='devso' target='_blank'></a>
                                    <a aria-hidden='true' className='fa fa-envelope' href='' id='devso' target='_blank'></a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item pslide">
                        <div className="card profile ">
                                <img src="" class="pic img-fluid " alt="..."/>
                                <div className="card-body">
                                    <h5 class="card-title">Shivam</h5>
                                    <p className="card-text">I mainly write code</p>
                                    <a aria-hidden='true' className='fa fa-twitter' href='' id='devso' target='_blank'></a>
                                    <a aria-hidden='true' className='fa fa-linkedin' href='/' id='devso' target='_blank'></a>
                                    <a aria-hidden='true' className='fa fa-github' href='' id='devso' target='_blank'></a>
                                    <a aria-hidden='true' className='fa fa-envelope' href='' id='devso' target='_blank'></a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item  pslide">
                            <div className="card profile ">
                                <img src="" class="pic img-fluid " alt="..."/>
                                <div className="card-body">
                                    <h5 class="card-title">Shivam</h5>
                                    <p className="card-text">I mainly write code</p>
                                    <a aria-hidden='true' className='fa fa-twitter' href='' id='devso' target='_blank'></a>
                                    <a aria-hidden='true' className='fa fa-linkedin' href='/' id='devso' target='_blank'></a>
                                    <a aria-hidden='true' className='fa fa-github' href='' id='devso' target='_blank'></a>
                                    <a aria-hidden='true' className='fa fa-envelope' href='' id='devso' target='_blank'></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#team" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#team" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
        </div>
    )
}
export default Team;