import React from "react"

function About() {
    return(
      
<div>
  <div className="container-fluid page-header py-5 mb-5">
    <div className="container py-5">
      <h1 className="display-3 text-white mb-3 animated slideInDown">About Us</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
          <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
          <li className="breadcrumb-item text-white active" aria-current="page">About</li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Feature Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5">
        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <div className="d-flex align-items-center justify-content-center bg-light" style={{width: 60, height: 60}}>
              <i className="fa fa-user-check fa-2x text-primary" />
            </div>
            <h1 className="display-1 text-light mb-0">01</h1>
          </div>
          <h5>Creative Designers</h5>
        </div>
        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <div className="d-flex align-items-center justify-content-center bg-light" style={{width: 60, height: 60}}>
              <i className="fa fa-check fa-2x text-primary" />
            </div>
            <h1 className="display-1 text-light mb-0">02</h1>
          </div>
          <h5>Quality Products</h5>
        </div>
        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <div className="d-flex align-items-center justify-content-center bg-light" style={{width: 60, height: 60}}>
              <i className="fa fa-drafting-compass fa-2x text-primary" />
            </div>
            <h1 className="display-1 text-light mb-0">03</h1>
          </div>
          <h5>Free Consultation</h5>
        </div>
        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <div className="d-flex align-items-center justify-content-center bg-light" style={{width: 60, height: 60}}>
              <i className="fa fa-headphones fa-2x text-primary" />
            </div>
            <h1 className="display-1 text-light mb-0">04</h1>
          </div>
          <h5>Customer Support</h5>
        </div>
      </div>
    </div>
  </div>
  {/* Feature Start */}
  {/* About Start */}
  <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
    <div className="container about px-lg-0">
      <div className="row g-0 mx-lg-0">
        <div className="col-lg-6 ps-lg-0" style={{minHeight: 400}}>
          <div className="position-relative h-100">
            <img className="position-absolute img-fluid w-100 h-100" src="img/about.jpg" style={{objectFit: 'cover'}} alt />
          </div>
        </div>
        <div className="col-lg-6 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
          <div className="p-lg-5 pe-lg-0">
            <div className="section-title text-start">
              <h1 className="display-5 mb-4">About Us</h1>
            </div>
            <p className="mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
            <div className="row g-4 mb-4 pb-2">
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="d-flex align-items-center">
                  <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{width: 60, height: 60}}>
                    <i className="fa fa-users fa-2x text-primary" />
                  </div>
                  <div className="ms-3">
                    <h2 className="text-primary mb-1" data-toggle="counter-up">1234</h2>
                    <p className="fw-medium mb-0">Happy Clients</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                <div className="d-flex align-items-center">
                  <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{width: 60, height: 60}}>
                    <i className="fa fa-check fa-2x text-primary" />
                  </div>
                  <div className="ms-3">
                    <h2 className="text-primary mb-1" data-toggle="counter-up">1234</h2>
                    <p className="fw-medium mb-0">Projects Done</p>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" className="btn btn-primary py-3 px-5">Explore More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Team Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="section-title text-center">
        <h1 className="display-5 mb-5">Team Members</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-item">
            <div className="overflow-hidden position-relative">
              <img className="img-fluid" src="img/team-1.jpg" alt />
              <div className="team-social">
                <a className="btn btn-square" href="#"><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square" href="#"><i className="fab fa-twitter" /></a>
                <a className="btn btn-square" href="#"><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <div className="text-center border border-5 border-light border-top-0 p-4">
              <h5 className="mb-0">Full Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item">
            <div className="overflow-hidden position-relative">
              <img className="img-fluid" src="img/team-2.jpg" alt />
              <div className="team-social">
                <a className="btn btn-square" href="#"><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square" href="#"><i className="fab fa-twitter" /></a>
                <a className="btn btn-square" href="#"><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <div className="text-center border border-5 border-light border-top-0 p-4">
              <h5 className="mb-0">Full Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="team-item">
            <div className="overflow-hidden position-relative">
              <img className="img-fluid" src="img/team-3.jpg" alt />
              <div className="team-social">
                <a className="btn btn-square" href="#"><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square" href="#"><i className="fab fa-twitter" /></a>
                <a className="btn btn-square" href="#"><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <div className="text-center border border-5 border-light border-top-0 p-4">
              <h5 className="mb-0">Full Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
          <div className="team-item">
            <div className="overflow-hidden position-relative">
              <img className="img-fluid" src="img/team-4.jpg" alt />
              <div className="team-social">
                <a className="btn btn-square" href="#"><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square" href="#"><i className="fab fa-twitter" /></a>
                <a className="btn btn-square" href="#"><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <div className="text-center border border-5 border-light border-top-0 p-4">
              <h5 className="mb-0">Full Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    
    )
}
export default About