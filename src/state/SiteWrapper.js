import React, { Component } from 'react';

import { connect } from 'react-redux';
import { retrieveOrders, setTel, setSearchParams } from './app';

import queryString from 'query-string';

import { localStorageVars } from '../constants/Window';

class SiteWrapper extends Component {

    constructor() {
        super();
        this.state = {
            isIE: false
        };
    }

    componentDidMount() {

        setTimeout(() => {
            const script = document.createElement("script");
            script.text = "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '279969419585821');fbq('track', 'PageView');"
            document.head.appendChild(script);

            const pixel = document.createElement("IMG");
            pixel.setAttribute("src", "https://www.facebook.com/tr?id=279969419585821&ev=PageView&noscript=1");
            pixel.setAttribute("height", "1");
            pixel.setAttribute("width", "1");
            pixel.setAttribute("style", "display:none");
            document.head.appendChild(pixel);
        }, 7000)

        if (this.props.location.search) {
            const searchObj = queryString.parse(this.props.location.search);
            if (searchObj.id === 'ppc') {
                this.props.onSetTel('+1-732-654-0147', '(732) 654-0147');
            }
            if (window.localStorage) {
                window.localStorage.setItem(localStorageVars.searchParams, this.props.location.search);
                this.props.onSetSearchParams(this.props.location.search);
            }
        } else {
            const searchStorage = window.localStorage
                ? window.localStorage.getItem(localStorageVars.searchParams)
                : null;
            if (searchStorage) {
                this.props.onSetSearchParams(searchStorage);
            }
        }

        const orderStorage = window.localStorage
            ? JSON.parse(window.localStorage.getItem(localStorageVars.orders))
            : null;

        if (orderStorage && this.props.orders.length === 0) {
            if (orderStorage.length === 0) {
                window.localStorage.removeItem(localStorageVars.orders)
            } else {
                this.props.onRetrieveOrders(orderStorage);
            }
        }

    }

    render() {

        return (
            <>
                {this.props.element}
            </>
        );
        
    }
};

const mapStateToProps = state => {
    return {
        orders: state.app.orders
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRetrieveOrders: (orders) => dispatch(retrieveOrders(orders)),
        onSetTel: (tel, telDisplay) => dispatch(setTel(tel, telDisplay)),
        onSetSearchParams: (searchParams) => dispatch(setSearchParams(searchParams))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SiteWrapper);