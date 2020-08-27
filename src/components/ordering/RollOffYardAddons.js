import React from 'react';

import SelectButtons from './SelectButtons';

const RollOffWeightLimit = (props) => {

    const getYardPricing = () => {
        let addons = [];

        if (props.dumpRateSku && props.dumpRateSku.metadata.addons) {
            let addonsRaw = '[' + props.dumpRateSku.metadata.addons + ']';

            let addonsClean = addonsRaw.replace(/([a-zA-Z0-9]+?):/g, '"$1":');
            addonsClean = addonsClean.replace(/'/g, '"');

            let data = JSON.parse(addonsClean);

            data.forEach(item => {
                item.price = item.price.toString().slice(0, -2)
                + '.' +
                item.price.toString().slice(-2)  
            });
            
            addons = data;
        }

        return addons
    }

    return (
        <div>
            <h3 style={props.styles.header}>
                Other yard waste
            </h3>

            <div style={{...props.styles.descText}}>
                Do you have any of the following?
            </div>
            
            {
                getYardPricing().map(item => (
                    <div
                        key={item.name}
                        style={{...props.styles.descText}}
                    >
                        {item.description}. Select <b>{item.name}</b>
                    </div>
                ))
            }

            <div
                style={{...props.styles.squareSelectsWrapper, marginTop: 17}}
            >
                {
                    getYardPricing().map((item, i) => {
                        let price = 0;
                        if (props.selectedSize) {
                            price = +item.price * props.selectedSize;
                        }
                        return (
                            <SelectButtons
                                key={item === 0 ? i : item.name}
                                value={item === 0 ? '' : item.name}
                                subValue={
                                    props.selectedSize
                                        ? (
                                            `${price > 0 ? '+' : price < 0 ? '-' : ''} $${Math.abs(price)}`
                                        )
                                        : 'Select a size first'
                                }
                                disabled={!props.selectedSize}
                                selected={
                                    props.selectedAddon
                                    && item.name === props.selectedAddon.name
                                }
                                onClick={() => {
                                    props.setSelectedAddon(
                                        props.selectedAddon && item.name === props.selectedAddon.name
                                            ? null
                                            : item
                                    )
                                }}
                            />
                        )
                    })
                }
            </div>

        </div>
    );
};

export default RollOffWeightLimit;