import React from 'react';

import NumberFormat from 'react-number-format';

export const StandardNumberFormat = (props) => (
    <NumberFormat
        value={props.value}
        displayType='text'
        prefix='$'
        decimalScale={2}
        thousandSeparator
        fixedDecimalScale
    />
);

export const NumberFormatPhone = (props) => {
    const { inputRef, onChange, ...other } = props;
  
    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={values => {
                onChange({
                    target: {
                        value: values.value,
                    },
                });
            }}
            format="(###) ###-####"
            mask="_"
        />
    );
};

export const toTitleCase = (str) => (
    str.toLowerCase().split(' ').map(word => (
        (word.charAt(0).toUpperCase() + word.slice(1))
    )).join(' ')
);