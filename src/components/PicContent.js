import React from 'react';
import Img from 'gatsby-image';

import TextButton from './buttons/TextButton';

import Colors from '../constants/Colors';

const PicContent = (props) => {
    return (
        <div
            style={{height: 500, width:  '100%', position: 'relative', ...props.wrapperStyles}}
            className={props.wrapperClass}
        >
            {
                props.image
                    ? <Img
                        fluid={props.image.path}
                        alt={props.image.alt}
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            width: '100%',
                            height: '100%',
                            ...props.imgWrapperStyles
                        }}
                        imgStyle={props.imgStyle}
                    />
                    : null
            }
            <div
                style={{height: '100%', backgroundColor: props.lightBg ? 'rgba(255, 255, 255, 0.5)' :'rgba(0, 0, 0, 0.5)', textAlign: 'center', paddingRight: 10, paddingLeft: 10, zIndex: 2, position: 'relative'}}
            >
                <div
                    className='contentWrapper'
                    style={{height: '100%', display: 'flex', flexDirection: 'column', color: props.light ? '#FFFFFF' : null, ...props.contentStyles}}
                >

                    <h2
                        style={{whiteSpace: 'pre-wrap', margin: 0}}
                    >
                        {props.title}
                    </h2>

                    {props.children}

                    {
                        props.link
                            ? (
                                <TextButton
                                    to={props.link.to}
                                    styles={{color: props.light ? Colors.linkLight : null}}
                                >
                                    {props.link.label}
                                </TextButton>
                            )
                            : null
                    }

                </div>
            </div>
        </div>
    );
};

export default PicContent;