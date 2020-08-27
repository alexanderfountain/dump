import React from 'react';
import PropTypes from 'prop-types';

import Chevron from '@material-ui/icons/ChevronRight';

import Colors from '../../constants/Colors';

/**
 * 
 * @param {Object[]} buttons - Array of button objects with label, onClick and icon
 */
const FloatingButtonGroup = (props) => {
    return (
        <div
            style={{display: props.noBreak ? 'block' : 'flex', flexWrap: 'wrap', maxWidth: 825, margin: '0 auto', justifyContent: 'space-between', ...props.wrappingDiv}}
        >
            
            {
                props.buttons.map(btn => (
                    <div
                        key={btn.label}
                        style={{margin: '0 auto', width: '100%', maxWidth: 400, padding: '0 5px'}}
                    >
                        <div
                            id={btn.id}
                            className={btn.className}
                            onClick={btn.onClick}
                            style={{
                                ...styles.btn,
                                background: props.blueBg
                                    ? 'linear-gradient(to bottom, #00b2ff, #007aff)'
                                    : 'linear-gradient(to bottom, #FFFFFF, #F9F9F9)',
                                ...props.styles
                            }}
                        >
                            {
                                btn.icon
                                    ? <div
                                        style={{marginRight: 20, display: 'flex'}}
                                    >
                                        {btn.icon}
                                    </div>
                                    : null
                            }

                            <div
                                style={{flex: 1, textAlign: 'left'}}
                            >
                                {btn.label}
                            </div>

                            <Chevron />
                        </div>
                    </div>
                ))
            }

        </div>
    );
};

const styles = {
    btn: {
        cursor: 'pointer',
        height: 49,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 4,
        fontWeight: 400,
        padding: '0 20px',
        marginBottom: 10,
        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.28)',
        width: '100%',
        color: Colors.allianceBlue
    }
};

FloatingButtonGroup.propTypes = {
    textColor: PropTypes.string,
    buttons: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
    noBreak: PropTypes.bool,
    wrappingDiv: PropTypes.objectOf(PropTypes.any),
    styles: PropTypes.objectOf(PropTypes.any),
    blueBg: PropTypes.bool
};

export default FloatingButtonGroup;