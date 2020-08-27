import React from 'react';

import ButtonBase from '@material-ui/core/ButtonBase';

import StepContent from './StepContent';
import StepSummary from './StepSummary';

import { Pickup } from '../../assets/icons/misc';

const SizeCard = (props) => {

    let price = null;

    if (props.item.pricingType === 'tonPricing') {
        price = props.haul + (props.dumpRate * props.item.starting);
    }

    if (props.item.pricingType === 'yardPricing') {
        price = props.haul + (props.dumpRate * props.item.size);
    }

    if (props.item.pricingType === 'flatPricing') {
        price = props.item.price
    }

    return (
        <ButtonBase
            onClick={props.onClick}
            disabled={props.disabled || props.item.size === '40'}

            style={{
                ...props.styles.dumpsterWrapper,
                color: props.disabled  || props.item.size === '40' ? '#757575' : '#232323',
                backgroundColor: 'transparent',
                borderColor: props.disabled  || props.item.size === '40' ? 'rgba(151, 151, 151, 0.5)' : '#979797'
            }}
        >
            <div
                style={{display: 'flex', justifyContent: 'space-evenly'}}
            >
                <div
                    style={{width: '70%', height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                >
                    <props.item.image 
                        size="100%"
                    />
                </div>

                <div style={{fontSize: 14, whiteSpace: 'nowrap'}}>
                    Fits {props.item.pickups} Pickup<br/>Truck Beds
                    <div style={{marginTop: 7}}>
                        <Pickup
                            size={17}
                            color={props.disabled || props.item.size === '40' ? '#757575' : '#232323'}
                        />
                        <span style={{verticalAlign: 'top', fontWeight: 600, marginLeft: 7}}>
                            X {props.item.pickups}
                        </span>
                    </div>
                </div>
            </div>

            <div
                style={{
                    margin: '10px -10px -10px',
                    padding: 10,
                    color: props.selected
                    ? '#FFFFFF'
                    : null,
                    backgroundColor: props.selected
                        ? 'rgba(6, 56, 82, 0.85)'
                        : null,
                    borderColor: props.selected
                        ? '#063852'
                        : null,
                }}
            >
        
                <div style={{marginBottom: 27, fontSize: 14}}>
                    {
                        props.item.pricingType === 'yardPricing'
                        ? (
                            'Flat pricing '
                        )
                        : `Starting with ${props.item.starting
                                ? props.item.starting
                                : '__'} tons `
                        
                    }
                    and 14 day rental period
                </div>

                <div style={{marginBottom: 7, fontSize: 17}}>
                    {props.item.size} Cubic Yards
                </div>
                <div style={{fontSize: 15}}>
                    {
                        price
                            ? props.item.size === '40'
                                ? 'Out of stock'
                                : `$${price}`
                            : 'Select a material for pricing'
                    }
                </div>
            </div>
        </ButtonBase>
    )
};

const RollOffSize = (props) => {
    return (
        <div style={{
            ...props.styles.stepWrapper,
            opacity: props.disabled ? 0.3 : 1
        }}>

            <StepSummary
                show={!props.show}
                onHide={props.onHide}
            >
                {props.selectedSize} Cubic Yards
            </StepSummary>

            <StepContent
                show={props.show}
            >

                <h3 style={props.styles.header}>
                    Size
                </h3>
                <div
                    onClick={props.openDialog}
                    style={{...props.styles.link, marginBottom: 17}}
                >
                    What size is right for you?
                </div>

                {Object.values(props.dumpsters).map(item => {
                    if (item.show) {
                        return (
                            <SizeCard
                                key={item.size}
                                onClick={() => props.sizeSelectedHandler(item)}
                                disabled={props.disabled}
                                selected={item.size === props.selectedSize}
                                item={item}
                                haul={props.haul}
                                dumpRate={props.dumpRate}
                                styles={props.styles}
                            />
                        );
                    }
                    return null;
                })}

            </StepContent>

        </div>
    );
};

export default RollOffSize;