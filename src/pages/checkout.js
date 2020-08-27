import React, { Component } from 'react';
import { Link, navigate } from 'gatsby';

import { connect } from 'react-redux';
import { updateOrder, deleteOrder } from '../state/app';

import moment from 'moment';

import AlertBox from '../components/AlertBox';
import Checkbox from '../components/inputs/Checkboxes';
import CouponInput from '../components/checkout/CouponInput';
import DeliveryDetails from '../components/checkout/DeliveryDetails';
import DialogWrapper from '../components/DialogWrapper';
import Layout from '../structure/Layout';
import SalesTaxExempt from '../components/ordering/SalesTaxExempt';

import Colors from '../constants/Colors';
import Paths from '../constants/Paths';
import { StandardNumberFormat } from '../constants/Format';
// import { windowGlobal } from '../constants/Window';

import { StripeCharge } from '../components/inputs/Stripe';

import { sendEmail, endPoints } from '../axios/ses';

const styles = {
    paymentDetailItem: {
        padding: '15px 0',
        display: 'flex',
        fontSize: 15,
        borderBottom: 'solid 1px #D8D8D8'
    },
    listField: {
        flex: 0.5
    },
    link: {
        color: Colors.tintColor,
        cursor: 'pointer',
        fontWeight: 400
    },
};

class Checkout extends Component {

    state = {
        orderPlaced: false,
        ordersArray: this.props.orders,
        sameDeliveryDetails: false,
        showSalesTaxExempt: false,
        coupon: null // coupon = {amount: number, code: string}
    }

    // componentDidMount() {
    //     windowGlobal.addEventListener('beforeunload', this.onWindowUnload, {passive: true});
    // }

    // componentWillUnmount() {
    //     windowGlobal.removeEventListener('beforeunload', this.onWindowUnload);
    //     this.state.ordersArray.forEach(order => {
    //         this.props.onUpdateOrder(order);
    //     });
    //     this.sendCartAbandonedEmail();
    // }

    // onWindowUnload = (event) => {
    //     this.sendCartAbandonedEmail();
    //     event.preventDefault();
    //     return event.returnValue = 'Are you sure you want to close?';
    // }

    // sendCartAbandonedEmail = () => {
    //     if (
    //         process.env.NODE_ENV !== 'development' &&
    //         !this.state.orderPlaced && this.state.ordersArray[0]
    //         && (this.state.ordersArray[0].phone || this.state.ordersArray[0].email)
    //     ) {
    //         sendEmail(
    //             endPoints.CART_ABANDONED,
    //             {email: this.state.ordersArray[0].email, phone: this.state.ordersArray[0].phone, ordersArray: JSON.stringify(this.state.ordersArray), searchParams: this.props.searchParams}
    //         );
    //     }
    // }

    getSubtotal = () => {
        let subTotal = 0;
        this.state.ordersArray.forEach(order => subTotal = subTotal + order.total);
        return subTotal;
    }

    getTax = () => {
        let tax = 0;
        this.state.ordersArray.forEach(order => tax = tax + +order.tax);
        return tax;
    }

    getGrandTotal = () => {
        let total = this.getSubtotal() + this.getTax() - (this.state.coupon ? this.state.coupon.price : 0);
        return total;
    }

    updateDeliveryDetailsHandler = (field, text, index, deliveryAddress) => {
        const updatedArray = [...this.state.ordersArray];

        if (field === 'deliveryDate') text = moment(text).format('MM/DD/YY');

        const updatedItem = {
            ...updatedArray[index],
            [field]: text
        }

        if (field === 'addressComponents') updatedItem.deliveryAddress = deliveryAddress;

        updatedArray[index] = updatedItem;
        this.setState({ordersArray: updatedArray});
    }

    updateOrdersReduxHandler = (order) => {
        this.props.onDeleteOrder(order.id);
        navigate(Paths.orderRollOff);
    }

