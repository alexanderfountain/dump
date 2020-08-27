import React, { Component } from 'react';

import FormFeedback from '../components/inputs/FormFeedback';
import FormSubmit from '../components/inputs/FormSubmit';
import InputChecker from '../components/inputs/InputChecker';
import Layout from '../structure/Layout';
import PageHeader from '../components/PageHeader';

import { endPoints, sendEmail } from '../axios/ses';

class QuoteOnDemandPickup extends Component {

    state = {
        inputs: {
            account: {
                key: 'account',
                label: 'Do you have an account with us?',
                type: 'radio',
                valid: true,
                value: 'yes',
                options: [
                    {label: 'Yes', value: 'yes'},
                    {label: 'No', value: 'no'}
                ]
            },
            name: {
                key: 'name',
                label: 'Name',
                type: 'input',
                autoComplete: 'name',
                value: '',
                hide: true,
                required: false,
                valid: true 
            },
            address: {
                key: 'address',
                label: 'Service town or zip code',
                type: 'googlePlaces',
                autoComplete: 'address-level2',
                value: '',
                hide: true,
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
            items: {
                key: 'items',
                label: 'Number of items',
                type: 'select',
                required: true,
                valid: false,
                value: '',
                options: [
                    '1',
                    '2',
                    '3',
                    '4',
                    '5+'
                ]
            },
            notes: {
                key: 'notes',
                label: 'Describe items',
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

        if (item.key === 'account') {
            let updatedName = {
                ...this.state.inputs.name
            }
            let updatedAddress = {
                ...this.state.inputs.address
            }
            if (value === 'no') {
                updatedName = {
                    ...updatedName,
                    hide: false,
                    required: true,
                    valid: updatedName.value ? true : false
                }
                updatedAddress = {
                    ...updatedAddress,
                    hide: false,
                    required: true,
                    valid: updatedAddress.value ? true : false
                }
            } else {
                updatedName = {
                    ...updatedName,
                    hide: true,
                    required: false,
                    valid: true
                }
                updatedAddress = {
                    ...updatedAddress,
                    hide: true,
                    required: false,
                    valid: true
                }
            }
            updatedInputs.name = updatedName;
            updatedInputs.address = updatedAddress;
        }

        this.setState({inputs: updatedInputs});
    }

    onSubmitHandler = (searchParams) => {
        this.setState({
            isLoading: true
        });

        const input = this.state.inputs;

        const data = {
            account: input.account.value,
            name: input.name.value,
            email: input.email.value,
            address: input.address.value,
            items: input.items.value,
            notes: input.notes.value,
            searchParams: searchParams
        };

        sendEmail(endPoints.QUOTE_ON_DEMAND_PICKUP, data)
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
                title='On-Demand Trash Pickup'
                description='Only Have A Few Items You Need Picked Up? Get A Free Online Quote. Easy To Schedule. Leave Your Items By The Curb And We Will Do The Rest'
                pageContext={this.props.pageContext}
                canonicalPath={this.props.location.pathname}
            >
                <div
                    style={{backgroundColor: '#FFFFFF', marginBottom: 177, textAlign: 'center'}}
                >
                    <PageHeader
                        title='On-Demand Pickup Quote'
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

export default QuoteOnDemandPickup;