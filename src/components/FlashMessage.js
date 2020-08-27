import React, { useState } from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

import CheckCircle from '@material-ui/icons/CheckCircle';
import Warning from '@material-ui/icons/Warning';

const FlashMessage = (props) => {

    const [open, setOpen] = useState(true);

    function getStyle() {
        switch(props.flashStyle) {
            case 'warning':
                return (
                    <SnackbarContent
                        style={{backgroundColor: 'var(--delete)'}}
                        message={
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <Warning style={{marginRight: 7}} />
                                {
                                    props.flashMessageText
                                        ? props.flashMessageText
                                        : 'An error occurred. Please try again.'
                                }
                            </div>
                        }
                    />
                );
            case 'success':
                return (
                    <SnackbarContent
                        style={{backgroundColor: 'var(--success)'}}
                        message={
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <CheckCircle style={{marginRight: 7}} />
                                {props.flashMessageText}
                            </div>
                        }
                    />
                );
            default:
                return (
                    <SnackbarContent
                        message={props.flashMessageText}
                    />
                );
        }
    }

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={props.showFlash && open}
            autoHideDuration={3500}
            onClose={() => setOpen(false)}
        >
            {getStyle()}
        </Snackbar>
    );
};

export default FlashMessage;