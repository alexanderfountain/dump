import React from 'react';
import PropTypes from 'prop-types';

import Colors from '../constants/Colors';
/**
 * Default styling for standard page sections
 * 
 * @param {string} id - Id of the div if you'd like to be able to scroll to it with a link click
 * 
 */
export const sectionStyles = {
    section: {
        borderTop: 'solid 7.5px ' + Colors.mainBg,
        borderBottom: 'solid 7.5px ' + Colors.mainBg,
        padding: '20px 20px 39px',
        // textAlign: 'center'
    },
    heading: {
        margin: 0,
        textAlign: 'center'
    }
};

const SectionWrapper = (props) => (
    <div
        style={{...sectionStyles.section, ...props.styles, position: 'relative'}}
        {...props.schema}
    >
        <div style={{position: 'absolute', top: -92}} id={props.id} />
        <div
            style={{maxWidth: 800, margin: '0 auto'}}
        >
            test

            <h2
                style={sectionStyles.heading}
            >
                {props.title}
            </h2>

            {props.children}

        </div>
    </div>
);

SectionWrapper.propTypes = {
    title: PropTypes.any.isRequired,
    children: PropTypes.any.isRequired,
    styles: PropTypes.objectOf(PropTypes.any),
    id: PropTypes.string,
    schema: PropTypes.any
};

export default SectionWrapper;