import React, { useState } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import Input from '../inputs/Input';
// import { getCoupons } from '../../axios/stripe';

const CouponInput = (props) => {

    const [displayText, setDisplayText] = useState('');
    const [coupon, setCoupon] = useState(null);
    const [invalidCoupon, setInvalidCoupon] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [axiosError, setAxiosError] = useState(false);

    const onGetCouponCode = () => {
        setIsLoading(true);
        import('../../axios/stripe').then(stripe => {
            stripe.getCoupons()
                .then(res => {
                    const couponExists = res.data.data.find(obj => obj.name === displayText);
                    if (couponExists) {
                        setCoupon(couponExists);
                        setInvalidCoupon(false);
                        props.setCoupon({ 
                            price: couponExists.amount_off.toString().slice(0, -2)
                            + '.' +
                            couponExists.amount_off.toString().slice(-2),
                            code: couponExists.name
                        });
                    } else {
                        setCoupon(null);
                        setInvalidCoupon(true);
                        props.setCoupon(null);
                    }
                    setIsLoading(false);
                })
                .catch(error => {
                    console.warn(error);
                    setIsLoading(false);
                    setAxiosError(error)
                });
        })
    }

    return (
        <div
            style={{display: 'flex', ...props.wrapperStyle}}
        >
            {
                axiosError
                    ? null
                    : (<>
                        <div
                            style={{...props.inputStyle}}
                        >
                            <Input
                                label='Coupon code'
                                value={displayText}
                                onChange={(text) => setDisplayText(text)}
                                error={invalidCoupon}
                                helperText={
                                    invalidCoupon
                                        ? 'Invalid coupon'
                                        : coupon
                                            ?
                                            'Coupon applied'
                                            : null
                                }
                                superdense
                                styles={{maxWidth: 180, marginBottom: 0, marginTop: 0, paddingRight: 10}}
                            />
                        </div>

                        {
                            isLoading
                                ? <CircularProgress />
                                : (
                                    <div
                                        onClick={onGetCouponCode}
                                        style={{paddingTop: 9, ...props.linkStyle}}
                                        className='link'
                                    >
                                        Apply
                                    </div>
                                )
                        }
                    </>)
            }
        </div>
    );
};

export default CouponInput;