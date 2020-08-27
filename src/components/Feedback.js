import React, { useState } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import Button from './buttons/PrimaryButton';
import Input from './inputs/Input';

import Colors from '../constants/Colors';

import { sendEmail, endPoints } from '../axios/ses';

/**
 * Pass in a data object to send additional information withe the email
 * i.e. user name, email, current page, etc.
 * @param {Object} data
*/
const Feedback = (props) => {

    const [text, setText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const submitHandler = () => {
        setIsLoading(true);

        const data = {
            feedback: text,
            data: JSON.stringify(props.data),
        };

        sendEmail(endPoints.SEND_FEEDBACK, data)
        .then(res => {
            setIsLoading(false);
            setError(false);
            setSuccess(true);
        })
        .catch(error => {
            setIsLoading(false);
            setError(true);
            console.warn(error);
        });

    }

    return (
        <div
            style={{maxWidth: 500, ...props.style}}
        >
            {
                props.customHeader
                    ? props.customHeader
                    : (
                        <h3
                            style={{margin: 0}}
                        >
                            {props.title}
                        </h3>
                    )
            }

            <Input
                label={props.label ? props.label : 'How can we improve?'}
                multiline
                rows={5}
                value={text}
                onChange={setText}

                {...props.inputProps}
            />

            <div
                style={{textAlign: 'right'}}
            >
                {
                    isLoading
                        ? <CircularProgress />
                        : success
                            ? <div style={{color: Colors.success}}>
                                Thank you, we appreciate your feedback!
                            </div>
                            : (
                                <Button
                                    onClick={submitHandler}
                                    secondary
                                    style={{marginTop: -10}}
                                >
                                    leave feedback
                                </Button>
                            )
                }
        
                {
                    error
                        ? (
                            <div
                                style={{fontSize: 14, marginTop: 10, color: Colors.error}}
                            >
                                An error occurred while sending. Please try again.
                            </div>
                        )
                        : null
                }

            </div>

        </div>
    );
};

export default Feedback;