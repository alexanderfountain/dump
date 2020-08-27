import React from 'react';
import { navigate } from 'gatsby';

import SelectButtons from './SelectButtons';
import StepContent from './StepContent';
import StepSummary from './StepSummary';

import { materials } from '../../constants/Data';
import Paths from '../../constants/Paths';

const RollOffMaterial = (props) => {

    const materialSelectedHandler = (item) => {
        if (item === 'Other') {
            navigate(Paths.quoteRollOff)
        } else {

            props.materialSelected({
                material: item,
                key: Object.keys(materials).find(key => materials[key] === item),
            });
    
            if (props.selectedSize) {
                props.sizeReset();
            }
        }
    }

    return (
        <div style={{
            ...props.styles.stepWrapper,
            opacity: props.disabled ? 0.3 : 1
        }}>

            <StepSummary
                show={!props.show}
                onHide={props.onHide}
            >
                {props.material}
            </StepSummary>

            <StepContent
                show={props.show}
            >

                <h3 style={props.styles.header}>
                    Material
                </h3>
                <div
                    onClick={props.openDialog}
                    style={{...props.styles.link}}
                >
                    Material selection guide
                </div>
                <div style={{...props.styles.descText}}>
                    Pricing changes based on material type.
                </div>
                <div style={{...props.styles.descText, marginBottom: 17}}>
                    If you have a mix of the materials listed below select Construction &amp; Demolition or click on the Material selection guide for more help.
                </div>

                <div
                    style={props.styles.squareSelectsWrapper}
                >

                    {
                        Object.values(materials).map(item => (
                            <SelectButtons
                                key={item}
                                cat={item}
                                className='order-roll-off-material'
                                disabled={props.disabled}
                                selected={item === props.material}
                                onClick={() => materialSelectedHandler(item)}
                            />
                        ))
                    }
                </div>
            </StepContent>

        </div>
    );
};

export default RollOffMaterial;