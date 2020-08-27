import React from 'react';

import AttachMoney from '@material-ui/icons/AttachMoney';
import ContactSupport from '@material-ui/icons/ContactSupport';
import DateRange from '@material-ui/icons/DateRange';
import SquareFoot from '@material-ui/icons/SquareFoot';

import FloatingButtonGroup from '../buttons/FloatingButtonGroup';

const ScrollTo = (props) => {

    const pageAreas = [
        {
            label: 'How much does it cost?',
            icon: <AttachMoney />,
            onClick: () => props.navigate('#dumpster-costs')
        },
        {
            label: 'How big is it?',
            icon: <SquareFoot />,
            onClick: () => props.navigate('#dumpster-size')
        },
        {
            label: 'How long can I keep it for?',
            icon: <DateRange />,
            onClick: () => props.navigate('#dumpster-rental-period')
        },
        {
            label: 'How does this all work?',
            icon: <ContactSupport />,
            onClick: () => props.navigate('#how-dumpster-rentals-work')
        },
    ];

    return (
        <div
            style={{...props.styles, padding: '30px 20px 20px', backgroundColor: '#25CED1'}}
        >
            <FloatingButtonGroup
                buttons={pageAreas}
            />
        </div>
    );
};

export default ScrollTo;