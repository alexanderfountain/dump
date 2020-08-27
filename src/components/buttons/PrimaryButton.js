import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    label: {
        textTransform: 'capitalize'
    }
});

const PrimaryButton = (props) => {
    const classes = useStyles();

    return (
        <Button
            classes={{
                label: classes.label
            }}
            onClick={props.onClick}
            disabled={props.disabled}
            fullWidth={props.fullWidth}
            href={props.href}
            type={props.type}
            id={props.id}
            className={props.className}
            variant="contained"
            color={props.secondary ? 'secondary' : 'primary'}
            style={{fontSize: '0.94rem', height: 36, lineHeight: 1, ...props.style}}
        >
            {props.children}
        </Button>
    );
};

export default PrimaryButton;