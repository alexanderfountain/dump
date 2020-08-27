import React from 'react';

import GooglePlaces from './GooglePlaces';
import DatePicker from './DatePicker';
import DateTime from './DateTime';
import Input from './Input';
import Radios from './Radios';
import Select from './Select';

const InputChecker = (props) => {

    if (props.item.type === 'input') {
        const {key, type, valid, hide, inputStyles, ...other} = props.item;
        if (!hide) {
            return (
                <div
                    style={{...styles.input, ...inputStyles}}
                >
                    <Input
                        {...other}
                        onChange={
                            (value, valid) => props.onChangeHandler(
                                value, valid, props.item
                            )
                        }
                    />
                </div>
            );
        } else {
            return null;
        }
    }

    if (props.item.type === 'googlePlaces') {
        const {hide, inputStyles, superdense, label, required} = props.item;
        if (!hide) {
            return (
                <div
                    style={{...styles.input, ...inputStyles}}
                >
                    <GooglePlaces
                        textFieldProps={{
                            label: label,
                            required: required,
                            autoComplete: 'no'
                        }}
                        onSelect={(res) => props.onChangeHandler(
                            res.formatted_address, true, props.item
                        )}
                        superdense={superdense}
                        required={required}
                    />
                </div>
            );
        } else {
            return null;
        }
    }

    if (props.item.type === 'radio') {
        const {key, type, valid, inputStyles, ...other} = props.item;
        return (
            <div
                style={{...styles.input, ...inputStyles}}
            >
                <Radios
                    {...other}
                    onChange={
                        (value) => props.onChangeHandler(
                            value, true, props.item
                        )
                    }
                />
            </div>
        );
    }

    if (props.item.type === 'select') {
        const {key, type, valid, inputStyles, ...other} = props.item;
        return (
            <div
                style={{...styles.input, ...inputStyles}}
            >
                <Select
                    {...other}
                    onChange={
                        (value, valid) => props.onChangeHandler(
                            value,
                            valid,
                            props.item
                        )
                    }
                />
            </div>
        );
    }

    if (props.item.type === 'datePicker') {
        const {key, type, valid, inputStyles, ...other} = props.item;
        return (
            <div
                style={{...styles.input, ...inputStyles}}
            >
                <DatePicker
                    {...other}
                    onChange={
                        (value) => props.onChangeHandler(
                            value,
                            value ? true : false,
                            props.item
                        )
                    }
                />
            </div>
        );
    }

    if (props.item.type === 'dateTime') {
        const {key, type, valid, inputStyles, ...other} = props.item;
        if (props.item.disabled) {
            props.item.dateProps = {
                ...props.item.dateProps,
                disabled: props.item.disabled
            }
            props.item.timeProps = {
                ...props.item.timeProps,
                disabled: props.item.disabled
            }
        }
        return (
            <div
                style={{...styles.input, ...inputStyles}}
            >
                <DateTime
                    {...other}
                    onChange={
                        (value, valid) => props.onChangeHandler(
                            value, valid, props.item
                        )
                    }
                />
            </div>
        );
    }

    if (props.item.type === 'component') {
        return (
            <div
                style={{...styles.input, ...props.item.inputStyles}}
            >
                {props.item.component}
            </div>
        );
    }

    return 'Broken';
};

const styles = {
    input: {
        maxWidth: 500,
        margin: '0 auto',
        textAlign: 'left'

    }
}

export default InputChecker;