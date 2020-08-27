import React, { Component } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import { connect } from 'react-redux';
import { setProducts } from '../../state/app';

// import { getProducts, getSkus } from '../../axios/stripe';

import GooglePlaces from './GooglePlaces';

import Colors from '../../constants/Colors';

class GetSkus extends Component {

    state = {
        isLoading: false,
        axiosError: false,
        resetValue: null
    }

    componentDidMount() {
        if (!this.props.products || this.props.products.length <= 0) {
            this.onGetProducts();
        }
    }

    componentDidUpdate() {
        if (this.props.resetValue) {
            this.resetAddress();
        }
    }

    onGetProducts = () => {
        this.changeLoadingHandler(true);
        import('../../axios/stripe').then(stripe => {
            stripe.getProducts()
                .then(res => {
                    this.props.onSetProducts(res.data.data);
                    this.changeLoadingHandler(false);
                })
                .catch(error => {
                    console.warn(error)
                    this.setState({axiosError: true});
                    this.changeLoadingHandler(false);
                });
        });   
    }

    onGetSkus = (productId) => {
        this.changeLoadingHandler(true);
        import('../../axios/stripe').then(stripe => {
            stripe.getSkus({'product': productId})
                .then(res => {
                    this.props.setProductSkus(res.data.data);
                    this.changeLoadingHandler(false);
                })
                .catch(error => {
                    console.warn(error)
                    this.setState({axiosError: true});
                    this.changeLoadingHandler(false);
                });
        });
    }

    changeLoadingHandler = (newState) => {
        this.setState({isLoading: newState});
        if (this.props.onChangeLoading) this.props.onChangeLoading(newState);
    }

    onAddressSelectHandler = (result) => {
        // If types contians street_number set address otherwise don't
        let streetAddress = (
            result.address_components.find(
                item => item.types[0] === 'street_number'
            )
        );

        let state = (
            result.address_components.find(
                item => item.types[0] === 'administrative_area_level_1'
            ).short_name
        );

        let town = (
            result.address_components.find(item => item.types[0] === 'locality')
        );

        let county = (
            result.address_components.find(
                item => item.types[0] === 'administrative_area_level_2'
            ).long_name
        );

        let addressComponents = ({
            address: streetAddress
                ? streetAddress.long_name
                    + ' ' + result.address_components.find(item => item.types[0] === 'route').long_name
                : '',
            town: town ? town.long_name : '',
            county: county,
            state: state,
            zip: streetAddress
                ? result.address_components.find(item => item.types[0] === 'postal_code').long_name
                : ''
        });

        county = county.replace(' ', '');
        county = county.replace('County', '');
        county = state + county;
        county = county.trim();

        let exists = false;

        if (this.props.products) {
            exists = this.props.products.find(item => item.metadata.county === county);
        };

        if (exists) {
            this.onGetSkus(exists.id)
        };

        if (
            this.props.searchOptions
            && this.props.searchOptions.types
            && this.props.searchOptions.types[0] === '(cities)'
        ) {

            if (!exists) {
                this.resetAddress();
            }

        };

        this.props.onSelect({
            pricingExists: exists,
            displayAddress: result.formatted_address,
            county: county,
            addressComponents: addressComponents
        });

    }

    resetAddress = () => {
        setTimeout(() => {
            this.setState({resetValue: this.props.address}, () => {
                setTimeout(() => {
                    this.setState({resetValue: null})
                }, 500)
            })
        }, 500);
    }

    render() {
        return (
            <div>
                <div style={{display: 'flex'}}>
                    <GooglePlaces
                        textFieldProps={{
                            label: this.props.label
                                ? this.props.label :
                                this.props.label === false ? null : 'Delivery address or town',
                            ...this.props.textFieldProps
                        }}
                        onSelect={this.onAddressSelectHandler}
                        address={this.props.address}
                        searchOptions={this.props.searchOptions}
                        resetable={this.props.resetable}
                        resetValue={this.state.resetValue}
                        textFieldStyle={this.props.textFieldStyle}
                        wrapperStyles={{flex: 1}}
                        startAddress={this.props.startAddress}
                        superdense={this.props.large ? false : true}
                        disabled={this.state.isLoading}
                    />
                    {
                        this.state.isLoading
                            ? <CircularProgress />
                            : null
                    }
                </div>
                
                
                {
                    this.state.axiosError
                        ? <div
                            style={{color: Colors.error, fontSize: 14, margin: '-23px 0 23px', paddingLeft: 10}}
                        >
                            An error occurred. Please reload the page.
                        </div>
                        : null
                }
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        products: state.app.products
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetProducts: (products) => dispatch(setProducts(products))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GetSkus);