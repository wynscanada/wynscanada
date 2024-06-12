import React from 'react';
import '../fonts.css';

function ExecCard(props) {
    const imgStyle = {
        padding: "1rem",
        paddingRight: "0",
        width: "100%",
        height: "auto"
    };

    const titleStyle = {
        fontFamily: "League Spartan",
        textTransform: "uppercase",
        fontSize: "1.5rem",
        letterSpacing: "-0.5px",
        lineHeight: "1.5rem",
        paddingTop: "0.8rem"
    };

    const subtitleStyle = {
        fontFamily: "Libre Baskerville",
        fontStyle: "italic",
        fontSize: "1rem",
        lineHeight: "0rem"
    };

    const aboutStyle = {
        fontFamily: "Libre Baskerville",
        fontSize: "0.8rem",
        lineHeight: "1rem",
        paddingTop: "1rem"
    };

    return (
        <div className="card mb-3 col-sm-12 col-lg-6" style={{ maxWidth: "31rem" }}>
            <div className="row no-gutters">
                <div className="col-5">
                    <img src={require("../assets/discoball.jpeg")} className="card-img" alt="exec photo" style={imgStyle}/>
                </div>
                <div className="col-7">
                    <div className="card-body">
                        <h4 className="card-title" style={titleStyle}>{props.exec.title}</h4>
                        <h5 className="card-text" style={subtitleStyle}>{props.exec.name}</h5>
                        <p className="card-text" style={aboutStyle}>{props.exec.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExecCard;
