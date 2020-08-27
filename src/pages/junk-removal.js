import React from 'react';
import { Link, navigate, useStaticQuery, graphql } from 'gatsby';

import BottomCtaImage from '@material-ui/icons/Eco';

import ContentBlurb from '../components/ContentBlurb';
import ContentWrapper from '../components/ContentWrapper';
import Layout from '../structure/Layout';
import PageHeader from '../components/PageHeader';
import PrimaryButton from '../components/buttons/PrimaryButton';

import Paths from '../constants/Paths';
import { areaServed } from '../constants/Schema';

const JunkRemoval = (props) => {

    const data = useStaticQuery(graphql`
        query {
            JunkRemovalTruckFull: file(relativePath: { eq: "junk-removal-truck-full.png" }) {
                childImageSharp {
                    fluid(maxWidth: 700) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return (
        <Layout
            restrictWidth
            title='Junk Removal Services'
            description='Junk Removal Specialists Will Do All The Lifting For You. Point. Poof. Gone. Competitive Rates And Same Day Service Available'
            pageContext={props.pageContext}
            canonicalPath={props.location.pathname}
            additionalSchema={[{
                '@context': 'https://schema.org',
                '@type': 'Service',
                name: 'Junk Removal Services',
                areaServed: areaServed,
                availableChannel: {
                    availableLanguage: ['en-US', 'es-419'],
                    serviceUrl: Paths.mainUrl + Paths.orderRollOff.slice(1),
                    servicePhone: Paths.tel,
                    serviceSmsNumber: Paths.tel
                },
                brand: 'Alliance Disposal',
                logo: Paths.logoPath,
                serviceType: 'Junk Removal Services',
                termsOfService: Paths.mainUrl + Paths.tos.slice(1),
                slogan: 'Junk removal without ever lifting a finger',
                serviceOutput: 'Junk removed from home or business without needing to lift a finger',
                hoursAvailable: [
                    'Mon-Sun 07:00 - 19:00'
                ]
            }]}
        >
            <PageHeader
                title='Full Service Junk Removal'
                subTitle='Point. Poof. Gone.'
                image={{
                    path: data.JunkRemovalTruckFull.childImageSharp.fluid,
                    alt: 'Junk removal service from Alliance Disposal'
                }}
                imageWrapper={{margin: '-37px auto 0', maxWidth: 350}}
                btnText='get a free quote today'
                onClick={() => navigate(Paths.quoteJunkRemoval)}
                btnClassName='quote-junk-removal'
            />

            <div
                style={{backgroundColor: '#FFFFFF'}}
                className='greyBorders'
            >
                <ContentWrapper
                    title='Never lift a finger'
                >
                    <p
                        style={{marginTop: 0}}
                    >
                        Our Junk Removal Specialists will do all the lifting for you. Just let them know what needs to be taken away and they'll do the rest.
                    </p>

                    <p>
                        Whether you need household junk, storm debris or construction waste removed, we're here to help.
                    </p>

                    <p>
                        We can take most non-hazardous items. If you're not sure about an item, <Link to={Paths.contact}>email us</Link>.
                    </p>
                    
                    <p style={{marginBottom: 0}}>
                       Need junk removed from your work or commercial property? No problem we'll take care of it for you.
                    </p>
                </ContentWrapper>
            </div>

            <div
                style={{backgroundColor: '#FFFFFF'}}
                className='greyBorders'
            >
                <ContentWrapper
                    title='Upfront pricing'
                    link={{label: 'Get a free estimate', to: Paths.quoteJunkRemoval}}
                    wrapperStyles={{height: 500}}
                >
                    <p
                        style={{marginTop: 0}}
                    >
                        We provide free onsite no commitment estimates. If you like the price we'll start work immediately.
                    </p>

                    <p>
                        The price we quote you is the price you'll pay. We don't believe in hidden fees or surcharges.
                    </p>

                    <p>
                        Payment is simple, we accept all major credit cards.
                    </p>
                    
                </ContentWrapper>
            </div>

            <div
                className='bottomCta'
            >
                <ContentBlurb
                    icon={BottomCtaImage}
                    title='Responsible disposal'
                    paragraph='Alliance Disposal actively tries to salvage unwanted items by finding them new homes and uses. From there we try to recycle as much of the remaining material as possible.'
                    extendWidth
                />

                <p>
                    We try to recycle as much of the remaining material as possible.
                </p>

                <p>
                    Only then do we take the rest to the landfill for final disposal.
                </p>

                <div
                    style={{textAlign: 'center'}}
                >
                    <PrimaryButton
                        onClick={() => navigate(Paths.quoteJunkRemoval)}
                        fullWidth
                        style={{maxWidth: 335, marginTop: 39}}
                        className='quote-junk-removal'
                    >
                        get a free quote
                    </PrimaryButton>
                </div>

            </div>

        </Layout>
    );
};

export default JunkRemoval;