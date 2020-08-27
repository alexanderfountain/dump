import React from 'react';

import { StandardNumberFormat } from '../../constants/Format';

import Add from '@material-ui/icons/AddCircle';

import OrderModel from '../../models/OrderModel';

const CartItemRollOff = (props) => {

    /**
     * @type {OrderModel}
    */
    const order = props.order;

    const orderFields = [
        {
            label: 'Delivery town:',
            value: order.addressComponents.town + ', ' + order.addressComponents.state,
            show: 'all'
        },
        // Ton Pricing
        {
            label: <div>{
                order.additionalTons > 0 || order.additionalTons < 0
                    ? (
                        <div>
                            <div
                                style={styles.additionalWrapper}
                            >
                                Tons included:
                            </div>
                            <div
                                style={styles.additionalWrapper}
                            >
                                Additional tons:
                            </div>
                            <div
                                style={styles.additionalWrapper}
                            >
                                Total weight limit:
                            </div>
                        </div>
                    )
                    : 'Weight limit:'
            }</div>,
            // addon: 'Dialog to add more tons', // Open dialog with add more tons
            // addonTxt: 'add more tons',
            finePrint: <div><b>Overage fee:</b> If over {order.tonsIncluded + order.additionalTons} tons ${order.overageFee} per additional ton, prorated</div>,
            value: <div>{
                order.additionalTons > 0 || order.additionalTons < 0
                    ? (
                        <div>
                            <div
                                style={styles.additionalWrapper}
                            >
                                {order.tonsIncluded} tons
                            </div>
                            <div
                                style={styles.additionalWrapper}
                            >
                                {order.additionalTons > 0 ? '+' : null} {order.additionalTons} ton{order.additionalTons === 1 ? '' : 's'} for <StandardNumberFormat value={order.dumpRate.price * order.additionalTons} />
                            </div>
                            <div
                                style={styles.additionalWrapper}
                            >
                                {order.tonsIncluded + order.additionalTons} tons
                            </div>
                        </div>
                    )
                    : `${order.tonsIncluded} tons`
            }</div>,
            show: 'tonPricing'
        },
        // Yard Pricing
        {
            label: <div>{
                order.addon
                    ? (
                        <div>
                            {order.addon.name}
                        </div>
                    )
                    : null
            }</div>,
            finePrint: <div style={{marginTop: order.addon ? 0 : -20}}>Placing material other than the selected yard waste into the container may result in a contamination fee</div>,
            value: <div>{
                order.addon
                    ? (
                        <div>
                            + ${+order.addon.price * order.size}
                        </div>
                    )
                    : null
            }</div>,
            show: 'yardPricing'
        },
        {
            label: <div>{
                order.additionalDays > 0
                    ? (
                        <div>
                            <div
                                style={styles.additionalWrapper}
                            >
                                Days included:
                            </div>
                            <div
                                style={styles.additionalWrapper}
                            >
                                Additional days:
                            </div>
                            <div
                                style={styles.additionalWrapper}
                            >
                                Total Rental Period:
                            </div>
                        </div>
                    )
                    : 'Rental period:'
            }</div>,
            // addon: 'Dialog to add more tons', // Open dialog with add more days
            // addonTxt: 'add more days',
            finePrint: <div><b>Rental extension fee:</b> ${order.rentalExtensionFee} per additional day after {order.rentalPeriod} days</div>,
            value: <div>{
                order.additionalDays > 0
                    ? (
                        <div>
                            <div
                                style={styles.additionalWrapper}
                            >
                                {order.rentalPeriod - order.additionalDays} days
                            </div>
                            <div
                                style={styles.additionalWrapper}
                            >
                                + {order.additionalDays} days for ${order.discountedExtensionFee.price * order.additionalDays}
                            </div>
                            <div
                                style={styles.additionalWrapper}
                            >
                                {order.rentalPeriod} days
                            </div>
                        </div>
                    )
                    : `${order.rentalPeriod} days`
            }</div>,
            show: 'all'
        },
        {
            label: 'Cost:',
            value: <StandardNumberFormat value={order.total} />,
            show: 'all'
        }
    ];

    return (
        <div>
            {
                orderFields.map((item, i) => {

                    if (item.show === 'all' || item.show === order.pricingType){
                        return (
                            <div
                                key={item.label + i}
                                style={{...props.styles.cardItem, borderBottom: i === orderFields.length - 1 ? 'none' : 'solid 1px #D8D8D8', marginBottom: i === orderFields.length - 1 ? 7 : 0}}
                            >
                                <div
                                    key={item.label}
                                    style={{display: 'flex'}}
                                >

                                    <div
                                        style={props.styles.listField}
                                    >
                                        <div
                                            style={{fontWeight: 600}}
                                        >
                                            {item.label}
                                        </div>
                                        <div
                                            className='link'
                                        >
                                            {
                                                item.editWith
                                                    ? <div style={{fontSize: 12, marginTop: 7}}>
                                                        change
                                                    </div>
                                                    : null
                                            }
                                            {
                                                item.addon
                                                    ? <div style={{fontSize: 15, marginTop: 12}}>
                                                        <Add
                                                            style={{fontSize: 15, verticalAlign: 'text-bottom', marginRight: 4}}
                                                        /> 
                                                        {item.addonTxt}
                                                    </div>
                                                    : null
                                            }
                                        </div>

                                    </div>

                                    <div
                                        style={props.styles.listField}
                                    >
                                        {item.value}
                                    </div>
                                </div>

                                {
                                    item.finePrint
                                        ? (
                                            <div
                                                style={{fontSize: 12, color: '#757575', marginTop: 20}}
                                            >
                                                {item.finePrint}
                                            </div>
                                        )
                                        : null
                                }

                            </div>
                        )
                    }
                    return null;
                })
            }
            
        </div>
    );
};

const styles = {
    additionalWrapper: {
        marginBottom: 12
    }
}

export default CartItemRollOff;