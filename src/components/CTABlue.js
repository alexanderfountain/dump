import React from 'react';
import PropTypes from 'prop-types';

import FindPricing from './FindPricing';
import { sectionStyles } from './SectionWrapper';

import Colors from '../constants/Colors';

const CTABlue = (props) => {
    return (
        <div
            style={{...sectionStyles.section, backgroundColor: Colors.allianceBlue}}
        >
            <h2
                style={{color: '#FFFFFF', textAlign: 'center', margin: 0}}
            >
                {props.title}
            </h2>

            <FindPricing
                btnText='find pricing'
                btnStyle={{backgroundColor: Colors.altSecondaryBtn}}
                textFieldProps={{placeholder: 'Delivery address or town'}}
                label={false}
            />
        </div>
    );
};

CTABlue.propTypes = {
    title: PropTypes.string.isRequired
};

export default CTABlue;