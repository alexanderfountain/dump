import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';

import RadioButtonUncheckedOutlined from '@material-ui/icons/RadioButtonUncheckedOutlined';
import RadioButtonChecked from '@material-ui/icons/RadioButtonChecked';


const Radios = (props) => {
    return (
        <FormControl
            style={{maxWidth: 500, marginBottom: props.superdense ? 17 : 22, ...props.styles}}
        >

            <FormLabel
                style={{marginBottom: 8, fontSize: props.superdense ? 17 : null}}
            >
                <Typography variant={props.superdense ? 'body2' : 'body1'}>
                    {props.label}
                </Typography>
            </FormLabel>
             
            <RadioGroup 
                {...props}
                superdense={props.superdense ? 1 : 0}
                onChange={(event) => props.onChange(event.target.value)}
            >

                {
                    props.options.map(option => (
                        <FormControlLabel
                            key={option.value}
                            disabled={props.disabled}
                            value={option.value}
                            control={<Radio
                                icon={<RadioButtonUncheckedOutlined 
                                    style={{fontSize: props.superdense ? 28 : null}}
                                />}
                                checkedIcon={<RadioButtonChecked
                                    style={{fontSize: props.superdense ? 28 : null}}
                                />}
                            />}
                            label={
                                <Typography variant={props.superdense ? 'body2' : 'body1'}>
                                    {option.label}
                                </Typography>
                            }
                        />
                    ))
                }

            </RadioGroup>

        </FormControl>
    );
};

export default Radios;