import React, { useState } from 'react';

import { connect } from 'react-redux';

import moduleClasses from './Navbar.module.css';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';

import DesktopToolbar from './DesktopToolbar';
import MobileButtons from './MobileButtons';
import MobileToolbar from './MobileToolbar';

import Colors from '../constants/Colors';
import Paths from '../constants/Paths';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    flexShrink: 0,
    backgroundColor: Colors.mainBg
  },
  drawerPaper: {
    width: 300,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'center',
  },
}));

const Navbar = (props) => {
    const classes = useStyles();
    const theme = useTheme();

    const activeStyle = {color: Colors.tintColor};
    
    const [navMenus, setNavMenus] = useState([
        {
            label: 'Services',
            url: Paths.services,
            open: false,
            items: [
                {
                    label: 'Roll off dumpster rentals',
                    url: Paths.rollOffDetails
                },
                {
                    label: 'Construction dumpsters',
                    url: Paths.constructionDumpsterRentals
                },
                {
                    label: 'Commercial dumpsters',
                    url: Paths.commDumpsterDetails
                },
                {
                    label: 'Concrete dumpsters',
                    url: Paths.concreteDumpsters
                },
                {
                    label: 'Residential services',
                    url: Paths.resiDetails
                },
                {
                    label: 'Junk removal',
                    url: Paths.junkRemovalDetails
                }
            ]
        },
        // {label: 'Roll Off Dumpster Rentals', url: Paths.rollOffDetails},
        {label: 'Businesses', url: Paths.commDumpsterDetails},
        {label: 'Homeowners', url: Paths.resiDetails},
        // {label: 'Junk Removal', url: Paths.junkRemovalDetails},
        {
            label: 'Guides',
            url: Paths.guideWhatCanGoIntoDumpster,
            open: false,
            items: [
                {
                    label: 'All Guides',
                    url: Paths.guides
                },
                {
                    label: 'How to rent a dumpster',
                    url: Paths.howToRentADumpster
                },
                {
                    label: 'Roll off dumpster sizing guide',
                    url: Paths.rollOffSizingGuide
                },
                {
                    label: 'What can and cannot go into a dumpster',
                    url: Paths.guideWhatCanGoIntoDumpster
                }
            ]
        },
        {label: 'About', url: Paths.about},
        {label: 'Contact', url: Paths.contact}
    ]);

    const onNavMenuToggle = (index, state) => {
        const updatedState = [...navMenus];
        const updatedItem = {
            ...updatedState[index],
            open: state === 'open' ? true : false
        }

        updatedState[index] = {...updatedItem};

        setNavMenus(updatedState);
    }

    return (
        <div className={classes.root}>

            {/* Resets CSS Styles */}
            <CssBaseline />

            <AppBar
                position="fixed"
                style={{
                    backgroundColor: '#FFFFFF',
                    color: '#111111',
                    borderBottomRightRadius: 4,
                    borderBottomLeftRadius: 4,
                    ...props.headerStyles
                }}
            >
                
                {/* Switch Between Mobile & Desktop Toolbar with class */}
                <DesktopToolbar
                    orders={props.orders.length}
                    navMenus={navMenus}
                    itemToggle={onNavMenuToggle}
                    activeStyle={activeStyle}
                    moduleClasses={moduleClasses}
                />
                            
                {
                    props.hideMobileBtns
                        ? null
                        : (
                            // CTA Buttons for mobile
                            <MobileButtons
                                orders={props.orders.length}
                                moduleClasses={moduleClasses}
                            />
                        )
                }
                <MobileToolbar
                    navMenus={navMenus}
                    classes={classes}
                    theme={theme}
                    itemToggle={onNavMenuToggle}
                    activeStyle={activeStyle}
                    moduleClasses={moduleClasses}
                />

            </AppBar>
            
            {/* Main Content Passed in From Wrapped Component */}
            <main
                style={{
                    flexGrow: 1,
                    backgroundColor: props.bgColor ? props.bgColor : '#FFFFFF',
                    paddingTop: props.hideMobileBtns ? 56 : null,
                    ...props.mainStyles,
                }}
                className={`
                    ${moduleClasses.mainPadding}
                    ${props.restrictWidth ? moduleClasses.mainWidth : null}
                `}
            >
                
                {props.children}

            </main>

        </div>
    );
}

const mapStateToProps = state => {
    return {
        orders: state.app.orders
    }
}

export default connect(mapStateToProps)(Navbar);