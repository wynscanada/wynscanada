import React from 'react';
import '../fonts.css';

function ExecTitle() {
    const titleStyle = {
        fontFamily: "League Spartan",
        textTransform: "uppercase",
        fontSize: "2rem",
    };

    const subtitleStyle = {
        fontFamily: "Libre Baskerville",
        fontStyle: "italic",
        fontSize: "1rem"
    }

    return (
        <div style={{backgroundColor: "#FEEAF6"}}>
            <div className="container">
                <h2 style={titleStyle}>Senior Executives</h2>
                <h5 style={subtitleStyle}>(INSERT DESCRIPTION HERE) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h5>
            </div>
        </div>
    );
}

export default ExecTitle;