    checkDisabled = () => {
        const disabled = (
            (!this.state.sameDeliveryDetails
            && this.state.ordersArray.some(order => (
                !order.deliveryAddress
                || !order.phone
                || !order.instructions
            )))
            || (this.state.sameDeliveryDetails
                && Object.keys(this.state.ordersArray[0]).some(key => (
                    (key === 'deliveryAddress'
                    && !this.state.ordersArray[0][key])
                    || (key === 'phone'
                    && !this.state.ordersArray[0][key])
                    || (key === 'instructions'
                    && !this.state.ordersArray[0][key])
                )))
        );

        return disabled;
    }

    successfulChargeHandler = (result) => {
        this.setState({orderPlaced: true});

        console.log(result)

        let orderComponents = '';

        this.state.ordersArray.forEach((order, i) => {
            orderComponents = orderComponents + `\n Order${i + 1}: \n Phone: ${order.phone} \n Delivery address: ${order.addressComponents.address + (order.addressComponents.address2 ? ' ' + order.addressComponents.address2 : '') + ', ' + order.addressComponents.town + ', ' + order.addressComponents.state + ' ' + order.addressComponents.zip} \n County: ${order.county} \n Material: ${order.material} \n Size: ${order.size} yard dumpster \n Weight limit: ${+order.tonsIncluded + +order.additionalTons} (${order.tonsIncluded} tons included + ${order.additionalTons} tons) \n Rental period: ${order.rentalPeriod} for an extra $${order.additionalDays * order.discountedExtensionFee.price} \n Total: $${order.total + order.tax} *if coupon subtract amount from Order 1 total \n Overage fee: ${order.overageFee} \n Deliver date: ${new Date(order.deliveryDate)} \n Delivery instructions: ${order.instructions} \n Price breakdown: haul $${order.pricingType === 'flatPricing' ? (order.total + ' flat rate') : order.baseHaul.price}, dump rate $${order.dumpRate.price}, extension fee $${order.rentalExtensionFee}, tax: $${order.tax} \n Addons: ${JSON.stringify(order.addon)}`
        });

        const data = {
            chargeId: result.chargeId,
            customer: result.name,
            email: result.email,
            searchParams: this.props.searchParams,
            billingAddress: result.billingAddress,
            coupon: this.state.coupon ? JSON.stringify(this.state.coupon) : null,
            orders: orderComponents,
            company: result.company
        }

        sendEmail(endPoints.ORDER_PLACED_ROLL_OFF, data);

        navigate(
            Paths.rollOffScheduled,
            {
                state: {
                    email: result.email,
                    name: result.name,
                    grandTotal: this.getGrandTotal()
                },
                replace: true
            }
        );
    }

