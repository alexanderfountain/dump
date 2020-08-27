import React, { useState, useEffect } from 'react';

import Tooltip from '@material-ui/core/Tooltip';

import Help from '@material-ui/icons/Help';

import moment from 'moment';

import DatePicker from '../inputs/DatePicker';
import GetSkus from '../inputs/GetSkus';
import StepContent from './StepContent';
import StepSummary from './StepSummary';

const RollOffServiceInfo = (props) => {

    const [displayAddress, setDisplayAddress] = useState('');
    const [startAddress, setStartAddress] = useState(null);

    useEffect(() => {
        if (props.startAddress) {
            setStartAddress(props.startAddress)
        }
    }, [props.startAddress]);

    const serviceInfoHandler = (field, value) => {
        switch (field) {
            case 'date':
                props.setDeliveryDate(value);
                if (props.county !== '') props.toggleShow(false);
                break;
            default: break;
        }
    }

    const onAddressSelectHandler = (returnObj) => {

        setDisplayAddress(returnObj.displayAddress);
        props.onAddressSelect(returnObj);

        if (props.deliveryDate) props.toggleShow(false);

    }

    return (
        <div style={props.styles.stepWrapper}>

            <StepSummary
                show={!props.show}
                onHide={() => props.toggleShow(true)}
            >
                <div>
                    {displayAddress}
                </div>
                <div>Deliver on {
                    props.deliveryDate ? moment(props.deliveryDate).format('MM/DD/YY') : null
                }</div>
            </StepSummary>
            
            <StepContent
                show={props.show}
                extraHeight={500}
            >

                <h3 style={props.styles.header}>
                    Service info
                    <Tooltip
                        disableFocusListener
                        disableTouchListener
                        enterDelay={props.toolTipDelay}
                        title="Pricing changes by location and material as each county sets their own disposal rates."
                    >
                        <Help style={props.styles.helpIcon} />
                    </Tooltip>
                </h3>
                <div style={{...props.styles.descText, marginBottom: 19}}>
                    Pricing changes based on location and material type.
                </div>

                <GetSkus
                    onSelect={onAddressSelectHandler}
                    setProductSkus={props.setProductSkus}
                    startAddress={startAddress}
                />
                
                <DatePicker
                    label='Delivery date'
                    value={props.deliveryDate}
                    onChange={(value) => serviceInfoHandler('date', value)}
                    minDate={moment(new Date()).add(1, 'd')}
                    styles={{marginBottom: 0}}
                    shouldDisableDate={(date) => {
                        const christmasEve = moment('2000-12-24');
                        const christmas = moment('2000-12-25');
                        const memorial = moment('2020-05-25');
     
                        return (
                            (date.day() === 0 || date.day() === 6)
                            || (date.date() === christmasEve.date() && date.month() === christmasEve.month())
                            || (date.date() === christmas.date() && date.month() === christmas.month())
                            || (date.date()) === memorial.date()
                        );
                    }}
                    autoOk
                    superdense
                />
            </StepContent>
        </div>
    );
};

export default RollOffServiceInfo;