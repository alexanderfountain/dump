import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    label: {
        textTransform: 'capitalize'
    }
});

const BtnCancel = (props) => {
    const classes = useStyles();

    return (
        <Button
            classes={{
                label: classes.label
            }}
            variant="contained"
            style={{...styles.btn, ...props.styles}}
            onClick={props.onClick}
            aria-label='cancel'
        >
            {props.label ? props.label : 'cancel'}
        </Button>
    );
};

const styles = {
    btn: {
        backgroundColor: '#FFFFFF',
        border: 'solid 2px #9DA2AB',
        color: '#9DA2AB',
        maxHeight: 36,
        padding: '4px 16px',
        lineHeight: 'normal'
    }
};

export default BtnCancel;
