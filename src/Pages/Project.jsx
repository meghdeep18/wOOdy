import React from "react";

function Project() {
    return (

  <div>
  <div className="container-fluid page-header py-5 mb-5">
    <div className="container py-5">
      <h1 className="display-3 text-white mb-3 animated slideInDown">Project</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
          <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
          <li className="breadcrumb-item text-white active" aria-current="page">Project</li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Projects Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="section-title text-center">
        <h1 className="display-5 mb-5">Our Projects</h1>
      </div>
      <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
        <div className="col-12 text-center">
          <ul className="list-inline mb-5" id="portfolio-flters">
            <li className="mx-2 active" data-filter="*">All</li>
            <li className="mx-2" data-filter=".first">General Carpentry</li>
            <li className="mx-2" data-filter=".second">Custom Carpentry</li>
          </ul>
        </div>
      </div>
      <div className="row g-4 portfolio-container">
        <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
          <div className="rounded overflow-hidden">
            <div className="position-relative overflow-hidden">
              <img className="img-fluid w-100" src="img/portfolio-1.jpg" alt />
              <div className="portfolio-overlay">
                <a className="btn btn-square btn-outline-light mx-1" href="img/portfolio-1.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                <a className="btn btn-square btn-outline-light mx-1" href="#"><i className="fa fa-link" /></a>
              </div>
            </div>
            <div className="border border-5 border-light border-top-0 p-4">
              <p className="text-primary fw-medium mb-2">General Carpentry</p>
              <h5 className="lh-base mb-0">Wooden Furniture Manufacturing And Remodeling
              </h5></div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.3s">
          <div className="rounded overflow-hidden">
            <div className="position-relative overflow-hidden">
              <img className="img-fluid w-100" src="img/portfolio-2.jpg" alt />
              <div className="portfolio-overlay">
                <a className="btn btn-square btn-outline-light mx-1" href="img/portfolio-2.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                <a className="btn btn-square btn-outline-light mx-1" href="#"><i className="fa fa-link" /></a>
              </div>
            </div>
            <div className="border border-5 border-light border-top-0 p-4">
              <p className="text-primary fw-medium mb-2">Custom Carpentry</p>
              <h5 className="lh-base mb-0">Wooden Furniture Manufacturing And Remodeling
              </h5></div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.5s">
          <div className="rounded overflow-hidden">
            <div className="position-relative overflow-hidden">
              <img className="img-fluid w-100" src="img/portfolio-3.jpg" alt />
              <div className="portfolio-overlay">
                <a className="btn btn-square btn-outline-light mx-1" href="img/portfolio-3.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                <a className="btn btn-square btn-outline-light mx-1" href="#"><i className="fa fa-link" /></a>
              </div>
            </div>
            <div className="border border-5 border-light border-top-0 p-4">
              <p className="text-primary fw-medium mb-2">General Carpentry</p>
              <h5 className="lh-base mb-0">Wooden Furniture Manufacturing And Remodeling
              </h5></div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.1s">
          <div className="rounded overflow-hidden">
            <div className="position-relative overflow-hidden">
              <img className="img-fluid w-100" src="img/portfolio-4.jpg" alt />
              <div className="portfolio-overlay">
                <a className="btn btn-square btn-outline-light mx-1" href="img/portfolio-4.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                <a className="btn btn-square btn-outline-light mx-1" href="#"><i className="fa fa-link" /></a>
              </div>
            </div>
            <div className="border border-5 border-light border-top-0 p-4">
              <p className="text-primary fw-medium mb-2">Custom Carpentry</p>
              <h5 className="lh-base mb-0">Wooden Furniture Manufacturing And Remodeling
              </h5></div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.3s">
          <div className="rounded overflow-hidden">
            <div className="position-relative overflow-hidden">
              <img className="img-fluid w-100" src="img/portfolio-5.jpg" alt />
              <div className="portfolio-overlay">
                <a className="btn btn-square btn-outline-light mx-1" href="img/portfolio-5.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                <a className="btn btn-square btn-outline-light mx-1" href="#"><i className="fa fa-link" /></a>
              </div>
            </div>
            <div className="border border-5 border-light border-top-0 p-4">
              <p className="text-primary fw-medium mb-2">General Carpentry</p>
              <h5 className="lh-base mb-0">Wooden Furniture Manufacturing And Remodeling
              </h5></div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.5s">
          <div className="rounded overflow-hidden">
            <div className="position-relative overflow-hidden">
              <img className="img-fluid w-100" src="img/portfolio-6.jpg" alt />
              <div className="portfolio-overlay">
                <a className="btn btn-square btn-outline-light mx-1" href="img/portfolio-6.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                <a className="btn btn-square btn-outline-light mx-1" href="#"><i className="fa fa-link" /></a>
              </div>
            </div>
            <div className="border border-5 border-light border-top-0 p-4">
              <p className="text-primary fw-medium mb-2">Custom Carpentry</p>
              <h5 className="lh-base mb-0">Wooden Furniture Manufacturing And Remodeling
              </h5></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Projects End */}
  {/* Footer Start */}
  <div className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <h4 className="text-light mb-4">Address</h4>
          <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />123 Street, New York, USA</p>
          <p className="mb-2"><i className="fa fa-phone-alt me-3" />+012 345 67890</p>
          <p className="mb-2"><i className="fa fa-envelope me-3" />info@example.com</p>
          <div className="d-flex pt-2">
            <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-twitter" /></a>
            <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-facebook-f" /></a>
            <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-youtube" /></a>
            <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-light mb-4">Services</h4>
          <a className="btn btn-link" href="#">General Carpentry</a>
          <a className="btn btn-link" href="#">Furniture Remodeling</a>
          <a className="btn btn-link" href="#">Wooden Floor</a>
          <a className="btn btn-link" href="#">Wooden Furniture</a>
          <a className="btn btn-link" href="#">Custom Carpentry</a>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-light mb-4">Quick Links</h4>
          <a className="btn btn-link" href="#">About Us</a>
          <a className="btn btn-link" href="#">Contact Us</a>
          <a className="btn btn-link" href="#">Our Services</a>
          <a className="btn btn-link" href="#">Terms &amp; Condition</a>
          <a className="btn btn-link" href="#">Support</a>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-light mb-4">Newsletter</h4>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div className="position-relative mx-auto" style={{maxWidth: 400}}>
            <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            © <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved.
          </div>
          <div className="col-md-6 text-center text-md-end">
            {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
            Designed By <a className="border-bottom" href="https://htmlcodex.com/">HTML Codex</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
export default Project