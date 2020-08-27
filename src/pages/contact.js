import React, { useEffect, useState } from 'react';

import FormFeedback from '../components/inputs/FormFeedback';
import FormSubmit from '../components/inputs/FormSubmit';
import Layout from '../structure/Layout';
import Input from '../components/inputs/Input';
import PageHeader from '../components/PageHeader';
import TelDisplay from '../components/TelDisplay';

import { endPoints, sendEmail } from '../axios/ses';

const Contact = (props) => {

    const [name, setName] = useState({value: '', valid: false});
    const [email, setEmail] = useState({value: '', valid: false});
    const [message, setMessage] = useState({value: '', valid: false});
    const [isLoading, setIsLoading] = useState(false);
    const [flash, setFlash] = useState({style: null, message: null, show: false});
    const [readOnly, setReadOnly] = useState(false);

    useEffect(() => {
        if (
            props.location
            && props.location.state
            && props.location.state.message
        ) {
            setMessage({value: props.location.state.message, valid: true})
        }
    }, [props.location, props.location.state]);

    const inputs = [
        {
            label: 'Name',
            autoComplete: 'name',
            required: true,
            value: name.value,
            valid: name.valid,
            func: setName
        },
        {
            label: 'Email',
            autoComplete: 'email',
            required: true,
            email: true,
            value: email.value,
            valid: email.valid,
            func: setEmail
        },
        {
            label: 'Message',
            required: true,
            multiline: true,
            rows: 5,
            value: message.value,
            valid: message.valid,
            func: setMessage
        }
    ];

    const onChangeHandler = (text, valid, item) => {
        item.func({
            value: text, valid: valid
        });
    }

    const onSubmitHandler = (searchParams) => {
        
        setIsLoading(true);

        const data = {
            name: name.value,
            email: email.value,
            message: message.value,
            searchParams: searchParams
        };

        sendEmail(endPoints.CONTACT_US, data)
        .then(res => {
            setReadOnly(true);
            setIsLoading(false);
            setFlash({style: 'success', message: 'We got your message!', show: true});
        })
        .catch(error => {
            setFlash({style: 'warning', show: true});
            setIsLoading(false);
            console.warn(error);
        });

    }

    return (
        <Layout
            flash={flash}
            restrictWidth
            title='Contact'
            description='Contact Alliance Disposal For All Of Your Waste And Recycling Needs. Experience Dedicated Customer Service'
            pageContext={props.pageContext}
            canonicalPath={props.location.pathname}
            addOrganizationSchema
        >
            <div
                style={{backgroundColor: '#FFFFFF', marginBottom: 177, textAlign: 'center'}}
            >
                <PageHeader
                    title='Contact Alliance Disposal'
                    subTitle='We love to hear from you'
                />

                <h3
                    style={{margin: '-10px auto 37px', fontWeight: 400}}
                >
                    Fill out the form
                    <br />or<br />
                    Call <TelDisplay style={{color: 'inherit'}} />
                </h3>

                <div
                    style={{paddingLeft: 20, paddingRight: 20}}
                >

                    <FormFeedback
                        show={readOnly}
                    />

                    {
                        inputs.map(item => {
                            const {func, valid, ...other} = item;
                            return (
                                <div
                                    key={item.label}
                                >
                                    <Input
                                        {...other}
                                        disabled={readOnly}
                                        onChange={(text, valid) => onChangeHandler(text, valid, item)}
                                    />
                                </div>
                            )
                        })
                    }

                    <FormSubmit
                        onClick={onSubmitHandler}
                        isLoading={isLoading}
                        disabled={!inputs.every(item => item.valid) || readOnly}
                    />                    

                </div>

            </div>
            
        </Layout>
    );
};

export default Contact;