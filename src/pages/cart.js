import React, { useState } from 'react';
import { navigate, Link } from 'gatsby';

import { connect } from 'react-redux';
import { deleteOrder } from '../state/app';

import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';

import Add from '@material-ui/icons/AddCircle';
import Delete from '@material-ui/icons/Delete';

import CardItemRollOff from '../components/ordering/CartItemRollOff';
import DialogWrapper from '../components/DialogWrapper';
import Layout from '../structure/Layout';
import PrimaryButton from '../components/buttons/PrimaryButton';

import Colors from '../constants/Colors';
import Paths from '../constants/Paths';
import { StandardNumberFormat } from '../constants/Format';

const styles = {
    totalItem: {
        padding: '15px 0',
        display: 'flex',
        fontSize: 15,
        borderBottom: 'solid 1px #D8D8D8'
    },
    cardItem: {
        padding: '10px 0'
    },
    listField: {
        flex: 0.5
    }
}

const Cart = (props) => {

    const [DialogContent, setDialogContent] = useState(null);

    const getSubtotal = () => {
        let subTotal = 0;
        props.orders.forEach(order => subTotal = subTotal + order.total);
        return subTotal;
    }

    const getDialogContent = () => {
        if (DialogContent) return DialogContent;
        return 'Error';
    }

    return (
        <Layout
            mainStyles={{paddingLeft: 20, paddingRight: 20}}
            hideMobileBtns
            restrictWidth
            title='Cart'
        >
            <h1>
                Cart
            </h1>

            <div
                style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}
            >
                {
                    props.orders.map((order, index) => (
                        <Card
                            style={{
                                margin: '0 0 27px', padding: '8px 20px 20px', fontSize: 15, width: '100%', maxWidth: 525
                            }}
                            key={order.id}
                        >
                            <div style={{fontSize: 17, marginBottom: 17, display: 'flex'}}>

                                <div style={{flex: 1, paddingTop: 12}}>
                                    <span style={{fontWeight: 600}}>{order.size} Yard</span> Roll Off for <span style={{fontWeight: 600}}>{order.material}</span>
                                </div>

                                <IconButton
                                    onClick={() => props.onDeleteOrder(order.id)}
                                    className='delete-cart-roll-off'
                                >
                                    <Delete style={{color: Colors.error, fontSize: 24}} />
                                </IconButton>

                            </div>

                            <CardItemRollOff
                                styles={styles}
                                order={order}
                            />

                        </Card>
                    ))
                }
            </div>

            <div
                style={{backgroundColor: '#F3F3F3', padding: 15, borderRadius: 4, border: 'solid 1px #757575', margin: '37px 0 200px'}}
            >

                <Link
                    to={Paths.orderRollOff}
                >
                    <Add style={{fontSize: '1.3rem', verticalAlign: 'sub'}} /> Add another dumpster
                </Link>

                <div
                    style={{margin: '37px 0 27px'}}
                >
                    <span style={{fontWeight: 600}}>Subtotal</span> ({props.orders.length} dumpster{props.orders.length > 1 ? 's' : ''}): <StandardNumberFormat value={getSubtotal()} />
                </div>

                <PrimaryButton
                    onClick={() => navigate(Paths.checkout)}
                    disabled={props.orders.length <= 0}
                    id='proceed-to-checkout'
                >
                    proceed to checkout
                </PrimaryButton>

            </div>

            {/* Dialogs */}
            <DialogWrapper
                open={DialogContent ? true : false}
                onClose={() => setDialogContent(null)}
            >
                {getDialogContent()}
            </DialogWrapper>

        </Layout>
    );
};

const mapStateToProps = state => {
    return {
        orders: state.app.orders
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteOrder: (orderId) => dispatch(deleteOrder(orderId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);