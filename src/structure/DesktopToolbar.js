import React from 'react';
import { Link, navigate } from 'gatsby';

import Badge from '@material-ui/core/Badge';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Toolbar from '@material-ui/core/Toolbar';

import ShoppingCart from '@material-ui/icons/ShoppingCartOutlined';

import GradientButton from '../components/buttons/GradientButton';

import Colors from '../constants/Colors';
import Paths from '../constants/Paths';

import { ALogo } from '../assets/icons/logos';

import TelDisplay from '../components/TelDisplay';

const DesktopToolbar = (props) => {
    
    return (
        <div
            className={props.moduleClasses.desktopDisplay}
        >
            <Toolbar
                style={{minHeight: 56, alignItems: 'center', paddingLeft: 24, paddingRight: 24, justifyContent: 'space-between', flex: 1, maxWidth: 1200, margin: '0 auto'}}
                itemScope itemType="https://www.schema.org/SiteNavigationElement"
            >
                <Link
                    style={{display: 'flex'}}
                    to={Paths.home}
                >
                    <ALogo
                        size={20}
                        itemProp="logo"
                    />
                </Link>

                {
                    props.navMenus.map((item, index) => (
                        <div
                            key={item.label}
                            onMouseEnter={() => props.itemToggle(index, 'open')}
                            onMouseLeave={() => props.itemToggle(index, 'close')}
                            style={{position: 'relative', display: 'flex'}}
                            itemProp="name"
                        >
                            <Link
                                itemProp="url"
                                to={item.url}
                                style={{color: '#232323', fontSize: 15}}
                                activeStyle={props.activeStyle}
                            >
                                {item.label}
                            </Link>
                            {
                                item.items
                                    ? (
                                        <Collapse
                                            in={item.open}
                                            timeout='auto'
                                            unmountOnExit
                                            style={{zIndex: 999, position: 'absolute', top: 25, backgroundColor: '#FFFFFF', boxShadow: '0 1px 4px rgba(0, 0, 0, 0.28)', borderRadius: 4}}
                                        >
                                            <List component="div" disablePadding>
                                                <ListItem
                                                    style={{color: '#232323', borderBottom: 'solid 1px #D8D8D8'}}
                                                >
                                                    <b>{item.label}</b>
                                                </ListItem>
                                                {
                                                    item.items.map(linkItem => (
                                                        <Link
                                                            itemProp="url"
                                                            key={linkItem.label}
                                                            to={linkItem.url}
                                                            style={{color: '#232323', fontSize: 15, whiteSpace: 'nowrap'}}
                                                            activeStyle={props.activeStyle}
                                                        >
                                                            <ListItem button itemProp="name">
                                                                {linkItem.label}
                                                            </ListItem>
                                                        </Link>
                                                    ))
                                                }
                                            </List>
                                        </Collapse>
                                    )
                                    : null
                            }
                        </div>
                    ))
                }

                <TelDisplay style={{fontSize: 15, color: Colors.allianceOrange, fontWeight: 500}} />

                {
                    props.orders > 0
                        ? (
                            <IconButton
                                onClick={() => navigate(Paths.cart)}
                            >
                                <Badge badgeContent={props.orders} color="secondary">
                                    <ShoppingCart
                                        style={{fontSize: 30}}
                                    />
                                </Badge>
                            </IconButton>
                        )
                        : (
                            <GradientButton
                                onClick={() => navigate(Paths.schedule)}
                                style={{fontSize: 15, height: 26, padding: '0 7px'}}
                                className='schedule-a-service'
                            >
                                order online
                            </GradientButton>
                        )
                }
                
            </Toolbar>
        </div>
    );
}

export default DesktopToolbar;