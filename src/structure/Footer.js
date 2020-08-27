import React from 'react';
import { Link } from 'gatsby';

import classes from './Footer.module.css';

import IconButton from '@material-ui/core/IconButton';

import Breadcrumbs from './Breadcrumbs';

import Paths from '../constants/Paths';
import { windowGlobal } from '../constants/Window';

import { LinkedIn, YouTube, Facebook, Instagram, Twitter } from '../assets/icons/social';
import TelDisplay from '../components/TelDisplay';

const socialSize = 24;
const socialColor = '#5F6364';

const mainLinks = [
    {label: 'Dumpster Rentals', to: Paths.rollOffDetails},
    {label: 'Commercial Services', to: Paths.commDumpsterDetails},
    {label: 'Residential Services', to: Paths.resiDetails},
    {label: 'About', to: Paths.about},
];

const resourcesLinks = [
    {label: 'Terms of Service', to: Paths.tos},
    {label: 'Privacy Policy', to: Paths.pp},
    {label: 'Site Map', to: Paths.sitemap},
    {label: 'Trash Talks Blog', to: Paths.blog}
];

const socialIcons = [
    {
        component: <Facebook size={socialSize} color={socialColor} />,
        key: 'facebook',
        url: Paths.facebook,
    },
    {
        component: <Instagram size={socialSize} color={socialColor} />,
        key: 'instagram',
        url: Paths.instagram
    },
    {
        component: <LinkedIn size={socialSize} color={socialColor} />,
        key: 'linkedin',
        url: Paths.linkedin
    },
    {
        component: <Twitter size={socialSize} color={socialColor} />,
        key: 'twitter',
        url: Paths.twitter
    },
    {
        component: <YouTube size={socialSize} color={socialColor} />,
        key: 'youtube',
        url: Paths.youtube
    }
];

const Heading = (props) => (
    <div style={styles.heading}>
        {props.children}
    </div>
);

const Footer = (props) => {
    return (
        <footer style={styles.wrapper}>

            <div 
                style={styles.topBar}
                
            >
                <div
                    style={{maxWidth: 990, margin: '0 auto', width: '100%'}}
                >
                    {socialIcons.map(icon => (
                        <IconButton 
                            key={icon.key}
                            style={{marginRight: 10}}
                            onClick={() => windowGlobal.open(icon.url, '_blank')}
                            aria-label={icon.key}
                        >
                            {icon.component}
                        </IconButton>
                    ))}
                </div>
            </div>

            {
                props.breadcrumbs
                    ? (
                        <div
                            style={{padding: '20px 20px 0', maxWidth: 950, margin: '0 auto', fontSize: 14}}
                        >
                            <Breadcrumbs
                                crumbs={props.breadcrumbs.crumbs}
                                location={props.breadcrumbs.location}
                            />
                        </div>
                    )
                    : null
            }

            <div
                className={classes.changeDisplay}
                style={styles.main}
            >

                <div style={styles.contentWrapper}>
                    <Heading>
                        Alliance Disposal
                    </Heading>
                    <div style={{fontSize: 13, marginBottom: 12, fontWeight: 300, maxWidth: 335}}>
                        We are the go to source for on-demand dumpster rentals and waste services. Serving New Jersey, Delaware, Pennsylvania and Connecticut. <b>Next business day delivery with 24 hour notice!</b>
                    </div>

                    {mainLinks.map(link => (
                        <Link
                            key={link.label}
                            to={link.to}
                            style={styles.link}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div style={styles.contentWrapper}>
                    <Heading>
                        Contact
                    </Heading>

                    <Link
                        to={Paths.contact}
                        style={styles.link}
                    >
                        Contact us
                    </Link>
                    <TelDisplay
                        style={styles.link}
                    />
                    <a
                        href={`mailto:${Paths.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.link}
                    >
                        {Paths.email}
                    </a>
                </div>

                <div style={styles.contentWrapper}>
                    <Heading>
                        Resources
                    </Heading>

                    {resourcesLinks.map(link => (
                        <Link
                            key={link.label}
                            to={link.to}
                            style={styles.link}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

            </div>

            <div style={styles.bottomDiv}>
                <div style={{marginBottom: 12}}>
                    v1.1.3
                </div>
                <div>
                    © Alliance Disposal LLC {new Date().getFullYear()}
                </div>
            </div>

        </footer>
    );
};

const styles = {
    wrapper: {
        color: '#5F6364',
        backgroundColor: '#F7F9FB',
        fontSize: 15
    },
    topBar: {
        display: 'flex',
        height: 58,
        alignItems: 'center',
        backgroundColor: '#E8EBEE',
        paddingLeft: 20
    },
    main: {
        padding: '37px 20px 0px',
        maxWidth: 950,
        margin: '0 auto'
    },
    contentWrapper: {
        marginBottom: 25,
        display: 'flex',
        flexDirection: 'column'
    },
    heading: {
        fontWeight: 600,
        marginBottom: 12
    },
    link: {
        color: '#5F6364',
        marginBottom: 12
    },
    bottomDiv: {
        textAlign: 'center',
        margin: '0px auto',
        fontSize: 13,
        color: 'rgba(95, 99, 100, 0.5)',
        fontWeight: 300,
        marginBottom: 12
    }
}

export default Footer;