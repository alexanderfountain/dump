import React from 'react';

import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon
} from 'react-share';

import Paths from '../../constants/Paths';

export const FacebookShare = (props) => {
    return (
        <FacebookShareButton
            style={{display: 'inline-block', ...props.styles}}
            url={props.url ? props.url : Paths.home}
        >
            <FacebookIcon
                {...props.iconStyles}
            />
        </FacebookShareButton>
    );
};

export const TwitterShare = (props) => {
    return (
        <TwitterShareButton
            style={{display: 'inline-block', ...props.styles}}
            url={props.url ? props.url : Paths.home}
        >
            <TwitterIcon
                {...props.iconStyles}
            />
        </TwitterShareButton>
    );
};

export const LinkedinShare = (props) => {
    return (
        <LinkedinShareButton
            style={{display: 'inline-block', ...props.styles}}
            url={props.url ? props.url : Paths.home}
        >
            <LinkedinIcon
                {...props.iconStyles}
            />
        </LinkedinShareButton>
    );
};

const SocialShareButtons = (props) => {

    const iconStyles = {
        size: props.size ? props.size : 36,
        borderRadius: 4
    }

    return (
        <div>
            
            <FacebookShare
                iconStyles={iconStyles}
                styles={styles.icon}
            />

            <TwitterShare
                iconStyles={iconStyles}
                styles={styles.icon}
            />

            <LinkedinShare
                iconStyles={iconStyles}
                styles={styles.icon}
            />

        </div>
    );
};

const styles = {
    icon: {
        margin: '0 10px'
    }
}

export default SocialShareButtons;