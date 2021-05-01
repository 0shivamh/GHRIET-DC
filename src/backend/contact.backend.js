const Contact=()=>{

    return(
        <div>

        <div className="modal fade " id="contact" tabIndex="-1"  aria-hidden="true">
        <div className="modal-dialog ContactForm  modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Contact Us</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form>
                        <div className="mb-3">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control form-control1" id="floatingInput" placeholder="Shivam"/>
                            <label htmlFor="floatingInput">Name</label>
                            </div>
                        </div>
                        <div className="mb-3">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control form-control1" id="floatingInput" placeholder="name@example.com"/>
                            <label htmlFor="floatingInput">Email address</label>
                            </div>
                        </div>
                        <div className="mb-3">
                        <div className="form-floating">
                            <textarea className="form-control form-control1 " placeholder="Leave a your query here" id="floatingTextarea2"></textarea>
                            <label htmlFor="floatingTextarea2">Query</label>
                            </div>
                        </div>
                        <button type="submit" className="cbtn1 btn shadow rounded">Submit</button>
                    </form>
            </div>
            </div>
        </div>
        </div>
              
        </div>
    )

}
export default Contact;