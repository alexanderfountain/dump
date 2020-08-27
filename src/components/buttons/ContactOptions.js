import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby';
import { connect } from 'react-redux';

import Forum from '@material-ui/icons/Forum';
import Phone from '@material-ui/icons/Phone';
import Email from '@material-ui/icons/Email';

import FloatingButtonGroup from './FloatingButtonGroup';

import Colors from '../../constants/Colors';
import Paths from '../../constants/Paths';
import { windowGlobal } from '../../constants/Window';

const ContactOptions = (props) => {

    const initialButtons = [
        // {
        //     label: 'Live chat',
        //     icon: <Forum style={{fontSize: 25}} />,
        //     onClick: () => windowGlobal.location.href = '#hs-chat-open'
        // },
        {
            label: `Call ${props.telDisplay}`,
            icon: <Phone style={{fontSize: 25}} />,
            onClick: () => windowGlobal.location.href = `tel:${props.tel}`
        },
        {
            label: 'Reach out by email',
            icon: <Email style={{fontSize: 25}} />,
            onClick: () => navigate(Paths.contact)
        }
    ];

    const [buttons, setButtons] = useState(initialButtons);

    useEffect(() => {
        if (props.extraButtons) {
            setButtons([
                ...initialButtons,
                ...props.extraButtons
            ]);
        }
    }, []);

    return (
        <div style={{position: 'relative'}}>
            {/* <div id='hs-chat-open' style={{position: 'absolute', top: -200}} /> */}
            <FloatingButtonGroup
                buttons={buttons}
                styles={{fontWeight: 600, color: Colors.tintColor}}
                wrappingDiv={{maxWidth: 450}}
            />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        tel: state.app.tel,
        telDisplay: state.app.telDisplay
    };
};

export default connect(mapStateToProps)(ContactOptions);