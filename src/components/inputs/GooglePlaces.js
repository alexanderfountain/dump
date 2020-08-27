import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';

import TextField from '@material-ui/core/TextField';

// dynamically load JavaScript files in our html with callback when finished
const loadScript = (url, callback) => {
    let script = document.createElement("script"); // create script tag
    script.type = "text/javascript";

    // when script state is ready and loaded or complete we will call callback
    if (script.readyState) {
    script.onreadystatechange = function() {
        if (script.readyState === "loaded" || script.readyState === "complete") {
            script.onreadystatechange = null;
            callback();
        }
    };
    } else {
        script.onload = () => callback();
    }

    script.src = url; // load by url
    document.getElementsByTagName("head")[0].appendChild(script); // append to head
};

/**
 * Returns the first valid search result on user selection from dropdown 
 */
const GooglePlaces = (props) => {

    const [address, setAddress] = useState('');
    const [userText, setUserText] = useState('');
    const [touched, setTouched] = useState(false);
    const [validAddress, setValidAddress] = useState(false);

    useEffect(() => {
        if (window && typeof window.google === 'object' && typeof window.google.maps === 'object') {
            
        } else {
            loadScript(
                `https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_AWS_GOOGLE_MAP}&libraries=places&callback=myCallbackFunc`,
                () => {
                    // console.log(autoCompleteRef)
                    // handleScriptLoad(setQuery, autoCompleteRef)
                }
            );
        }
    }, []);

    useEffect(() => {
        if (props.address) {
            setUserText(props.address);
            setAddress(props.address);
        }
    }, []);

    useEffect(() => {
        if (props.startAddress) {
            setUserText(props.startAddress);
            setAddress(props.startAddress);
        }
    }, [props.startAddress]);

    useEffect(() => {
        if (
            props.resetable
            && props.resetValue
        ) {
            setAddress(props.resetValue);
            setUserText(props.resetValue);
        }

    }, [props.resetable, props.resetValue]);

    const onBlurHandler = () => {
        setTouched(true);
        if (!validAddress) {
            if (!props.address) {
                setAddress('');
                setUserText('');
            } else {
                setUserText(address);
                setAddress(address);
            }
        };
        if (
            validAddress
            && userText !== address
        ) {
            setUserText(address);
        }
    }

    const handleChange = address => {
        setUserText(address);
    };

    const handleSelect = (address) => {
        geocodeByAddress(address)
            .then(results => {
                props.onSelect(results[0]);
                if (
                    props.searchOptions
                    && props.searchOptions.types
                    && props.searchOptions.types[0] === '(cities)'
                ) {
                    const town = results[0].address_components.find(item => item.types[0] === 'locality').long_name;
                    setAddress(town);
                    setUserText(town);
                } else {
                    setAddress(results[0].formatted_address);
                    setUserText(results[0].formatted_address);
                }

                setValidAddress(true);
            })
            .catch(error => console.error('GooglePlaces Error', error));
    };

    return (
        <div
            style={{maxWidth: 500, marginBottom: 23, ...props.wrapperStyles}}
        >
            <PlacesAutocomplete
                value={userText}
                onChange={handleChange}
                onSelect={handleSelect}
                searchOptions={{...props.searchOptions, componentRestrictions: {country: "us"}}}
                onError={error => console.warn(error)}
                googleCallbackName="myCallbackFunc"
                // onError={(error) => {
                //     if (error === 'ZERO_RESULTS') props.noResults();
                //     console.warn(error)
                // }}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>

                        <TextField
                            variant='outlined'
                            margin='dense'
                            fullWidth
                            helperText={props.disabled ? 'Loading...' : null}
                            disabled={props.disabled}

                            style={{...props.textFieldStyle, borderRadius: 4}}

                            {...getInputProps({
                                onBlur: onBlurHandler
                            })}
                            
                            {...props.textFieldProps}
                            
                            error={props.required && !validAddress && touched}
                            
                            inputProps={{
                                style: {fontSize: props.superdense ? 17 : null},
                                'aria-label': (props.textFieldProps && props.textFieldProps.label)
                                    ? props.textFieldProps.label
                                    : 'Google autocomplete address',
                            }}
                            InputLabelProps={{style: {fontSize: props.superdense ? 17 : null}}}
                        />

                        <div
                            style={{boxShadow: '0 1px 3px rgba(0, 0, 0, 0.5)', borderRadius: 4, margin: '0 3px', zIndex: 999, backgroundColor: '#FFFFFF'}}
                        >

                            {loading ? <div>Loading...</div> : null}

                            {suggestions.map(suggestion => {
                            
                                const style = suggestion.active
                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };

                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            style,
                                        })}
                                        style={{padding: 10, cursor: 'pointer'}}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}

                        </div>

                    </div>
                )}
            </PlacesAutocomplete>
        </div>
    );
}

GooglePlaces.propTypes = {
    searchOptions: PropTypes.objectOf(PropTypes.any),
    textFieldStyle: PropTypes.objectOf(PropTypes.any),
    wrapperStyles: PropTypes.objectOf(PropTypes.any),
    textFieldProps: PropTypes.objectOf(PropTypes.any)
};

export default GooglePlaces