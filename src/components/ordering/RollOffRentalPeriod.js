import React from 'react';

import moment from 'moment';

import SelectButtons from './SelectButtons';

import { charges } from '../../constants/Data';

const RollOffRentalPeriod = (props) => {
    return (
        <div>
            <h3 style={{...props.styles.header, marginTop: 37}}>
                Rental period
            </h3>

            <div style={{...props.styles.descText}}>
                Save {props.extensionPrice ? Math.floor((props.extensionPrice - props.discountedExtension) / props.extensionPrice * 100) : ''}% by buying additional rental days in advance.
            </div>
        
            <div style={{...props.styles.descText, marginBottom: 17}}>
                You can call anytime before your expiration date for a pick up for the same or next business day.
            </div>

            <div
                style={props.styles.squareSelectsWrapper}
            >
                {
                    props.rentalPeriods.map((item, i) => {
                        item.price = (
                            (item.days - charges.baseRentalPeriod)
                            * props.discountedExtension
                        );
                        return (
                            <SelectButtons
                                key={item.days}
                                value={item.days}
                                cat={'days'}
                                subValue={`${item.price > 0 ? '+' : ''} $${item.price}`}
                                disabled={!props.selectedSize}
                                selected={props.selectedSize && item.days === props.selectedPeriod.days}
                                onClick={() => props.setSelectedPeriod(item)}
                            />
                        )
                    })
                }
            </div>

            <div style={{...props.styles.descText, marginTop: 6}}>
                <span style={{fontWeight: 600}}>
                    Expires {
                        props.deliveryDate && props.selectedPeriod
                            ? moment(props.deliveryDate).add(props.selectedPeriod.days, 'd').format('MM/DD/YY')
                            : null
                    }
                </span>. ${props.extensionPrice} per additional day past the expiration date.
            </div>
        </div>
    );
};

export default RollOffRentalPeriod;