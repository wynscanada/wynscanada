import React from "react";
import Machine from "./Machine";
import "./inprogress.css";


function InProgress() {
    return (
        <>
            <div className="in-progress p-5 d-flex justify-content-center align-items-center">
                <h1 className="pb-5 col-8 text-center text-reflect">under construction...</h1>
            </div>
            <Machine />
        </>
    );
}

export default InProgress;