import React from 'react';

const GradientButton = (props) => {
    return (
        <div
            style={{cursor: 'pointer', height: 36, minWidth: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 4, background: 'linear-gradient(to bottom, #00b2ff, #007aff)', color: '#FFFFFF', fontWeight: 500, ...props.style}}
            onClick={props.onClick}
            id={props.id}
            className={props.className}
        >
            {props.children.toUpperCase()}
        </div>
    );
};

export default GradientButton;