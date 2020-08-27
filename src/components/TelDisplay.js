import React from 'react';
import { connect } from 'react-redux';

const TelDisplay = (props) => {
    // let tel = '+1-732-366-9355';
    // let telDisplay = '(732) 366-9355';

    // if (props.search.id === 'ppc') {
    //     tel = '+1-732-654-0147';
    //     telDisplay = '(732) 654-0147';
    // }

    if (props.displayOnly) {
        return (<>
            {props.telDisplay} 
        </>);
    };

    return (
        <a
            href={`tel:${props.tel}`}
            style={props.style}
        >
            {props.telDisplay}
        </a>
    ); 

};

const mapStateToProps = state => {
    return {
        tel: state.app.tel,
        telDisplay: state.app.telDisplay
    }
}

export default connect(mapStateToProps)(TelDisplay);