import React from 'react';
import './UserOutput.css'

const UserInput = (props) => {
    return (
        <div>
            <label>Username: </label>
            <input
                type="textbox" className='username'
                onChange={props.changed}
                value={props.currentUser} />
        </div >
    )

};
export default UserInput;