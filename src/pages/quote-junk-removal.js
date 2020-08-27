import React, { Component } from 'react';

import FormFeedback from '../components/inputs/FormFeedback';
import FormSubmit from '../components/inputs/FormSubmit';
import InputChecker from '../components/inputs/InputChecker';
import Layout from '../structure/Layout';
import PageHeader from '../components/PageHeader';

import { endPoints, sendEmail } from '../axios/ses';

class QuoteJunkRemoval extends Component {

    state = {
        inputs: {
            name: {
                key: 'name',
                label: 'Name',
                type: 'input',
                autoComplete: 'name',
                value: '',
                required: true,
                valid: false
            },
            email: {
                key: 'email',
                label: 'Email',
                type: 'input',
                autoComplete: 'email',
                value: '',
                email: true,
                required: true,
                valid: false
            },
            address: {
                key: 'address',
                label: 'Service town or zip code',
                type: 'googlePlaces',
                autoComplete: 'address-level2',
                value: '',
                required: true,
                valid: false
            },
            notes: {
                key: 'notes',
                label: 'Describe the job',
                type: 'input',
                value: '',
                multiline: true,
                rows: 5,
                required: true,
                valid: false
            },
        },
        readOnly: false,
        isLoading: false,
        flash: {style: null, message: null, show: false}
    };

    onChangeHandler = (value, valid, item) => {
        const updatedInputs = {...this.state.inputs};
        const updatedItem = {
            ...item,
            value: value,
            valid: valid
        };
        updatedInputs[item.key] = updatedItem;

        this.setState({inputs: updatedInputs});
    }

    onSubmitHandler = (searchParams) => {
        this.setState({
            isLoading: true
        });

        const input = this.state.inputs;

        const data = {
            name: input.name.value,
            email: input.email.value,
            address: input.address.value,
            notes: input.notes.value,
            searchParams: searchParams
        };

        sendEmail(endPoints.QUOTE_JUNK_REMOVAL, data)
        .then(res => {
            this.setState({
                readOnly: true,
                isLoading: false,
                flash: {style: 'success', message: "We're preparing your quote!", show: true}
            });
        })
        .catch(error => {
            this.setState({
                isLoading: false,
                flash: {style: 'warning', show: true}
            });
            console.warn(error);
        });

    }

    render() {
        return (
            <Layout
                flash={this.state.flash}
                restrictWidth
                title='Junk Removal Quote'
                description="Receive A Free Junk Removal Estimate Online. We Do All The Work For You. Sit Back Relax And Watch Your Junk Disappear"
                pageContext={this.props.pageContext}
                canonicalPath={this.props.location.pathname}
            >
                <div
                    style={{backgroundColor: '#FFFFFF', marginBottom: 177, textAlign: 'center'}}
                >
                    <PageHeader
                        title='Junk Removal Quote'
                        subTitle='Receive a quote within 24 hours'
                    />

                    <div
                        style={{paddingLeft: 20, paddingRight: 20, maxWidth: '100vw'}}
                    >

                        <FormFeedback
                            show={this.state.readOnly}
                        />

                        {
                            Object.values(this.state.inputs).map(item => {
                                if (this.state.readOnly) item.disabled = true;
                                return (
                                    <InputChecker
                                        key={item.key}
                                        item={item}
                                        onChangeHandler={this.onChangeHandler}
                                    />
                                )
                            })
                        }

                        <FormSubmit
                            id='send-junk-removal'
                            onClick={this.onSubmitHandler}
                            isLoading={this.state.isLoading}
                            disabled={
                                Object.values(this.state.inputs).some(item => !item.valid)
                                || this.state.readOnly
                            }
                            secondary
                        />     

                    </div>

                </div>
                
            </Layout>
        );
    }
}

export default QuoteJunkRemoval;