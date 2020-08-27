import React from 'react';

import CheckCircle from '@material-ui/icons/CheckCircle';

import { windowGlobal } from '../../constants/Window';

const FormFeedback = (props) => {
    

    if (props.show) {

        windowGlobal.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })

        return (
            <div style={{...styles.wrapper, ...props.wrapperStyles}}>

                <CheckCircle style={{color: '#FFFFFF', fontSize: 50, marginRight: 15}} />

                <div>
                    {
                        props.text
                            ? props.text
                            : (
                                <>
                                    We got your message!
                                    <div style={{marginTop: 7}}>
                                        We're finding the best hauler for you. You'll hear from us soon.
                                    </div>
                                </>
                            )
                    }
                </div>

            </div>
        );
    } else {
        return null;
    }
};

const styles = {
    wrapper: {
        backgroundColor: 'var(--success)',
        padding: 20,
        color:'#FFFFFF',
        borderRadius: 4,
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 500,
        margin: '0 auto 37px'
    }
}

export default FormFeedback;