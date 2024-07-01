import React from 'react';
import '../../fonts.css';

function ExecTitle() {
    const titleStyle = {
        fontFamily: "League Spartan",
        textTransform: "uppercase",
    };

    const subtitleStyle = {
        fontFamily: "Libre Baskerville",
        fontStyle: "italic",
    }

    return (
        <div style={{backgroundColor: "#FEEAF6"}}>
            <div className="container">
                <h2 className="fs-2" style={titleStyle}>Senior Executives</h2>
                <h5 className="fs-6" style={subtitleStyle}>(INSERT DESCRIPTION HERE) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h5>
            </div>
        </div>
    );
}

export default ExecTitle;