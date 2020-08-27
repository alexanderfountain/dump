import React from 'react';
import { Link } from 'gatsby';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const TextButton = (props) => {
    return (
        <Link
            to={props.to}
            state={props.state}
            style={{...props.styles}}
        >
            {props.children}
            <ChevronRightIcon
                style={{fontSize: '1.15rem', verticalAlign: 'sub'}}
            />
        </Link>
    );
};

export default TextButton;