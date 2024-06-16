import React from 'react';
import './homehero.css';

function HomeHero(props) {
    return (
        <div className="jumbotron jumbotron-fluid text-center m-0">
            <h1 className="text-center text-uppercase fw-bold mb-4">{props.title}</h1>
            <p className="mission lead text-center col-md-8 mx-auto"> {props.mission1} </p>
            <p className="mission lead text-center col-md-8 mx-auto"> {props.mission2} </p>
            <p className="lead text-center mb-0">
                <a className="btn btn-large text-uppercase p-2" href={props.href} role="button">{props.buttonText}</a>
            </p>
        </div>
    );
}

export default HomeHero;
