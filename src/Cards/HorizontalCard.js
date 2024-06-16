import React from 'react';
import './HorizontalCard.css';

function HorizontalCard({ imageSrc, alt, title, subtitle, bodyText }) {
    return (
        <div className="horizontal-card">
            <div className="card-content">
                <div className="card-image">
                    <img src={require("../assets/discoball.jpeg")} alt={alt} />
                </div>
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <h5>{subtitle}</h5>
                    <p className="card-text">{bodyText}</p>
                </div>
            </div>
        </div>
    );
}

export default HorizontalCard;
