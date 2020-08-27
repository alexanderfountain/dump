import React from 'react';
import { navigate } from 'gatsby';
import Img from 'gatsby-image';

import classes from './ContentOrderCard.module.css';

import ContentWrapper from './ContentWrapper';
import Button from './buttons/PrimaryButton';
import Link from './buttons/TextButton';

const ContentOrderCard = (props) => {
    return (
        <div
            style={{backgroundColor: '#FFFFFF', marginBottom: 15, paddingLeft: 20, paddingRight: 20, display: 'flex'}}
            className={props.flex ? props.right ? classes.itemRight : classes.itemLeft : null}
        >
            <ContentWrapper
                title={props.title}
                wrapperStyles={{paddingBottom: props.image ? 0 : null}}
            >
                
                <div
                    style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}
                >
                    <div>
                        {props.children}

                        <div
                            style={{textAlign: 'left'}}
                        >
                            <Button
                                onClick={() => navigate(props.path)}
                                style={{textTransform: 'capitalize', maxWidth: 102, marginTop: 6, marginBottom: 17}}
                                id={props.id}
                                className={props.className}
                            >
                                order
                            </Button>
                        </div>

                        <div
                            style={{textAlign: 'left', marginBottom: 41, maxWidth: 300}}
                        >
                            <Link
                                to={props.link.to}
                            >
                                {props.link.label}
                            </Link>
                        </div>
                    </div>

                    {
                        props.image
                            ? <Img
                                fluid={props.image.path}
                                alt={props.image.alt}
                                style={{marginTop: 'auto'}}
                            />
                            : null
                    }

                </div>

            </ContentWrapper>
        </div>
    );
};

export default ContentOrderCard;