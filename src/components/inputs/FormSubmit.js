import React, { useState } from 'react';
import { connect } from 'react-redux';

import CircularProgress from '@material-ui/core/CircularProgress';

import FloodGate from './FloodGate';
import PrimaryButton from '../buttons/PrimaryButton';

const FormSubmit = (props) => {

    const [gate, setGate] = useState('');

    return (
        <div
            style={{...styles.wrapper, ...props.wrapperStyles}}
        >

            <FloodGate value={gate} changed={(text) => setGate(text)} />
            {
                props.isLoading
                    ? <CircularProgress color="secondary" />
                    : (
                        <PrimaryButton
                            onClick={() => props.onClick(props.searchParams)}
                            disabled={props.disabled || (gate !== '')}
                            className='formSendBtn'
                            secondary={props.secondary}
                            id={props.id}
                        >
                            {props.btnText ? props.btnText : 'send'}
                        </PrimaryButton>
                    )
            }

        </div>
    );
};

const styles = {
    wrapper: {
        paddingBottom: 62,
        textAlign: 'right',
        maxWidth: 500,
        margin: '0 auto'
    }
};

const mapStateToProsp = state => {
    return {
        searchParams: state.app.searchParams
    };
};

export default connect(mapStateToProsp)(FormSubmit);