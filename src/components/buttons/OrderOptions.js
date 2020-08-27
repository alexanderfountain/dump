import React from 'react';
import { navigate } from 'gatsby';
import { connect } from 'react-redux';

import Computer from '@material-ui/icons/Computer';
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';

import FloatingButtonGroup from './FloatingButtonGroup';

import Paths from '../../constants/Paths';
import { windowGlobal } from '../../constants/Window';

const OrderOptions = (props) => {
    const orderButtons = [
        {
            label: 'Easy online ordering',
            className: 'order-roll-off',
            icon: <Computer />,
            onClick: () => navigate(Paths.orderRollOff)
        },
        {
            label: `Call ${props.telDisplay}`,
            icon: <Phone />,
            onClick: () => windowGlobal.location.href = `tel:${props.tel}`
        },
        {
            label: 'Order by email',
            icon: <Email />,
            onClick: () => navigate(Paths.quoteRollOff)
        }
    ];

    return (
        <FloatingButtonGroup
            buttons={orderButtons}
            styles={{color: '#FFFFFF'}}
            wrappingDiv={{maxWidth: 450}}
            blueBg
        />
    );
};

const mapStateToProps = state => {
    return {
        tel: state.app.tel,
        telDisplay: state.app.telDisplay
    };
};

export default connect(mapStateToProps)(OrderOptions);