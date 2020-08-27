import React from 'react';

const AlertBox = (props) => {
    return (
        <div
            style={Object.assign({}, styles.default, props.danger ? styles.danger : null, props.styles)}
        >
            {props.children}
        </div>
    );
};

const styles = {
    default: {
        padding: '12px 20px',
        color: '#004085',
        backgroundColor: '#CCE5FF',
        borderColor: '#B8DAFF',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 4,
    },
    danger: {
        backgroundColor: 'rgb(248, 215, 218)',
        borderColor: 'rgb(245, 198, 203)',
        color: '#721C24'
    }
}

export default AlertBox;