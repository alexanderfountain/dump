import React, { Component } from 'react';
import { Link } from 'gatsby';

import moment from 'moment';

import DialogWrapper from '../DialogWrapper';
import GetSkus from '../inputs/GetSkus';
import InputChecker from '../inputs/InputChecker';

import { statesAbb } from '../../constants/Data';
import Paths from '../../constants/Paths';

class DeliveryDetails extends Component {

    state = {
        deliveryInputs: {
            deliveryDate: {
                key: 'deliveryDate',
                label: 'Delivery date',
                type: 'datePicker',
                superdense: true,
                minDate: moment(new Date()).add(1, 'd'),
                shouldDisableDate: (date) => (date.day() === 0 || date.day() === 6),
                autoOk: true,
                value: this.props.order.deliveryDate,
                required: true,
                valid: true
            },
            phone: {
                key: 'phone',
                label: 'Phone',
                type: 'input',
                phone: true,
                superdense: true,
                value: this.props.order.phone,
                required: true,
                valid: false
            },
            instructions: {
                key: 'instructions',
                label: 'Delivery instructions',
                placeholder: 'Where specifically should we place the dumpster?',
                type: 'input',
                value: this.props.order.instructions,
                superdense: true,
                multiline: true,
                rows: 5,
                required: true,
                valid: false
            },
        },
        analogDeliveryInputs: {
            address: {
                key: 'address',
                label: 'Street address',
                type: 'input',
                autoComplete: 'address-line1',
                superdense: true,
                value: this.props.order.addressComponents.address,
                required: true,
                valid: this.props.order.addressComponents.address ? true : false
            },
            address2: {
                key: 'address2',
                label: 'Apartment, suite, unit, etc.',
                type: 'input',
                autoComplete: 'address-line2',
                superdense: true,
                value: '',
                required: false,
                valid: true
            },
            town: {
                key: 'town',
                value: this.props.order.addressComponents.town,
                valid: true
            },
            state: {
                key: 'state',
                label: 'State',
                type: 'select',
                superdense: true,
                value: this.props.order.addressComponents.state,
                options: [...statesAbb],
                required: true,
                valid: true,
                native: true
            },
            zip: {
                key: 'zip',
                label: 'Zip code',
                type: 'input',
                autoComplete: 'postal-code',
                superdense: true,
                value: this.props.order.addressComponents.zip,
                required: true,
                valid: this.props.order.addressComponents.zip ? true : false
            }
        },
        noPricingTown: null,
        showPricingChanged: false,
        resetValue: false,
        newCounty: null,
        newSkus: null
    }

    inputChangedHandler = (text, valid, item, group) => {
        const updatedGroup = {...this.state[group]};
        const updatedInput = {
            ...updatedGroup[item.key],
            value: text,
            valid: valid
        };
        updatedGroup[item.key] = updatedInput;

        this.setState({[group]: updatedGroup}, () => {

            if (group === 'deliveryInputs') {
                this.props.updateOrder(item.key, text);
            }

            if (group === 'analogDeliveryInputs') {
                this.props.updateOrder(
                    'addressComponents',
                    {
                        ...this.props.order.addressComponents,
                        [item.key]: text
                    },
                    Object.values(this.state.analogDeliveryInputs).every(obj => (obj.valid))
                        ? (
                            this.state.analogDeliveryInputs.address.value
                            + (
                                this.state.analogDeliveryInputs.address2.value
                                    ? ' ' + this.state.analogDeliveryInputs.address2.value
                                    : ''
                            ) + ', '
                            + this.state.analogDeliveryInputs.town.value
                            + ', ' + this.state.analogDeliveryInputs.state.value
                            + ' ' + this.state.analogDeliveryInputs.zip.value
                        )
                        : null
                )
            }

        });
    }

    townChangedHandler = (returnObj) => {
        if (!returnObj.pricingExists) {
            this.setState({noPricingTown: returnObj.displayAddress});
        } else {
            if (returnObj.county !== this.props.order.county) {
                this.setState({showPricingChanged: true, newCounty: returnObj});
            } else {
                this.inputChangedHandler(
                    returnObj.displayAddress, true, {key: 'town'}, 'analogDeliveryInputs'
                );
            }
        }
    }

    changeCountyHandler = () => {
        this.props.updateOrderRedux(this.props.order);
    }

    render() {
        return (
            <div>
                {/* Have to check town input against what we have */}
                {
                    Object.values(this.state.analogDeliveryInputs).map(item => {
                        if (item.key === 'town') {
                            return (
                                <GetSkus
                                    key={item.key}
                                    onSelect={this.townChangedHandler}
                                    setProductSkus={(skus) => this.setState({newSkus: skus})}
                                    label='Town / city'
                                    address={this.props.order.addressComponents.town}
                                    searchOptions={{types: ['(cities)']}}
                                    resetValue={this.state.resetValue}
                                    resetable
                                />
                            )
                        }
                        
                        return (
                            <InputChecker
                                key={item.key}
                                item={item}
                                onChangeHandler={
                                    (text, valid) => this.inputChangedHandler(text, valid, item, 'analogDeliveryInputs')
                                }
                            />
                        )
                    })
                }

                {
                    Object.values(this.state.deliveryInputs).map(item => {
                        return (
                            <InputChecker
                                key={item.key}
                                item={item}
                                onChangeHandler={
                                    (text, valid) => this.inputChangedHandler(text, valid, item, 'deliveryInputs')
                                }
                            />
                        )
                    })
                }

                {/* Dialogs */}
                <DialogWrapper
                    open={
                        (this.state.noPricingTown ? true : false)
                        || this.state.showPricingChanged
                    }
                    onClose={() => this.setState({noPricingTown: null, showPricingChanged: false, resetValue: true}, () => setTimeout(() => this.setState({resetValue: false})), 500)}
                    cancelLabel={this.state.showPricingChanged ? null : 'close'}
                    actionBtn={this.state.showPricingChanged ? 'update' : null}
                    onAction={this.changeCountyHandler}
                >
                    {
                        this.state.noPricingTown
                            ? (
                                <div>
                                    <h3>
                                        Online Checkout Unavailable
                                    </h3>
                                    <p>
                                        Online checkout is not available for <b>{this.state.noPricingTown}</b>. 
                                    </p>
                                    <p>
                                        If this was a mistake close the modal and enter the correct town.
                                    </p>
                                    <p>
                                        Otherwise <Link to={Paths.quoteRollOff}>request a free quote</Link>.
                                    </p>
                                </div>
                            )
                            : null
                    }

                    {
                        this.state.showPricingChanged
                            ? (
                                <div>
                                    <h3>
                                        Pricing Change
                                    </h3>
                                    <p>
                                        You changed the delivery town to one that is in a different county than the one originally selected. Pricing changes from county to county due to differences in waste flow regulations.
                                    </p>
                                    <p>
                                        Click <b>UPDATE</b> to get new pricing for this dumpster. Or click <b>CANCEL</b> to undue the change.
                                    </p>
                                </div>
                            )
                            : null
                    }
                </DialogWrapper>

            </div>
        );
    }
};

export default DeliveryDetails;