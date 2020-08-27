import React, { useState, useRef, useEffect } from 'react';

import { withStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import MuiSelect from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import ExpandMore from '@material-ui/icons/ExpandMore';

import Colors from '../../constants/Colors';

const Select = withStyles({
    iconOutlined: {
        backgroundColor: Colors.tintColor,
        color: 'white',
        height: 'calc(100% - 2px)',
        top: 1,
        borderRadius: 3,
        width: 40,
        right: 1,
        zIndex: 2
    }
})(MuiSelect);

const CustomSelect = (props) => {

    const inputLabel = useRef(null);
    const [labelWidth, setLabelWidth] = useState(0);
    const [touched, setTouched] = useState(false);

    useEffect(() => {
      setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const onBlurHandler = () => {
        setTouched(true);
    }

    const onChangeHandler = (text) => {
        const valid = !getInvalid(text);
        props.onChange(text, valid);
    }

    const getInvalid = (value) => {
        if (props.multiple) {
            return value.length === 0;
        } else {
            return !value;
        }
    }

    return (
        <FormControl
            required={props.required}
            variant="outlined"
            margin='dense'
            style={{width: '100%', maxWidth: 500, marginBottom: props.superdense ? 22 : 27, ...props.styles}}
        >
            <InputLabel 
                ref={inputLabel}
                style={{fontSize: props.superdense ? 17 : null}}
            >
                {props.label}
            </InputLabel>
            <Select
                IconComponent={ExpandMore}
                input={
                    <OutlinedInput
                        labelWidth={labelWidth}
                        name={props.label}
                        style={{fontSize: props.superdense ? 17 : null}}
                    />
                }

                value={props.value}
                multiple={props.multiple}
                disabled={props.disabled}

                onChange={(event) => onChangeHandler(event.target.value)}
                onBlur={onBlurHandler}
                error={props.required && getInvalid(props.value) && touched}
            >
                {props.noneOption 
                    ? <MenuItem value=''>
                        None
                    </MenuItem>
                    : null
                }
                {
                    props.options.map(item => (
                        <MenuItem
                            key={item}
                            value={item}
                        >
                            {item}
                        </MenuItem>
                    ))
                }
            </Select>
        </FormControl>

    );
};

export default CustomSelect;