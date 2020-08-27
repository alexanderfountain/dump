import React from 'react';

import moment from 'moment';

import OrderModel from '../../models/OrderModel';

import { StandardNumberFormat } from '../../constants/Format';

const RollOffSummary = (props) => {

    /**
     * @type {OrderModel}
    */
   const order = props.order;

    const fields = [
        {
            label: 'Delivery address',
            value: order.deliveryAddress
        },
        {
            label: 'Delivery date',
            value: moment(order.deliveryDate).format('MM/DD/YY')
        },
        {
            label: 'Delivery instructions',
            value: order.instructions
        },
        {
            label: 'Phone',
            value: order.phone
        },
        {
            label: 'Email',
            value: props.email
        },
        {
            label: 'Size',
            value: `${order.size} yard`
        },
        {
            label: 'Material',
            value: props.material
        },
        {
            label: 'Weight limit',
            value: order.pricingType === 'flatPricing' || order.pricingType === 'yardPricing'
                ? '20 tons'
                : `${order.tonsIncluded + order.additionalTons} tons`
        },
        {
            label: 'Overage fee',
            value: order.pricingType === 'flatPricing' || order.pricingType === 'yardPricing'
                ? 'N/A'
                : `$${order.overageFee} per additional ton, prorated to your exact overage weight`
        },
        {
            label: 'Rental period',
            value: `${order.rentalPeriod} days. You can call anytime before for a pick up`
        },
        {
            label: 'Rental extension fee',
            value: `$${order.rentalExtensionFee} per additional day`
        },
        {
            label: 'Total',
            value: <StandardNumberFormat value={props.grandTotal} />
        },
    ]

    return (
        <div>
            {
                props.title
                    ? <h3>{props.title}</h3>
                    : null
            }

            {fields.map(item => (
                <div
                    key={item.label}
                    style={{marginBottom: 15}}
                >
                    <div
                        style={{fontWeight: 600, marginBottom: 10}}
                    >
                        {item.label}
                    </div>
                    <div>
                        {item.value}
                    </div>
                </div>
            ))}

        </div>
    );
};

export default RollOffSummary;