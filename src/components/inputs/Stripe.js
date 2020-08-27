import React, { Component } from 'react';

import { CardElement, Elements, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// import { createCustomer, createCharge } from '../../axios/stripe';

import CircularProgress from '@material-ui/core/CircularProgress';

import AlertBox from '../AlertBox';
import Checkbox from '../inputs/Checkboxes';
import InputChecker from '../inputs/InputChecker';
import PrimaryButton from '../buttons/PrimaryButton';
import TosCheckbox from '../ordering/TosCheckbox';

import Colors from '../../constants/Colors';
import Paths from '../../constants/Paths';

import { statesAbb } from '../../constants/Data';

import{ captureException } from '@sentry/gatsby';

class CardForm extends Component {
    state = {
        billingInputs: {
            address: {
                key: 'address',
                label: 'Street address',
                type: 'input',
                autoComplete: 'billing address_line1',
                superdense: true,
                value: '',
                required: true,
                valid: false
            },
            address2: {
                key: 'address2',
                label: 'Apartment, suite, unit, etc.',
                type: 'input',
                autoComplete: 'billing address-line2',
                superdense: true,
                value: '',
                required: false,
                valid: true
            },
            town: {
                key: 'town',
                label: 'Town / city',
                type: 'input',
                autoComplete: 'billing address-level2',
                superdense: true,
                value: '',
                required: true,
                valid: false
            },
            state: {
                key: 'state',
                label: 'State',
                type: 'select',
                superdense: true,
                value: '',
                options: [...statesAbb],
                required: true,
                valid: false
            },
            zip: {
                key: 'zip',
                label: 'Zip code',
                type: 'input',
                autoComplete: 'billing postal-code',
                superdense: true,
                value: '',
                required: true,
                valid: false
            }
        },
        paymentInputs: {
            firstName: {
                key: 'firstName',
                label: 'First name',
                type: 'input',
                autoComplete: 'billing given-name',
                superdense: true,
                value: '',
                required: true,
                valid: false
            },
            lastName: {
                key: 'lastName',
                label: 'Last name',
                type: 'input',
                autoComplete: 'billing family-name',
                superdense: true,
                value: '',
                required: true,
                valid: false
            },
            email: {
                key: 'email',
                label: 'Email',
                type: 'input',
                autoComplete: 'email',
                email: true,
                superdense: true,
                value: '',
                required: true,
                valid: false
            },
            company: {
                key: 'company',
                label: 'Company',
                type: 'input',
                superdense: true,
                value: '',
                required: false,
                valid: true
            }
        },
        billToDiffAddress: false,
        paymentOption: 'stripe',
        errorMessage: '',
        tosAgreed: false,
        cardError: null,
        isLoading: false,
        cardComplete: false
    };

    handleChange = (obj) => {
        if (obj.error) {
            this.setState({errorMessage: obj.error.message});
        } else if (!obj.error && this.state.errorMessage) {
            this.setState({errorMessage: ''})
        }
    };

    inputChangedHandler = (text, valid, item, group) => {
        const updatedGroup = {...this.state[group]};
        const updatedInput = {
            ...updatedGroup[item.key],
            value: text,
            valid: valid
        };
        updatedGroup[item.key] = updatedInput;

        this.setState({[group]: updatedGroup}, () => {
            if (
                item.key === 'firstName'
                || item.key === 'lastName'
                || item.key === 'email'
            ) {
                this.props.updateOrder(item.key, text);
            }
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        
        if (!this.props.stripe || !this.props.elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            console.warn("Stripe.js hasn't loaded yet.");
            alert('Stripe has not loaded yet. Please press ok and try again.')
            return;
        };

        this.setState({isLoading: true});

        const cardElement = this.props.elements.getElement(CardElement);
            
        let tokenData = {
            type: 'card',
            usage: 'reusable',
            owner: {
                name: this.state.paymentInputs.firstName.value + ' ' + this.state.paymentInputs.lastName.value,
                email: this.state.paymentInputs.email.value.toLowerCase().trim(),
                address: {
                    city: this.props.deliveryAddress.town,
                    line1: this.props.deliveryAddress.address,
                    line2: this.props.deliveryAddress.address2
                        ? this.props.deliveryAddress.address2
                        : '',
                    state: this.props.deliveryAddress.state
                }
            }
        };

        if (this.state.billToDiffAddress) {
            tokenData = {
                ...tokenData,
                owner: {
                    ...tokenData.owner,
                    address: {
                        city: this.state.billingInputs.town.value,
                        line1: this.state.billingInputs.address.value,
                        line2: this.state.billingInputs.address2.value,
                        state: this.state.billingInputs.state.value
                    }
                }
            }
        }
   
        this.props.stripe.createSource(cardElement, tokenData)
            .then(res => {
                if (!res.error) {
                    import('../../axios/stripe').then(stripe => {
                        stripe.createCustomer({
                            'email': this.state.paymentInputs.email.value.toLowerCase().trim(),
                            'sourceId': res.source.id,
                            'name': tokenData.owner.name,
                            'phone': this.props.phone
                        })
                            .then(customerRes => {
                                const results = JSON.parse(customerRes.data.body);
                                if (results.res.id) {
                                    this.chargeCardHandler(res.source, results.res);
                                }
                            })
                            .catch(error => {
                                console.warn('StripeInput Create Customer Error: ', error);
                                if (error.error) {
                                    captureException(error.error);
                                } else {
                                    captureException(error);
                                };
                                this.setState({isLoading: false, cardError: `An error occurred please check your card information and try again or call ${Paths.telDisplay}`});
                            });
                    });

                } else {
                    console.warn('StripeInput Create Source Error: ', res.error);
                    captureException(res.error);
                    this.setState({isLoading: false, cardError: `An error occurred please check your card information and try again or call ${Paths.telDisplay}`});
                };
            });

        
    };

    chargeCardHandler = (token, customer) => {
        const amount = (this.props.amount * 100).toString();

        const data = {
            amount: amount,
            token: token.id,
            customer: customer.id,
            email: this.state.paymentInputs.email.value.toLowerCase().trim()

            // token: 'tok_chargeDeclinedExpiredCard',
            // token: 'tok_bypassPending',
        }

        import('../../axios/stripe').then(stripe => {
            stripe.createCharge(data)
                .then(res => {
                    const results = JSON.parse(res.data.body);

                    if (results.error) {
                        console.warn('Charge Catch 2: ', results.error);
                        captureException(results.error);
                        this.setState({isLoading: false, cardError: results.error});
                    } else if (results.charge && results.charge.status === 'succeeded') {
                        const returnObj = {
                            chargeId: results.charge.id,
                            name: this.state.paymentInputs.lastName.value + ', ' + this.state.paymentInputs.firstName.value,
                            email: this.state.paymentInputs.email.value,
                            billingAddress: JSON.stringify(results.charge.billing_details),
                            company: this.state.paymentInputs.company.value
                        };
                        // Send confirmation email to sales@ & go to confirmation page
                        this.props.onChargeSuccessful(returnObj);
                    } else {
                        console.warn('Unidentified response:', results);
                        captureException(results);
                        this.setState({isLoading: false, cardError: `An error occurred please check your card information and try again or call ${Paths.telDisplay}`});
                    }


                })
                .catch(error => {
                    console.warn('Charge Catch 1: ', error);
                    captureException(error);
                    this.setState({cardError: `An error occurred and your card may have already been charged. Please call (201) 293-6346 to confirm your order.`});
                });
        })
    
    }

    render() {
        return (
            <div style={{marginTop: 37}}>
                <form onSubmit={this.handleSubmit.bind(this)}>

                    <h3
                        style={{marginBottom: 17}}
                    >
                        Payment information
                    </h3>

                    <div
                        style={{marginBottom: this.state.billToDiffAddress ? 17 : 25}}
                    >
                        <Checkbox
                            label='Bill to different address?'
                            checked={this.state.billToDiffAddress}
                            value={this.state.billToDiffAddress}
                            onChange={() => this.setState({billToDiffAddress: !this.state.billToDiffAddress})}
                            superdense
                        />
                    </div>

                    {
                        this.state.billToDiffAddress
                            ? (
                                Object.values(this.state.billingInputs).map(item => {
                                    return (
                                        <InputChecker
                                            key={item.key}
                                            item={item}
                                            onChangeHandler={
                                                (text, valid) => this.inputChangedHandler(text, valid, item, 'billingInputs')
                                            }
                                        />
                                    )
                                })
                            )
                            : null
                    }

                    {
                        Object.values(this.state.paymentInputs).map(item => {
                            return (
                                <InputChecker
                                    key={item.key}
                                    item={item}
                                    onChangeHandler={
                                        (text, valid) => this.inputChangedHandler(text, valid, item, 'paymentInputs')
                                    }
                                />
                            )
                        })
                    }
                
                    {/* Stripe CC Field */}
                    <div
                        style={{backgroundColor: '#FFFFFF', borderRadius: 4, padding: '10px 14px', boxShadow: 'rgba(50, 50, 93, 0.14902) 0px 1px 3px, rgba(0, 0, 0, 0.0196078) 0px 1px 0px'}}
                    >
                        <CardElement
                            onChange={this.handleChange}
                            style={{base: {fontSize: '18px'}}}
                        />
                    </div>
                
                    {/* Error Alert Message For CC Input */}
                    <div
                        style={{color: Colors.error, fontSize: 16, paddingLeft: 14, paddingTop: 5}}
                        role="alert"
                    >
                        {this.state.errorMessage}
                    </div>

                    {/* Disclaimers && Notes */}
                    <div
                        style={{marginTop: 37, fontSize: 14, color: '#757575', marginBottom: 17}}
                    >
                        <span style={{fontWeight: 600}}>Note:</span> {
                            new Date().getDay() === 0
                                ? 'For orders placed on Sunday, a Monday delivery cannot be guaranteed. We will try our best to do so, otherwise a Tuesday delivery is guaranteed.'
                                : new Date().getDay() === 6
                                    ? 'For orders placed on Saturday, a Monday delivery is only guaranteed for orders placed before 10am'
                                    : 'Next day delivery is only guaranteed for orders placed before 12pm.'
                        }
                    </div>

                    <TosCheckbox
                        checked={this.state.tosAgreed}
                        value={this.state.tosAgreed}
                        onChange={() => this.setState({tosAgreed: !this.state.tosAgreed})}
                    />

                    {/* Button That Initiates Charging Card */}
                    <div
                        style={{marginTop: 37, marginBottom: 200, textAlign: 'center'}}
                    >
                        {
                            this.state.isLoading
                                ? <CircularProgress />
                                : (
                                    <div>
                                        <PrimaryButton
                                            id='place-order'
                                            type='submit'
                                            fullWidth
                                            disabled={
                                                !this.props.stripe
                                                || this.props.disabled
                                                || !this.state.tosAgreed
                                                || Object.values(this.state.paymentInputs).some(obj => (
                                                    !obj.valid
                                                ))
                                                || (
                                                    this.state.billToDiffAddress
                                                    && Object.values(this.state.billingInputs).some(obj => (
                                                        !obj.valid
                                                    ))
                                                )
                                            }
                                        >
                                            place order
                                        </PrimaryButton>
                                    </div>
                                )
                        }
                        {
                            this.state.cardError
                                ? (
                                    <AlertBox
                                        styles={{marginTop: 17}}
                                        danger
                                    >
                                        {this.state.cardError}
                                    </AlertBox>
                                )
                                : null
                        }
                    </div>

                </form>
            </div>
        );
    }
}

const InjectedCheckoutForm = (props) => {
    return (
        <ElementsConsumer>
            {({elements, stripe}) => (
                <CardForm 
                    elements={elements}
                    stripe={stripe}
                    handleResult={props.handleResult}
                    amount={props.amount}
                    phone={props.phone}
                    deliveryAddress={props.deliveryAddress}
                    onChargeSuccessful={props.onChargeSuccessful}
                    disabled={props.disabled}
                    updateOrder={(item, text) => props.updateOrder(item, text)}
                />
            )}
        </ElementsConsumer>
    );
};

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLIC_KEY);

export const StripeCharge = (props) => {
    return (
        <Elements stripe={stripePromise}>
            <InjectedCheckoutForm {...props} />
        </Elements>
    );
}