import React from "react";
import {Link,NavLink, useNavigate } from 'react-router-dom';

function Header() {
    return(
        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <a href="index-2.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
          <h2 className="m-0 text-primary">WooDY</h2>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <NavLink to="/" className="nav-item nav-link ">Home</NavLink>
            <NavLink to="/about" className="nav-item nav-link">About</NavLink>
            <NavLink to="/services" className="nav-item nav-link">Service</NavLink>
            <NavLink to="/project" className="nav-item nav-link">Project</NavLink>
            <div className="nav-item dropdown">
              <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
              <div className="dropdown-menu fade-up m-0">
                <NavLink to="/feature" className="dropdown-item">Feature</NavLink>
                <NavLink to="/quote" className="dropdown-item">Free Quote</NavLink>
                <NavLink to="/team" className="dropdown-item">Our Team</NavLink>
                <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
                <NavLink to="/profile" className="dropdown-item">Profile</NavLink>

                <NavLink to="/404" className="dropdown-item">404 Page</NavLink>
              </div>
            </div>
            <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
          </div>
          <Link to="/signup_page" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Registartion<i className="fa fa-arrow-right ms-3" /></Link>
        </div>
      </nav>
    )
    
}
export default Header