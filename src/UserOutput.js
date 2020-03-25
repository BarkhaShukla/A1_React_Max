import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div>
            <p className='p1'>{props.username}</p>
            <p className='p2'>test</p>
        </div>
    )

};

export default UserOutput;