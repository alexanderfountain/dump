import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import classes from './PageHeader.module.css';

import Button from './buttons/PrimaryButton';
import FindPricing from './FindPricing';

const PageHeader = (props) => {
    return (
        <div
            style={{...styles.wrapper, paddingBottom: props.btnText ? 25 : 0, ...props.styles}}
            className={classes.wrapper}
        >
            
            <h1
                style={{whiteSpace: 'pre-wrap', margin: 0, marginBottom: 7}}
            >
                {props.title}
            </h1>

            {
                props.subTitleH2
                    ? (
                        <h2
                            style={{whiteSpace: 'pre-wrap', margin: 0, marginBottom: props.zeroMargin ? 0 : 37, fontSize: 21, fontWeight: 400, ...props.subTitleStyles}}
                        >
                            {props.subTitle}
                        </h2>
                    )
                    : (
                        <p
                            style={{whiteSpace: 'pre-wrap', margin: 0, marginBottom: props.zeroMargin ? 0 : 37, ...props.subTitleStyles}}
                        >
                            {props.subTitle}
                        </p>
                    )
            }

            {
                props.image
                    ? <div
                        style={{...props.imageWrapper}}
                    >
                        {
                            props.image
                                ? <Img
                                    fluid={props.image.path}
                                    alt={props.image.alt}
                                />
                                : null
                        }
                    </div>
                    : null
            }

            {
                props.btnText
                    ?
                            props.searchField
                                ? <FindPricing
                                    onClick={props.onClick}
                                    btnText={props.btnText}
                                />
                                : (
                                    <Button
                                        onClick={props.onClick}
                                        fullWidth
                                        style={{marginTop: props.searchField ? 20 : props.zeroMargin ? 0 : 50 , maxWidth: 335}}
                                        className={props.btnClassName}
                                    >
                                        {props.btnText}
                                    </Button>
                                )
                    : null
            }

        </div>
    );
};

const styles = {
    wrapper: {
        textAlign: 'center',
        margin: '0 auto'
    }
}

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.any,
    image: PropTypes.any,
    styles: PropTypes.objectOf(PropTypes.any),
    btnText: PropTypes.string,
    searchField: PropTypes.bool,
    imageWrapper: PropTypes.objectOf(PropTypes.any),
    btnClassName: PropTypes.string,
    subTitleH2: PropTypes.bool
};

export default PageHeader;