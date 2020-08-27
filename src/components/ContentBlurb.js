import React from 'react';

import classes from './ContentBlurb.module.css';
import Link from './buttons/TextButton';

const ContentBlurb = (props) => {
    return (
        <div
            className={`${classes.wrapper} ${props.extendWidth ? classes.wrapperExtended : null} ${props.wrapperClass}`}
            style={{...props.wrapperStyle, paddingRight: 10, paddingLeft: 10}}
        >
            {
                props.icon
                    ? (
                        <props.icon
                            style={{fontSize: 50, color: '#888888'}}
                            {...props.iconProps}
                        />
                    )
                    : null
            }

            <h4
                style={{margin: 0, marginBottom: 8}}
            >
                {props.title}
            </h4>

            {props.paragraph}
            {props.children}

            <div>
                {
                    props.link
                        ? (
                            <div style={{marginTop: 7, display: 'flex', justifyContent: 'center'}}>
                            
                                <Link
                                    to={props.link.to}
                                    styles={{marginRight: props.link2 ? 30 : 0}}
                                >
                                    {props.link.label}
                                </Link>

                                {
                                    props.link2
                                        ? (
                                            <Link
                                                to={props.link2.to}
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

        </div>
    );
};

export default ContentBlurb;