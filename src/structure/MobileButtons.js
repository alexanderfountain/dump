import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby';
import { connect } from 'react-redux';

import Badge from '@material-ui/core/Badge';

import ShoppingCart from '@material-ui/icons/ShoppingCartOutlined';

import Paths from '../constants/Paths';
import { windowGlobal } from '../constants/Window';

const MobileButtons = (props) => {

    const [hideOnScroll, setHideOnScroll] = useState(false);

    useEffect(() => {
        windowGlobal.addEventListener('scroll', handleScroll, {passive: true});
        return () => {
            windowGlobal.removeEventListener('scroll', handleScroll)
        }
    }, [])
    
    
    
    let lastScroll = 0;
    function handleScroll() {
        const st = windowGlobal.pageYOffset || document.documentElement.scrollTop;
        
        if (st > lastScroll && st >= 5){
            setHideOnScroll(true);
        } else {
            setHideOnScroll(false);
        }
        lastScroll = st;
    }

    return (
        <div 
            style={{
                width: '100%', color: '#FFFFFF', textAlign: 'center', fontWeight: 500, fontSize: 16,
                height: hideOnScroll ? 0 : null,
                opacity: hideOnScroll ? 0 : 1,
                transition: hideOnScroll ? 'opacity 50ms 0ms, height 500ms 500ms' : 'height 500ms 500ms, opacity 500ms 0ms' 
                
            }}
            className={props.moduleClasses.mobileDisplay}
        >
            <div
                style={{flex: 0.5, backgroundColor: '#007AFF', padding: 7, cursor: 'pointer', color: '#FFFFFF'}}
                className={`${props.moduleClasses.mobileBtnInnerShadow} ${props.orders === 0 ? 'schedule-a-service' : null}`}
                onClick={() => navigate(props.orders > 0 ? Paths.cart : Paths.schedule)}
            >
                {
                    props.orders > 0
                        ? (
                            <Badge badgeContent={props.orders} color="secondary">
                                <ShoppingCart
                                    style={{fontSize: 25, margin: '-7px 0'}}
                                />
                            </Badge>
                        )
                        : 'TAP TO ORDER'
                }
            </div>

            <a
                href={`tel:${props.tel}`}
                style={{flex: 0.5, backgroundColor: '#3F51B5', padding: 7, cursor: 'pointer', color: '#FFFFFF'}}
                className={props.moduleClasses.mobileBtnInnerShadow}
            >
                TAP TO CALL
            </a>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        tel: state.app.tel
    };
};

export default connect(mapStateToProps)(MobileButtons);