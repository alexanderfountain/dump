import React from 'react';
import Img from 'gatsby-image';

import classes from './ContentWrapper.module.css';

import Link from './buttons/TextButton';

const ContentWrapper = (props) => {
    return (
        <div
            style={{paddingBottom: props.image ? 0 : 39, display: 'flex', flexDirection: 'column', backgroundColor: props.bgColor ? props.bgColor : null, ...props.wrapperStyles}}
            className={`contentWrapper ${props.wrapperClass}`}
        >
            <div
                style={{paddingRight: 10, paddingLeft: 10, display: 'flex', flexDirection: 'column', flex: 1}}
            >

                <h2
                    style={{whiteSpace: 'pre-wrap', textAlign: 'center'}}
                    className={classes.h2Class}
                >
                    {props.title}
                </h2>

                <p style={{margin: 0}}>
                    {props.paragraph}
                </p>

                {props.children}

                {
                    props.link
                        ? (
                            <div style={{marginTop: 7, display: 'flex', justifyContent: 'center'}}>
                                <Link
                                    to={props.link.to}
                                    styles={{marginRight: props.link2 ? 30 : 0, ...props.linkStyles}}
                                >
                                    {props.link.label}
                                </Link>

                                {
                                    props.link2
                                        ? (
                                            <Link
                                                to={props.link2.to}
                                                styles={{...props.linkStyles}}
                                            >
                                                {props.link2.label}
                                            </Link>
                                        )
                                        : null
                                }

                            </div>
                        )
                        : null
                }

            </div>

            {
                props.image
                    ? (
                        <div
                            style={{marginTop: 'auto', ...props.imageStyles}}
                            className={props.imageClass}
                        >
                            {
                                props.image
                                    ? <Img
                                        fluid={props.image.path}
                                        alt={props.image.alt}
                                        style={props.imgWrapperStyle}
                                    />
                                    : null
                            }
                        </div>
                    )
                    : null
            }

        </div>
    );
};

export default ContentWrapper;