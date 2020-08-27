import React, { Component } from 'react';

import FormFeedback from '../components/inputs/FormFeedback';
import FormSubmit from '../components/inputs/FormSubmit';
import InputChecker from '../components/inputs/InputChecker';
import Layout from '../structure/Layout';
import PageHeader from '../components/PageHeader';

import { endPoints, sendEmail } from '../axios/ses';

class QuoteCommercial extends Component {

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
            phone: {
                key: 'phone',
                label: 'Phone number',
                type: 'input',
                autoComplete: 'tel',
                value: '',
                required: true,
                valid: false
            },
            address: {
                key: 'address',
                label: 'Service address or town',
                type: 'googlePlaces',
                autoComplete: 'address-level2',
                value: '',
                required: true,
                valid: false
            },
            company: {
                key: 'company',
                label: 'Name of current hauler',
                helperText: 'If you do not have one enter N/A or new business',
                type: 'input',
                value: '',
                required: true,
                valid: false
            },
            size: {
                key: 'size',
                label: 'Select size for quote',
                type: 'select',
                required: true,
                valid: false,
                value: '',
                options: [
                    '2 cubic yards',
                    '3 cubic yards',
                    '4 cubic yards',
                    '6 cubic yards',
                    '8 cubic yards'
                ]
            },
            frequency: {
                key: 'frequency',
                label: 'Select frequency of service',
                type: 'select',
                required: true,
                valid: false,
                value: '',
                options: [
                    '1x a week',
                    '2x a week',
                    '3x a week',
                    'Every day',
                    'Every other week'
                ]
            },
            business: {
                key: 'business',
                label: 'What type of business are you',
                type: 'select',
                required: true,
                valid: false,
                value: '',
                options: [
                    'Apartments/Lodging',
                    'Automotive',
                    'Church',
                    'College/University',
                    'Entertainment Venue',
                    'Grocery Store',
                    'Gym',
                    'Hotel',
                    'K-12 School',
                    'Manufacturing/Industrial',
                    'Office',
                    'Restaurant/Bar',
                    'Retail',
                    'Salon',
                    'Other'
                ]
            },
            recycling: {
                key: 'recycling',
                label: 'Do you also need a container for recycling?',
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

        // if (item.key === 'contract') {
        //     let updatedCompany = {
        //         ...this.state.inputs.company
        //     }
        //     if (value === 'yes') {
        //         updatedCompany = {
        //             ...updatedCompany,
        //             hide: false,
        //             required: true,
        //             valid: updatedCompany.value ? true : false
        //         }
        //     } else {
        //         updatedCompany = {
        //             ...updatedCompany,
        //             hide: true,
        //             required: false,
        //             valid: true
        //         }
        //     }
        //     updatedInputs.company = updatedCompany;
        // }

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
            phone: input.phone.value,
            address: input.address.value,
            company: input.company.value,
            size: input.size.value,
            frequency: input.frequency.value,
            business: input.business.value,
            recycling: input.recycling.value,
            notes: input.notes.value,
            searchParams: searchParams
        };

        sendEmail(endPoints.QUOTE_COMMERCIAL, data)
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
                title='Commercial Dumpster Quote'
                description='Free Online Quote For Recurring Commercial Dumpster Service For Any Size Business. Transparent Pricing. No Hidden Fees.'
                pageContext={this.props.pageContext}
                canonicalPath={this.props.location.pathname}
            >
                <div
                    style={{backgroundColor: '#FFFFFF', marginBottom: 177, textAlign: 'center'}}
                >
                    <PageHeader
                        title='Commercial Dumpster Quote'
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
                            id='send-commercial'
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
    };
};

export default QuoteCommercial;