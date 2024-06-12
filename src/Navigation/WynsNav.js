import React from 'react';
import './navbar.css';
import { NavLink } from "react-router-dom";

function WynsNav() {
    return (
        <nav className="navbar navbar-expand-md navbar-light wyns-nav">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <img src={require('./wynslogo.png')} alt="wyns logo" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto wyns-links">
                        <NavLink className="nav-item nav-link mx-4 text-dark" to="/">Home</NavLink>
                        <NavLink className="nav-item nav-link mx-4 text-dark" to="/about">About</NavLink>
                        <NavLink className="nav-item nav-link mx-4 text-dark" to="/construction">Events</NavLink>
                    </div>
                    <div className="navbar-nav wyns-socials">
                        <a className="nav-item nav-link text-dark" href="https://www.instagram.com/wishyouthnetworksociety/?hl=en" target="_blank">Instagram</a>
                        <a className="nav-item nav-link text-dark" href="https://ca.linkedin.com/company/wish-youth-network-society" target="_blank">LinkedIn</a>
                        <a className="nav-item nav-link text-dark" href="#">Facebook</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default WynsNav;
