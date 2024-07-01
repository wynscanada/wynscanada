import React from 'react';
import '../../fonts.css';

function ExecCard(props) {
    return (
        <div className="card mb-3 col-sm-12 col-lg-6" style={{ maxWidth: "31rem" }}>
            <div className="row no-gutters">
                <div className="col-5">
                    <img src={require("../../assets/discoball.jpeg")} className="card-img" alt="exec photo"/>
                </div>
                <div className="col-7">
                    <div className="card-body">
                        <h4 className="exec card-title">{props.exec.title}</h4>
                        <h5 className="exec card-text">{props.exec.name}</h5>
                        <p className="exec card-text">{props.exec.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExecCard;
