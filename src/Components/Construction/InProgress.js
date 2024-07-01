import React from "react";
import Machine from "./Machine";
import "./inprogress.css";


function InProgress() {
    return (
        <>
            <div style={{height: "100%", background: "linear-gradient( #E3F0E4, #FCA5D9)"}}>
                <div className="in-progress p-5 d-flex justify-content-center align-items-center animate__animated animate__fadeIn animate__slower">
                    <h1 className="pb-5 col-8 text-center text-reflect">under construction...</h1>
                </div>
                <Machine />
            </div>
        </>
    );
}

export default InProgress;