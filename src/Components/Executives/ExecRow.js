import React from 'react';
import '../../fonts.css';
import ExecCard from './ExecCard';

function ExecRow(props) {
    return (
        <div className='d-flex pt-4 flex-wrap mx-4'>
            <div className='container'>
                <div className='row'>
                <ExecCard exec={props.exec1}/>
                <ExecCard exec={props.exec2}/>
                </div>
            </div>
        </div>
    );
}

export default ExecRow;