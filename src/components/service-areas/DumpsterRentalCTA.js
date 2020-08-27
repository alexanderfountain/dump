import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import useMediaQuery from '@material-ui/core/useMediaQuery';

import FindPricing from '../FindPricing';

import Colors from '../../constants/Colors';

const DumpsterRentalCTA = (props) => {

    const data = useStaticQuery(graphql`
        query {
            HeavyDutyDumpster: file(relativePath: { eq: "construction-dumpster-rental.png" }) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    const breakPoint = useMediaQuery('(min-width: 600px)');

    return (
        <div
            style={{backgroundColor: Colors.allianceBlue, margin: '1.56rem -20px', padding: 20}}
        >
            <div
                style={{display: 'flex', alignItems: 'center', flexDirection: breakPoint ? 'row' : 'column'}}
            >
                <h2
                    style={{margin: 0, textAlign: 'center', color: '#FFFFFF', width: breakPoint ? '50%' : '100%'}}
                >
                    10, 20, 30 and 40 Cubic Yard Dumpster Rentals
                </h2>

               <div
                    style={{width: breakPoint ? '50%' : '75%', padding: breakPoint ? 20 : '20px 10px 10px'}}
                >
                    <Img
                        fluid={data.HeavyDutyDumpster.childImageSharp.fluid}
                        alt={props.imageAlt}
                    />
                </div>
                
            </div>

            <div>
                <FindPricing
                    btnText='get pricing'
                    btnStyle={{backgroundColor: Colors.altSecondaryBtn}}
                    textFieldProps={{label: false, placeholder: 'Delivery address or town'}}
                />
            </div>
        </div>
    );
};

export default DumpsterRentalCTA;