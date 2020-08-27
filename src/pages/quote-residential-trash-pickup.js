import React, { Component } from 'react';

import FormFeedback from '../components/inputs/FormFeedback';
import FormSubmit from '../components/inputs/FormSubmit';
import InputChecker from '../components/inputs/InputChecker';
import Layout from '../structure/Layout';
import PageHeader from '../components/PageHeader';

import { endPoints, sendEmail } from '../axios/ses';

class QuoteResidentialTrashPickup extends Component {

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
            contract: {
                key: 'contract',
                label: 'Do you currently have a service provider?',
                type: 'radio',
                valid: true,
                value: 'no',
                options: [
                    {label: 'No', value: 'no'},
                    {label: 'Yes', value: 'yes'}
                ]
            },
            company: {
                key: 'company',
                label: 'Name of current company',
                type: 'input',
                value: '',
                hide: true,
                required: false,
                valid: true 
            },
            size: {
                key: 'size',
                label: 'Select size for quote',
                type: 'select',
                required: true,
                valid: false,
                value: [],
                options: [
                    '64 gallon',
                    '96 gallon',
                ]
            },
            frequency: {
                key: 'frequency',
                label: 'Select frequency of service',
                type: 'select',
                required: true,
                valid: false,
                value: [],
                options: [
                    '1x a week',
                    '2x a week',
                    'Every other week'
                ]
            },
            recycling: {
                key: 'recycling',
                label: 'Do you also need a bin for recycling?',
                type: 'radio',
                valid: true,
                value: 'no',
                options: [
                    {label: 'No', value: 'no'},
                    {label: 'Yes', value: 'yes'}
                ]
            },
            notes: {
                key: 'notes',
                label: 'Additional notes',
                type: 'input',
                value: '',
                multiline: true,
                rows: 5,
                required: false,
                valid: true
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

        if (item.key === 'contract') {
            let updatedCompany = {
                ...this.state.inputs.company
            }
            if (value === 'yes') {
                updatedCompany = {
                    ...updatedCompany,
                    hide: false,
                    required: true,
                    valid: updatedCompany.value ? true : false
                }
            } else {
                updatedCompany = {
                    ...updatedCompany,
                    hide: true,
                    required: false,
                    valid: true
                }
            }
            updatedInputs.company = updatedCompany;
        }

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
            company: input.company.value,
            size: input.size.value,
            frequency: input.frequency.value,
            recycling: input.recycling.value,
            notes: input.notes.value,
            searchParams: searchParams
        };

        sendEmail(endPoints.QUOTE_RESIDENTIAL, data)
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
                title='Residential Trash Pickup Quote'
                description='Looking To Save Money On Your Trash Bill? Want To Experience Amazing Customer Service? Get A Free Online Quote To See How Much You Can Save'
                pageContext={this.props.pageContext}
                canonicalPath={this.props.location.pathname}
            >
                <div
                    style={{backgroundColor: '#FFFFFF', marginBottom: 177, textAlign: 'center'}}
                >
                    <PageHeader
                        title='Residential Service Quote'
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
                                item.superdense = true;
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
                            id='send-resi'
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

export default QuoteResidentialTrashPickup;