import React from "react";
import "./machine.css";

function Machine() {
    return (
        <div className="machine-wrap">
            <div className="machine">
                <div className="machine-roof">
                    <div className="machine-silencer">
                        <div className="machine-smoke"></div>
                    </div>
                </div>
                <div className="machine-main">
                    <div className="machine-body"></div>
                    <div className="machine-back"></div>
                    <div className="machine-front"></div>
                </div>
            </div>
        </div>
    );
}

export default Machine;