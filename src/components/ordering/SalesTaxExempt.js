import React from 'react';
import Paths from '../../constants/Paths';

const SalesTaxExempt = () => {
    return (
        <div>
            <h3 style={{marginTop: 0}}>Sales Tax Exempt</h3>
            <p>
                If you are sales tax exempt please email the appropriate forms to <a href={`mailto:${Paths.email}`} target="_blank" rel="noopener noreferrer">{Paths.email}</a>
            </p>
            <p>
                Upon receiving and reviewing your forms we will issue an automatic refund to your card for the sales tax amount. You will receive a confirmation email once the amount has been refunded. 
            </p>
        </div>
    );
};

export default SalesTaxExempt;