import React from 'react';
import './homehero.css';

function Hero(props) {
    return (
        <div className="jumbotron-fluid" style={{ backgroundColor: "#AECBAD", height: "85vh" }}>
            <div className='container col-md-10'>
                <p className="fw-light fs-6 mb-1 text-start" id="hero-subtitle">{ props.subtitle }</p>
                <h1 className="display-4 text-start text-uppercase fw-bold mb-4 col-6">{ props.title }</h1>
                <p className="lead text-start fs-6 col-md-8 col-sm-12" style={{ marginBottom: "5rem" }}> { props.description } </p>
            </div>
        </div>
    );
}

export default Hero;
