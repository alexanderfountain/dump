import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { MuiPickersUtilsProvider, DatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import Clock from '@material-ui/icons/QueryBuilder';
import Today from '@material-ui/icons/Today';

import Colors from '../../constants/Colors';

const DateTime = (props) => {

    const desktop = useMediaQuery('(min-width: 1024px)');
    const fiveHundred = useMediaQuery('(max-width: 500px)');

    const onChangeHandler = (moment, field) => {
        let valid = false;

        if (field === 'date') {
            valid = props.value.time && moment ? true : false;
            props.onChange({date: moment, time: props.value.time}, valid);
        } else {
            valid = props.value.date && moment && moment._isValid ? true : false;
            props.onChange({date: props.value.date, time: moment}, valid);
        }
    }

    return (
        <div
            style={{
                display: fiveHundred ? 'block' : 'flex',
                maxWidth: 500,
                marginBottom: props.superdense ? 22 : 27,
                ...props.wrapperStyles
            }}
        >
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <DatePicker
                    inputVariant='outlined'
                    margin='dense'

                    {...props.dateProps}

                    label={props.label.date}
                    value={props.value.date}

                    format={props.format ? props.format : 'MM/DD/YY'}
                    style={{
                        maxWidth: 250.5,
                        marginRight: fiveHundred ? 0 : 15,
                        ...props.dateStyles
                    }}

                    onChange={(date) => onChangeHandler(date, 'date')}

                    InputProps={{
                        endAdornment: (
                            <InputAdornment
                                position="end"
                                style={{height: '100%'}}
                            >
                                <IconButton
                                    edge="end"
                                    style={{...styles.button, right: -1, padding: desktop ? 6.25 : 6.5}}
                                >
                                    <Today style={{color: '#FFFFFF'}} />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                <KeyboardTimePicker
                    inputVariant='outlined'
                    margin='dense'
                    placeholder='08:00 AM'
                    mask='__:__ _M'

                    {...props.timeProps}

                    label={props.label.time}
                    value={props.value.time}

                    style={{
                        maxWidth: 250.5,
                        marginLeft: fiveHundred ? 0 : 15,
                        ...props.timeStyles
                    }}

                    onChange={(time) => onChangeHandler(time, 'time')}

                    keyboardIcon={<Clock style={{color: '#FFFFFF'}} />}
                    KeyboardButtonProps={{
                        style: {
                            ...styles.button,
                            right: -13,
                            padding: desktop
                                ? 6.25
                                : fiveHundred
                                    ? 6.75
                                    : 7
                        }
                    }}
                />

            </MuiPickersUtilsProvider>
        </div>
    );
};

const styles = {
    button: {
        borderRadius: 3,
        backgroundColor: Colors.tintColor
    }
}

export default DateTime;