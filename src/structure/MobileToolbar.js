import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';

import Paths from '../constants/Paths';

import { ALogo, LogoStartingName } from '../assets/icons/logos';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

const MobileToolbar = (props) => {

    const [open, setOpen] = useState(false);

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }

    return (
        <>
            {/* Toolbar */}
            <div
                className={props.moduleClasses.mobileDisplay}
            >
                <Toolbar
                    style={{ minHeight: 56, justifyContent: 'center', alignItems: 'center', flex: 1}}
                    itemScope itemType="https://www.schema.org/SiteNavigationElement"
                >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        style={{position: 'absolute', left: 20}}
                    >
                        <MenuIcon />
                    </IconButton>

                    <div
                        onClick={() => navigate(Paths.home)}
                        style={{display: 'flex', paddingLeft: 20}}
                    >
                        <LogoStartingName
                            height={18}
                        />
                    </div>
                </Toolbar>
            </div>

            {/* Drawer */}
            <Drawer
                className={props.classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: props.classes.drawerPaper,
                }}
            >
                <div className={props.classes.drawerHeader}>

                    <Link
                        style={{display: 'flex'}}
                        to={Paths.home}
                    >
                        <ALogo
                            size={26}
                        />
                    </Link>

                    <IconButton
                        onClick={handleDrawerClose}
                        style={{position: 'absolute', right: 8}}
                    >
                        {props.theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List 
                    component='nav'
                >

                    {props.navMenus.map((item, index) => (
                        <ListItem
                            key={item.label}
                            button
                            onClick={() => props.itemToggle(index, item.open ? 'close' : 'open')}
                            style={{
                                // borderBottom: 'solid 1px #D8D8D8'
                                position: 'relative',
                                flexWrap: 'wrap'
                            }}
                        >
                            <div style={{borderBottom: 'solid 1px #D8D8D8', position: 'absolute', width: 'calc(100% - 32px)', bottom: 0, left: 16}} />
                            <ListItemText
                                itemProp="name"
                                primary={
                                    <Link
                                        itemProp="url"
                                        to={item.url}
                                        style={{color: '#232323'}}
                                        activeStyle={props.activeStyle}
                                    >
                                        {item.label}
                                    </Link>
                                }
                            />
                            
                            {
                                item.items ? (<>
                                    <div>
                                        {item.open ? <ExpandLess /> : <ExpandMore />}
                                    </div>
                                    <Collapse
                                        in={item.open}
                                        timeout="auto"
                                        unmountOnExit
                                        style={{width: '100%'}}
                                    >
                                        <List component="div" disablePadding>
                                            {
                                                item.items.map(linkItem => (
                                                    <Link
                                                        itemProp="url"
                                                        key={linkItem.label}
                                                        to={linkItem.url}
                                                        style={{color: '#232323'}}
                                                        activeStyle={props.activeStyle}
                                                    >
                                                        <ListItem
                                                            button
                                                            itemProp="name"
                                                            style={{paddingTop: 15, paddingBottom: 15}}
                                                        >
                                                            {linkItem.label}
                                                        </ListItem>
                                                    </Link>
                                                ))
                                            }
                                        </List>
                                    </Collapse>
                                </>)
                                : null
                            }
                        </ListItem>
                    ))}
                    
                </List>
            </Drawer>

            {/* Overlay */}
            {
                open
                    ? <div
                        style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '100vw', height: '100vh', position: 'absolute', zIndex: 1150, top: 0}}
                        onClick={handleDrawerClose}
                    />
                    : null
            }

        </>
    );
};

export default MobileToolbar;
