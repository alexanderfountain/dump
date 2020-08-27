import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { NumberFormatPhone } from '../../constants/Format';

const helperStyles = makeStyles({
    root: {
        fontSize: 12
    }
});

const Input = (props) => {
    const helperClasses = helperStyles();

    const [touched, setTouched] = useState(false);

    const onBlurHandler = () => {
        setTouched(true);
    }

    const getInvalid = (value) => {
       
        if (props.email) {
            const regex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return !regex.test(value)
        }

        if (props.phone) {
            return value.length !== 10;
        }

        if (props.invalid) {
            return props.invalid;
        }

        if (props.required) {
            return value.trim() === '';
        }

        return false;
    }

    const onChangeHandler = (text) => {
        const valid = !getInvalid(text);
        props.onChange(text, valid);
    }

    return (
        <TextField
            variant='outlined'
            margin='dense'
            fullWidth
            onBlur={onBlurHandler}

            {...props}

            invalid={props.invalid ? 1 : 0}
            superdense={props.superdense ? 1 : 0}
            email={props.email ? 1 : 0}
            phone={props.phone ? 1 : 0}

            FormHelperTextProps={{
                margin: 'dense',
                classes: {
                    root: helperClasses.root
                }
            }}
            error={props.error || (props.required && getInvalid(props.value) && touched)}
            onChange={event => {
                onChangeHandler(event.target.value);
            }}
            style={{maxWidth: 500, marginBottom: props.superdense ? 22 : 27, ...props.styles}}
            inputProps={{style: {fontSize: props.superdense ? 17 : null}}}
            InputLabelProps={{style: {fontSize: props.superdense ? 17 : null}}}
            InputProps={
                props.phone
                    ? {inputComponent: NumberFormatPhone}
                    : null
            }
        />
    );
};

Input.propTypes = {
    invalid: PropTypes.bool,
    email: PropTypes.bool,
    phone: PropTypes.bool,
    superdense: PropTypes.bool
}

export default Input;