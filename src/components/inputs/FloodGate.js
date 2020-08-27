import React from 'react';

const FloodGate = (props) => {
    return (
        <input 
            type="text"
            name="gate"
            style={{display: 'none'}}
            value={props.value}
            onChange={(event) => props.changed(event.target.value)}
            required
        />
    );
};

export default FloodGate;