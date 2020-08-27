import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

const Checkboxes = (props) => {
    return (
        <div
            style={{display: 'flex', alignItems: 'center'}}
        >
            <Checkbox
                {...props}

                superdense={props.superdense ? 1 : 0}
                
                icon={<CheckBoxOutlineBlankIcon style={{fontSize: props.superdense ? 25 : null}} />}
                checkedIcon={<CheckBoxIcon style={{fontSize: props.superdense ? 25 : null}} />}
                style={{padding: 0, marginRight: 7}}
                
            />
            <div>
                {props.label}
            </div>
        </div>
    );
};

export default Checkboxes;