import React from 'react';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { NavLink } from "react-router-dom";

function WynsNav() {
    return (
        <nav className="navbar navbar-expand-md wyns-nav">
            <div className="container d-flex justify-content-between">
                <NavLink className="navbar-brand logo" to="/">
                    <img src={require('./wynslogo.png')} alt="wyns logo" />
                    <p id="logo-text">Wish Youth Network Society</p>
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center nav-section" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto wyns-links">
                        <NavLink className="nav-item nav-link mx-4 text-dark nav-title" to="/">Home</NavLink>
                        <div className="nav-item dropdown mx-4">
                            <NavLink className="nav-link dropdown-toggle text-dark nav-title" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                About
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" to="/whoweare">Who We Are</NavLink>
                                <NavLink className="dropdown-item" to="/construction">Team</NavLink>
                            </div>
                        </div>
                        <div className="nav-item dropdown mx-4">
                            <NavLink className="nav-link dropdown-toggle text-dark nav-title" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Join Us
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" to="/joinus">Hiring</NavLink>
                                <NavLink className="dropdown-item" to="/contact">Contact</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-nav wyns-socials d-flex flex-column align-items-center">
                        <a className="nav-item nav-link text-dark" href="https://www.instagram.com/wishyouthnetworksociety/?hl=en" target="_blank" rel="noopener noreferrer">Instagram</a>
                        {/*<a className="nav-item nav-link text-dark" href="https://ca.linkedin.com/company/wish-youth-network-society" target="_blank" rel="noopener noreferrer">LinkedIn</a>*/}
                    </div>
                </div>
            </div>
        </nav>

        
    );
}

export default WynsNav;
