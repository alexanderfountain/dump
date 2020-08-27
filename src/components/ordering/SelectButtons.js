import React from 'react';

import ButtonBase from '@material-ui/core/ButtonBase';

const SelectButtons = (props) => {
    return (
        <ButtonBase
            onClick={props.onClick}
            disabled={props.disabled}
            className={props.className}
            style={{
                borderStyle: 'solid',
                borderWidth: '1px',
                borderRadius: 4,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 99,
                width: 'calc(50% - 14px)',
                margin: '0 7px 11px',
                cursor: 'pointer',
                color: props.selected ? '#FFFFFF' : props.disabled ? '#757575' : '#232323',
                backgroundColor: props.selected ? 'rgba(6, 56, 82, 0.85)' : 'transparent',
                borderColor: props.selected ? '#063852' : props.disabled ? 'rgba(151, 151, 151, 0.5)' : '#979797',
                padding: 10
            }}
        >

            {
                props.icon
                    ? props.icon
                    : null
            }

            {
                props.value
                    ? (
                        <div
                            style={{fontSize: 29}}
                        >
                            {props.value} <span style={{fontSize: 21}}>{props.cat}</span>
                        </div>
                    )
                    : (
                        <div
                            style={{fontSize: 21}}
                        >
                            {props.cat}
                        </div>
                    )
            }

            <div
                style={{fontSize: 12, ...props.subValueStyles}}
            >
                {props.subValue}
            </div>
        </ButtonBase>
    );
};

export default SelectButtons;