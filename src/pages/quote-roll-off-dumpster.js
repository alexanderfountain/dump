import React, { Component } from 'react';

import AlertBox from '../components/AlertBox';
import FormFeedback from '../components/inputs/FormFeedback';
import FormSubmit from '../components/inputs/FormSubmit';
import InputChecker from '../components/inputs/InputChecker';
import Layout from '../structure/Layout';
import PageHeader from '../components/PageHeader';
import TelDisplay from '../components/TelDisplay';

import { materials } from '../constants/Data';

import { endPoints, sendEmail } from '../axios/ses';

class QuoteRollOffDumpster extends Component {

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
            deliveryDate: {
                key: 'deliveryDate',
                label: 'Delivery date',
                type: 'datePicker',
                minDate: new Date(),
                value: null,
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
                    '10 yards',
                    '20 yards',
                    '30 yards',
                    '40 yards'
                ]
            },
            material: {
                key: 'material',
                label: 'Select material',
                type: 'select',
                required: true,
                valid: false,
                value: '',
                options: [...Object.values(materials)]
            },
            waste: {
                key: 'waste',
                label: 'Waste information',
                placeholder: 'What are you putting in the dumpster?',
                type: 'input',
                value: '',
                multiline: true,
                rows: 5,
                required: true,
                valid: false
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
            deliveryDate: input.deliveryDate.value,
            size: input.size.value,
            material: input.material.value,
            waste: input.waste.value,
            notes: input.notes.value,
            searchParams: searchParams
        };

        sendEmail(endPoints.QUOTE_ROLL_OFF, data)
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
                title='Roll Off Dumpster Rental Quote'
                description='Free Online Quote For Dumpster Rental. Clear And Straight Forward Pricing. No Hidden Fees. Same Day Delivery Available.'
                pageContext={this.props.pageContext}
                canonicalPath={this.props.location.pathname}
            >
                <div
                    style={{backgroundColor: '#FFFFFF', marginBottom: 177, textAlign: 'center'}}
                >
                    <PageHeader
                        title='Roll Off Dumpster Quote'
                        subTitle={<>
                            Receive a quote within 24 hours<br/>or<br/>Call us at <TelDisplay style={{color: 'inherit'}} />
                        </>}
                    />

                    <div
                        style={{paddingLeft: 20, paddingRight: 20, maxWidth: '100vw'}}
                    >

                        {
                            this.props.location.state
                            && this.props.location.state.noPricing
                            && !this.state.readOnly
                                ? <AlertBox
                                    styles={{fontSize: 15, maxWidth: 500, margin: '0 auto 37px'}}
                                >
                                    Online checkout is currently not available for your location or material. We're working hard to change that.<br />Not to worry, <b>fill out the form below</b> and we'll email you a quote.<br />Or call us at <TelDisplay />
                                </AlertBox>
                                : null
                        }

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
                            id='send-roll-off'
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

export default QuoteRollOffDumpster;