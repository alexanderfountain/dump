import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';

import CancelButton from './buttons/CancelButton';
import PrimaryButton from './buttons/PrimaryButton';

const DialogWrapper = (props) => {
    return (
        <Dialog
            open={props.open}
            onClose={props.onClose}
            maxWidth={props.maxWidth ? props.maxWidth : 'lg'}
            fullWidth={props.fullWidth}
            fullScreen={props.fullScreen}
            PaperProps={{style: !props.fullScreen ? {marginRight: 10, marginLeft: 10} : null}}
        >
            <div
                style={{padding: 20}}
            >
                {props.children}

                <div style={{marginTop: 60, textAlign: 'right'}}>
                    {
                        props.isLoading
                            ? (
                                <CircularProgress color="secondary" />
                            )
                            : (
                                <div>
                                    <CancelButton
                                        styles={{marginRight: props.actionBtn ? 40 : 0}}
                                        onClick={props.onClose}
                                        label={props.cancelLabel}
                                    />
                                    {
                                        props.actionBtn
                                            ? <PrimaryButton
                                                onClick={props.onAction}
                                                disabled={props.disabled}
                                            >
                                                {props.actionBtn}
                                            </PrimaryButton>
                                            : null
                                    }
                                </div>
                            )
                    }

                </div>

            </div>
        </Dialog>
    );
};

export default DialogWrapper;