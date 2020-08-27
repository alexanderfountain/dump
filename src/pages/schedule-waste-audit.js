import React, { Component } from 'react';

import FormLabel from '@material-ui/core/FormLabel';

import moment from 'moment';

import FormFeedback from '../components/inputs/FormFeedback';
import FormSubmit from '../components/inputs/FormSubmit';
import InputChecker from '../components/inputs/InputChecker';
import Layout from '../structure/Layout';
import PageHeader from '../components/PageHeader';

import { endPoints, sendEmail } from '../axios/ses';

class ScheduleWasteAudit extends Component {

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
            company: {
                key: 'company',
                label: 'Name of your company',
                type: 'input',
                value: '',
                required: false,
                valid: true 
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
            hauler: {
                key: 'hauler',
                label: 'Name of current garbage company',
                type: 'input',
                value: '',
                hide: true,
                required: false,
                valid: true 
            },
            header: {
                key: 'header',
                type: 'component',
                component: <FormLabel>Select 3 dates and times that work for you</FormLabel>,
                valid: true,
                inputStyles: {marginBottom: 8}
            },
            date1: {
                key: 'date1',
                label: {date: 'Select a date', time: 'Select a time'},
                type: 'dateTime',
                value: {date: null, time: null},
                dateProps: {
                    required: true,
                    clearable: true,
                    disablePast: true
                },
                timeProps: {
                    required: true
                },
                valid: false 
            },
            date2: {
                key: 'date2',
                label: {date: 'Select a date', time: 'Select a time'},
                type: 'dateTime',
                value: {date: null, time: null},
                dateProps: {
                    required: true,
                    clearable: true,
                    disablePast: true
                },
                timeProps: {
                    required: true
                },
                valid: false 
            },
            date3: {
                key: 'date3',
                label: {date: 'Select a date', time: 'Select a time'},
                type: 'dateTime',
                value: {date: null, time: null},
                dateProps: {
                    required: true,
                    clearable: true,
                    disablePast: true
                },
                timeProps: {
                    required: true
                },
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

        if (item.key === 'contract') {
            let updatedHauler = {
                ...this.state.inputs.hauler
            }
            if (value === 'yes') {
                updatedHauler = {
                    ...updatedHauler,
                    hide: false,
                    required: true,
                    valid: updatedHauler.value ? true : false
                }
            } else {
                updatedHauler = {
                    ...updatedHauler,
                    hide: true,
                    required: false,
                    valid: true
                }
            }
            updatedInputs.hauler = updatedHauler;
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
            hauler: input.hauler.value,
            date1: 'Date: '
                + moment(input.date1.value.date).format('MM/DD/YY')
                + ' Time: '
                + moment(input.date1.value.time).format('h:mm a'),
            date2: 'Date: '
                + moment(input.date2.value.date).format('MM/DD/YY')
                + ' Time: '
                + moment(input.date2.value.time).format('h:mm a'),
            date3: 'Date: '
                + moment(input.date3.value.date).format('MM/DD/YY')
                + ' Time: '
                + moment(input.date3.value.time).format('h:mm a'),
            notes: input.notes.value,
            searchParams: searchParams
        };

        sendEmail(endPoints.SCHEDULE_WASTE_AUDIT, data)
            .then(res => {
                this.setState({
                    readOnly: true,
                    isLoading: false,
                    flash: {style: 'success', message: 'We got your message!', show: true}
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
                title='Schedule A Waste Audit'
                description='New Or Existing Business? Want To Save Money On Your Waste Bill? Alliance Disposal Free No Commitment Waste Audit To Save You Money'
                pageContext={this.props.pageContext}
                canonicalPath={this.props.location.pathname}
            >
                <div
                    style={{backgroundColor: '#FFFFFF', marginBottom: 177, textAlign: 'center'}}
                >
                    <PageHeader
                        title='Schedule A Free Waste Audit'
                        subTitle='Save anywhere from 5% to 50% on your waste bill'
                    />

                    <div
                        style={{paddingLeft: 20, paddingRight: 20, maxWidth: '100vw'}}
                    >

                        <FormFeedback
                            show={this.state.readOnly}
                        />

                        {
                            Object.values(this.state.inputs).map(item => (
                                <InputChecker
                                    key={item.key}
                                    item={item}
                                    onChangeHandler={this.onChangeHandler}
                                />
                            ))
                        }

                        <FormSubmit
                            id='send-waste-audit'
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

export default ScheduleWasteAudit;