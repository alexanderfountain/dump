import React, { useState } from 'react';
import { navigate } from 'gatsby';

import CircularProgress from '@material-ui/core/CircularProgress';

import Button from './buttons/PrimaryButton';
import GetSkus from './inputs/GetSkus';

import Paths from '../constants/Paths';

const FindPricing = (props) => {

    const [data, setData] = useState(null);
    const [exists, setExists] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const onAddressSelectHandler = (returnObj) => {
        if (!returnObj.pricingExists) {
            setExists(false);
        } else {
            setData({
                ...data,
                county: returnObj.county,
                addressComponents: returnObj.addressComponents
            });
        }
    }

    const onSkusHandler = (skus) => {
        setData({
            ...data,
            skus
        });
    }

    const onClickHandler = () => {
        // if (exists) {
        //     if (
        //         data
        //         && data.county
        //         && data.skus
        //     ) {
        //         navigate(Paths.orderRollOff, {state: {skuData: data}});
        //     } else {
        //         // TODO when more than roll off this needs to change
                navigate(Paths.orderRollOff);
        //     }
        // } else {
        //     navigate(Paths.quoteRollOff);
        // }
    }

    return (
        <div style={{width: '100%', maxWidth: 335, margin: '0 auto', textAlign: 'left', marginTop: 50, ...props.styles}}>
            {/* <div
                style={{}}
            >
                <GetSkus
                    onSelect={onAddressSelectHandler}
                    setProductSkus={onSkusHandler}
                    textFieldStyle={{backgroundColor: '#FFFFFF'}}
                    large={props.large}
                    textFieldProps={props.textFieldProps}
                    label={props.label}
                    onChangeLoading={setIsLoading}
                />
            </div> */}
            
            <Button
                onClick={onClickHandler}
                disabled={isLoading}
                style={{...props.btnStyle}}
                className='order-roll-off'
                fullWidth
            >
                {isLoading ? <CircularProgress style={{width: 24, height: 24, position: 'absolute', left: 30}} /> : null} {props.btnText}
            </Button>
        </div>
    );
};

export default FindPricing;