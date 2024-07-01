import React from 'react';
import ExecTitle from './ExecTitle';
import ExecRow from './ExecRow';

function ExecSection(props) {
    return (
        <div className="pt-5" style={{ backgroundColor: "#FEEAF6" }}>
            <div className='container col-md-8 col-lg-9'>
                <ExecTitle title={props.title} description={props.execDescription}/>
                <ExecRow exec1={props.exec1} exec2={props.exec2}/>
            </div>
        </div>
    );
}

export default ExecSection;