    render() {

        const orderSummaryFields = [
            {
                label: 'Services',
                value: <div>
                    {
                        this.state.ordersArray.map((order, i) => (
                            <div
                                key={order.id}
                            >
                                {i > 0 ? '+' : ''} {order.size} Yard {order.material} Dumpster
                            </div>
                        ))
                    }
                </div>
            },
            {
                label: 'Subtotal',
                value: <StandardNumberFormat value={this.getSubtotal()} />
            },
            {
                label: 'Sales Tax',
                value: <StandardNumberFormat value={this.getTax()} />,
                subLabel: (
                    <div
                        style={{...styles.link, marginTop: 7, fontSize: 12}}
                        onClick={() => this.setState({showSalesTaxExempt: true})}
                    >
                        I am tax exempt
                    </div>
                )
            },
            {
                label: 'couponInput',
                value: this.state.coupon ? `($${this.state.coupon.price})` : null
            },
            {
                label: 'Total',
                value: <StandardNumberFormat value={this.getGrandTotal()} />
            }
        ];

        if (this.state.ordersArray.length <= 0) {
            return (
                <Layout
                    bgColor='#FFFFFF'
                    mainStyles={{paddingLeft: 20, paddingRight: 20, maxWidth: 525, margin: '0 auto'}}
                    title='Checkout'
                >
                    <div
                        style={{padding: '50px 0'}}
                    >
                        <AlertBox>
                            Please add a dumpster to your <Link to={Paths.cart}>CART</Link> to access the checkout page.
                        </AlertBox>
                    </div>
                </Layout>
            )
        }
        return (
            <Layout
                bgColor='#FFFFFF'
                restrictWidth
                hideMobileBtns
                title='Checkout'
            >
                <div
                    style={{maxWidth: 540, margin: '0 auto', paddingLeft: 20, paddingRight: 20}}
                >
                    <h2
                        style={{marginTop: 37, marginBottom: 27}}
                    >
                        Checkout
                    </h2>

                    {/* <div
                        style={{padding: 20, textAlign: 'center', backgroundColor: 'rgba(6, 56, 82, 0.75)', border: 'solid 1px #063852', color: '#FFFFFF', borderRadius: 4, marginBottom: 37}}   
                    >
                        Have an account? Click here to login
                    </div> */}

                    <h3
                        style={{margin: '0 0 17px'}}
                    >
                        Delivery details
                    </h3>

                    {
                        this.state.ordersArray.length > 1
                            ? (
                                <div
                                    style={{margin: '10px 0 27px'}}
                                >
                                    <Checkbox
                                        label='Details are the same for every dumpster'
                                        checked={this.state.sameDeliveryDetails}
                                        value={this.state.sameDeliveryDetails}
                                        onChange={() => {
                                            this.setState({
                                                sameDeliveryDetails: !this.state.sameDeliveryDetails
                                            })
                                        }}
                                        superdense
                                    />
                                
                                </div>
                            )
                            : null
                    }

                    {
                        this.state.ordersArray.map((order, i) => {
                            if (
                                i === 0
                                || (i > 0 && !this.state.sameDeliveryDetails)
                            ) {
                                return (
                                    <div
                                        key={order.id}
                                    >
                                        {
                                            this.props.orders.length > 1 && !this.state.sameDeliveryDetails
                                                ? <h4 style={{margin: '0 0 10px', fontWeight: 400, color: Colors.allianceOrange}}>
                                                {order.size} Yard {order.material} Dumpster 
                                                </h4>
                                                : null
                                        }

                                        <DeliveryDetails
                                            order={order}
                                            updateOrder={
                                                (field, text, delAdd) => {
                                                    this.updateDeliveryDetailsHandler(field, text, i, delAdd)
                                                }
                                            }
                                            updateOrderRedux={this.updateOrdersReduxHandler}
                                        />
                                    </div>
                                )
                            }

                            return null;
                        })
                    }

                    <h3
                        style={{margin: '0 0 17px'}}
                    >
                        Order summary
                    </h3>

                    {
                        orderSummaryFields.map(item => (
                            <div 
                                key={item.label}
                                style={styles.paymentDetailItem}
                            >

                                <div style={{...styles.listField, fontWeight: 600}}>
                                    {
                                        item.label === 'couponInput'
                                        ? <CouponInput
                                            wrapperStyle={{flex: 1}}
                                            setCoupon={(coupon) => this.setState({coupon: coupon})}
                                        />
                                        : (<>
                                            {item.label}
                                            {item.subLabel}
                                        </>)
                                    }
                                    
                                </div>

                                <div style={{...styles.listField, textAlign: 'right'}}>
                                    {item.value}
                                </div>

                            </div>
                        ))
                    }

                    <StripeCharge
                        amount={this.getGrandTotal()}
                        phone={this.state.ordersArray[0].phone}
                        disabled={this.checkDisabled()}
                        deliveryAddress={
                            this.state.ordersArray[0]
                                ? this.state.ordersArray[0].addressComponents
                                : null
                        }
                        onChargeSuccessful={this.successfulChargeHandler}
                        updateOrder={
                            (field, text) => {
                                this.updateDeliveryDetailsHandler(field, text, 0)
                            }
                        }
                    />

                    {/* Dialogs */}
                    <DialogWrapper
                        open={this.state.showSalesTaxExempt}
                        onClose={() => this.setState({showSalesTaxExempt: false})}
                        maxWidth='md'
                        cancelLabel='close'
                    >
                        <SalesTaxExempt />
                    </DialogWrapper>
                </div>
            </Layout>
        );
    };
};

const mapStateToProps = state => {
    return {
        orders: state.app.orders,
        searchParams: state.app.searchParams
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateOrder: (order) => dispatch(updateOrder(order)),
        onDeleteOrder: (orderId) => dispatch(deleteOrder(orderId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);