import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

import Paths from '../../constants/Paths';

const TosCheckbox = (props) => {
    return (
        <div
            style={{display: 'flex', alignItems: 'flex-start', marginTop: 17, fontSize: 14, color: '#757575', maxWidth: 360}}
        >
            <Checkbox
                {...props}
                
                icon={<CheckBoxOutlineBlankIcon style={{fontSize: 24}} />}
                checkedIcon={<CheckBoxIcon style={{fontSize: 24}} />}
                style={{padding: 0, marginRight: 7}}
                
            />
            <div>I have read and agree to the <a href={Paths.tos} target="_blank" rel="noopener noreferrer">terms and conditions</a> and <a href={Paths.pp} target="_blank" rel="noopener noreferrer">privacy policy</a></div>
        </div>
    );
};

export default TosCheckbox;