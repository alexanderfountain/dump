import React from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';

import Clock from '@material-ui/icons/AccessTimeOutlined';
import DeviceHub from '@material-ui/icons/DeviceHub';
import Friendly from '@material-ui/icons/AccountCircleOutlined';
import Phone from '@material-ui/icons/PhoneIphone';
import ThumbUp from '@material-ui/icons/ThumbUpAltOutlined';
import Timer from '@material-ui/icons/TimerOutlined';

import ContentBlurb from '../ContentBlurb';
import Paths from '../../constants/Paths';

const BlurbSwitcher = (props) => {

    const desktop = useMediaQuery('(min-width: 768px)');

    const contentSelector = (wrapper) => {
        switch(wrapper) {
            case 'friendly':
                return ({
                    icon: Friendly,
                    title: 'Personalized Friendly Support',
                    link: {label: 'Chat with us', to: Paths.contact}
                })
            case 'pricing':
                return ({
                    icon: ThumbUp,
                    title: 'Transparent Pricing',
                    link: {label: 'Browse pricing', to: Paths.orderRollOff}
                })
            case 'rental period':
                return ({
                    icon: Clock,
                    title: 'Flexible Rental Periods',
                    link: {label: 'Rental periods', to: Paths.rollOffRentalPeriods}
                });
            case 'sizes':
                return ({
                    icon: DeviceHub,
                    title: 'Variety of Sizes',
                    link: {label: 'Sizing guide', to: Paths.rollOffSizingGuide}
                })
            case 'service':
                return ({
                    icon: Timer,
                    title: 'Fast and Reliable Service',
                    link: {label: 'Order now', to: Paths.orderRollOff}
                })
            case 'phone':
                return ({
                    icon: Phone,
                    title: 'Stay Up to Date',
                    link: {label: 'Contact us', to: Paths.contact}
                })
            default:
                return ({})
        }
    }

    return (
        <div
            style={{flexWrap: 'wrap', marginTop: 60, display: desktop ? 'flex' : 'block'}}
        >
            <ContentBlurb
                {...contentSelector(props.oneWrapper)}
                
                paragraph={props.onePara}
                
                wrapperStyle={{marginBottom: 60, flex: '1 1 160px'}}
            />
            <ContentBlurb
                {...contentSelector(props.twoWrapper)}
                
                paragraph={props.twoPara}
                
                wrapperStyle={{flex: '1 1 160px'}}
            />
        </div>
    );
};

export default BlurbSwitcher;