import React from 'react';
import './homehero.css';

function HomeHero() {
    return (
        <div className="jumbotron jumbotron-fluid text-center">
            <p className="text-center fw-light fs-6 mb-1" id="hero-subtitle">who we are</p>
            <h1 className="display-4 text-center text-uppercase fw-bold mb-4">Wish Youth Network Society</h1>
            <p className="lead text-center fs-6 col-md-8 mx-auto"> (INSERT DESCRIPTION HERE) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam erat velit scelerisque in dictum. Habitant morbi tristique senectus et netus et malesuada fames ac. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Vulputate mi sit amet mauris. </p>
            <p className="lead text-center mb-0">
                <a className="btn btn-large text-uppercase m-5 p-2" href="#" role="button">Read more</a>
            </p>
        </div>
    );
}

export default HomeHero;
