import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import Today from '@material-ui/icons/Today';

import Colors from '../../constants/Colors';

const DatePickerComponent = (props) => {

    const desktop = useMediaQuery('(min-width: 1024px)');

    const onChangeHandler = (moment) => {
        let valid = moment ? true : false;
        props.onChange(moment, valid);
    }

    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <DatePicker
                inputVariant='outlined'
                margin='dense'
                fullWidth
                orientation='portrait'

                {...props}
                superdense={props.superdense ? 1 : 0}

                format={props.format ? props.format : 'MM/DD/YY'}

                style={{
                    maxWidth: 500,
                    marginBottom: props.superdense ? 22 : 27,
                    ...props.styles
                }}

                onChange={(date) => onChangeHandler(date)}

                InputLabelProps={{style: {fontSize: props.superdense ? 17 : null}}}
                InputProps={{
                    inputProps: {'aria-label': props.label},
                    style: {fontSize: props.superdense ? 17 : null},
                    endAdornment: (
                        <InputAdornment
                            position="end"
                            style={{height: '100%'}}
                        >
                            <IconButton
                                edge="end"
                                style={{...styles.button, right: -1, padding: props.superdense ? 5 : desktop ? 9 : 7}}
                                aria-label='open calendar'
                            >
                                <Today style={{color: '#FFFFFF', fontSize: 29}} />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </MuiPickersUtilsProvider>
    );
};

const styles = {
    button: {
        borderRadius: 3,
        backgroundColor: Colors.tintColor
    }
}

DatePickerComponent.propTypes = {
    superdense: PropTypes.bool
}

export default DatePickerComponent;