import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Phone from '@material-ui/icons/PhoneIphone';

import ContentBlurb from '../../components/ContentBlurb';
import FindPricing from '../../components/FindPricing';
import Layout from '../../structure/Layout';
import RollOffSizingGuide from '../../components/content/RollOffSizingGuide';

const RollOffDumpsterSizingGuide = (props) => {

    const data = useStaticQuery(graphql`
        query {
            RollOff30Red: file(relativePath: { eq: "dumpster-sizes.png" }) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return (
        <Layout
            restrictWidth
            title='Dumpster Rental Sizing Guide'
            description="Need A Dumpster Rental? Don't Know What Size You Need? Use This Dumpster Sizing Guide To Find The Right Cubic Yard Dumpster For Your Project."
            pageContext={props.pageContext}
            canonicalPath={props.location.pathname}
        >
            <div style={{padding: '0 20px 37px'}}>
                <RollOffSizingGuide
                    page
                />
            </div>

            <div
                className='bottomCta'
            >
                <ContentBlurb
                    icon={Phone}
                    title='Stay up to date'
                    paragraph='Receive live text message updates to know when to expect your dumpster delivery.'
                    extendWidth
                />

                <p>
                    Not going to be home? Not a problem. Let us know where to place the dumpster and any special instructions. Even send us a picture.
                </p>

                <div
                    style={{marginTop: 37}}
                >
                    <Img
                        fluid={data.RollOff30Red.childImageSharp.fluid}
                        alt='Roll off dumpster sizing guide 30 yard dumpster red'
                    />
                </div>

                <FindPricing
                    btnText='find pricing'
                />
            </div>

        </Layout>
    );
};

export default RollOffDumpsterSizingGuide;