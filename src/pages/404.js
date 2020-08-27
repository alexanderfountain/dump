import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import ArrowBack from '@material-ui/icons/ArrowBackIos';

import Layout from '../structure/Layout';

import Paths from '../constants/Paths';

import Logo from '../assets/images/four-o-four-logo.svg';

const FourOFour = () => {

    const data = useStaticQuery(graphql`
        query {
            FourOFourBG: file(relativePath: { eq: "four-o-four-background.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return (
        <Layout
            headerStyles={{backgroundColor: 'rgba(255, 255, 255, 0.66)'}}
            mainStyles={{paddingTop: 0}}
            title='404'
            description='Alliance Disposal 404 Page Not Found. This Is Not The Page You Are Looking For. Try The Alliance Disposal Home Page'
        >
            <div
                style={{height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: 77}}
            >
                <Img
                    fluid={data.FourOFourBG.childImageSharp.fluid}
                    alt='The Alliance Disposal 404 design with the Alliance A logo hallowed out in the 0.'
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: '100%',
                        height: '100%',
                    }}
                />
                <div
                    style={{flex: 1, display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', width: '100%', maxWidth: 500, padding: '0 40px', position:'relative', zIndex: 2}}
                >
                    <img src={Logo} style={{width: '100%'}} alt='Alliance Disposal 404 design' />

                    <h3 style={{margin: 0, marginTop: 12, textAlign: 'center', color: '#FFFFFF', fontWeight: 300}}>
                        The force is weak with this page
                    </h3>
                </div>

                <Link
                    to={Paths.home}
                    style={{color: '#FFFFFF', position:'relative', zIndex: 2}}
                >
                    <h3 style={{margin: 0}}>
                        <i style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <ArrowBack /> Back to safety
                        </i>
                    </h3>
                </Link>

            </div>
        </Layout>
    );
};

export default FourOFour;