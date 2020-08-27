import React from 'react';

import Tooltip from '@material-ui/core/Tooltip';

import Help from '@material-ui/icons/Help';

import SelectButtons from './SelectButtons';

const RollOffWeightLimit = (props) => {

    const getDisplayPrice = (price) => {
        let displayPrice = Math.abs(price);

        if (!Number.isInteger(displayPrice)) {
            displayPrice = displayPrice.toFixed(2)
        }

        return displayPrice;

    }

    return (
        <div>
            <h3 style={props.styles.header}>
                Weight limit
            </h3>

            
            {/* <div
                onClick={props.openDialog}
                style={{...props.styles.link}}
            >
                How many tons are right for you?
            </div> */}
            <div style={{...props.styles.descText}}>
                <span style={{fontWeight: props.selectedTons < props.startingTons ? 800 : 400}}>Save {props.overage ? Math.floor((props.overage - props.dumpRate) / props.overage * 100) : ''}%</span> by adding additional tons upfront.
            </div>
            <div style={{...props.styles.descText, marginBottom: 17}}>
                If applicable the overweight fee is <span style={{fontWeight: props.selectedTons < props.startingTons ? 700 : 400}}>${props.overage ? props.overage : ''}</span> per additional ton, prorated to the exact overage weight.
                <Tooltip
                    disableFocusListener
                    disableTouchListener
                    enterDelay={props.toolTipDelay}
                    title="When we pick up your dumpster we bring it to a disposal site. The disposal site gets the weight of the material you put into the dumpster. If that weight is over the ton limit you purchased then the overage fee will be applied."
                >
                    <Help style={props.styles.helpIcon} />
                </Tooltip>
            </div>

            <div
                style={props.styles.squareSelectsWrapper}
            >
                {
                    props.tonOptions.map((item, i) => {
                        let price = 0;
                        if (props.startingTons) {
                            price = (item - props.startingTons)
                                * props.dumpRate;
                        }
                        return (
                            <SelectButtons
                                key={item === 0 ? i : item}
                                value={item === 0 ? '' : item}
                                cat={+item === 1 ? 'ton' : 'tons'}
                                subValue={
                                    props.startingTons
                                        ? (
                                            `${price > 0 ? '+' : price < 0 ? '-' : ''} $${getDisplayPrice(price)}`
                                        )
                                        : 'Select a size first'
                                }
                                disabled={!props.startingTons}
                                selected={item === props.selectedTons}
                                onClick={() => props.setSelectedTons(item)}
                            />
                        )
                    })
                }
            </div>
                    
        </div>
    );
};

export default RollOffWeightLimit;