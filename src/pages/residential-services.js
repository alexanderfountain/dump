import React from 'react';
import { navigate, useStaticQuery, graphql } from 'gatsby';

import HomeWork from '@material-ui/icons/HomeWorkOutlined';

import ContentBlurb from '../components/ContentBlurb';
import ContentWrapper from '../components/ContentWrapper';
import Layout from '../structure/Layout';
import PageHeader from '../components/PageHeader';
import PicContent from '../components/PicContent';
import PrimaryButton from '../components/buttons/PrimaryButton';

import Paths from '../constants/Paths';
import { areaServed } from '../constants/Schema';

const ResidentialServices = (props) => {

    const data = useStaticQuery(graphql`
        query {
            ResiServices: file(relativePath: { eq: "residential-waste-recycling-services.png" }) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            ResiHouseWithCan: file(relativePath: { eq: "residential-curbside-waste-pick-up.jpeg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            RecyclingSymbol: file(relativePath: { eq: "recycling-symbol.png" }) {
                childImageSharp {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            BulkPickup: file(relativePath: { eq: "bulk-trash-pickup.jpeg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            OneArm: file(relativePath: { eq: "residential-trash-pickup.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            RollOff20TubeGreen: file(relativePath: { eq: "rent-a-20-yard-dumpster.png" }) {
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
            title='Residential Trash &amp; Recycling Services'
            description='Curbside Residential Trash And Recycling Service. Dedicated And Friendly Customer Service. Competitive Pricing'
            pageContext={props.pageContext}
            canonicalPath={props.location.pathname}
            additionalSchema={[{
                '@context': 'https://schema.org',
                '@type': 'Service',
                name: 'Residential Waste Services',
                areaServed: areaServed,
                availableChannel: {
                    availableLanguage: ['en-US', 'es-419'],
                    serviceUrl: Paths.mainUrl + Paths.orderRollOff.slice(1),
                    servicePhone: Paths.tel,
                    serviceSmsNumber: Paths.tel
                },
                brand: 'Alliance Disposal',
                logo: Paths.logoPath,
                serviceType: 'Residential Waste Services',
                termsOfService: Paths.mainUrl + Paths.tos.slice(1),
                slogan: 'Meeting all of your home waste service needs',
                serviceOutput: 'Weekly trash and recycling pick up for homes',
                hoursAvailable: [
                    'Mon-Sun 07:00 - 19:00'
                ]
            }]}
        >

            <PageHeader
                title='Residential Services'
                subTitle='Helping keep your neighborhood clean'
                image={{
                    path: data.ResiServices.childImageSharp.fluid,
                    alt: 'Residential trash pick up for homeowners'
                }}
                btnText='get a free quote now'
                onClick={() => navigate(Paths.quoteResi)}
                btnClassName='quote-residential-trash-pickup'
            />

            <div
                className='greyBorders'
            >
                <PicContent
                    image={{
                        path: data.ResiHouseWithCan.childImageSharp.fluid,
                        alt: 'Weekly home trash pick up'
                    }}
                    wrapperStyles={{backgroundPosition: 'center left'}}
                    title='Residential Trash Pickup'
                    link={{label: 'Get a quote', to: Paths.quoteResi}}
                    light
                >
                    <p>
                        <b>Conveniently </b>
                        manage your account and
                        schedule services online. Backdoor service available in select locations.
                    </p>
                    <p>
                        Consistent, <b>dependable</b> and friendly service. Efficient and timely routes.
                    </p>
                    <p>
                        You will get the right size can for your daily needs. Enjoying the <b>flexibility</b> of available extra pickups.
                    </p>
                </PicContent>
            </div>

            <div
                className='greyBorders'
                style={{backgroundColor: '#FFFFFF'}}
            >
                <ContentWrapper
                    title='Residential Recycling Pickup'
                    link={{label: 'Get a quote', to: Paths.quoteResi}}
                    imageStyles={{maxWidth: 200, width: '100%', margin: '52px auto 10px'}}
                    image={{
                        path: data.RecyclingSymbol.childImageSharp.fluid,
                        alt: 'Weekly recycling pick up for home'
                    }}
                >
                    <p
                        style={{marginTop: 0}}
                    >
                        Recycling has never been easier. Mix all of your recyclables into one bin. Our partner facilities will sort all of them for you.
                    </p>

                    <p>
                        Help protect our environment and oceans from pollution and litter.
                    </p>

                    <p>
                        Do what is right. Make a difference. Recycle.
                    </p>
                </ContentWrapper>
            </div>

            <div
                className='greyBorders'
            >
                <PicContent
                    image={{
                        path: data.BulkPickup.childImageSharp.fluid,
                        alt: 'Residential trash bulk pick up'
                    }}
                    title='Bulk Trash Pickup'
                    link={{label: 'Get a quote', to: Paths.quoteResi}}
                    light
                >
                    <p
                        style={{marginTop: 0}}
                    >
                        Schedule a pickup anytime online.
                    </p>
                    <p>
                        Appliances, mattresses, furniture, exercise equipment we can take it all.
                    </p>
                </PicContent>
            </div>

            <div
                className='bottomCta'
            >
                <ContentBlurb
                    icon={HomeWork}
                    title='Property managers and homeowners associations'
                    paragraph='Keep your communities clean and within budget. Alliance Disposal will set up a waste and recycling program that meets your specific needs.'
                    extendWidth
                />

                <p>
                    Community members will enjoy access to our easy to use online portals.
                </p>

                <p>
                    Contact us to learn more about special rates and offers
                </p>

                <div
                    style={{marginTop: 39, marginBottom: 39, textAlign: 'center'}}
                >
                    <PrimaryButton
                        onClick={() => navigate(Paths.contact)}
                        fullWidth
                        style={{maxWidth: 335}}
                    >
                        get in contact
                    </PrimaryButton>
                </div>
            </div>

            <div
                className='greyBorders'
            >
                <PicContent
                    image={{
                        path: data.OneArm.childImageSharp.fluid,
                        alt: 'Residential trash pick up by a one arm truck'
                    }}
                    title='On-Demand Pickup'
                    link={{label: 'Get a quote', to: Paths.quoteOnDemand}}
                    wrapperStyles={{backgroundPosition: 'center center'}}
                    lightBg
                >
                    <p
                        style={{marginTop: 0}}
                    >
                        All set with regular service. Just need some branches or an item or two picked up.
                    </p>

                    <p>
                        Anyone can take advantage of Alliance Disposal's On-Demand Pickup service.
                    </p>

                    <p>
                        Schedule your pickup online, no hassles just great service.
                    </p>
                </PicContent>
            </div>

            <div
                className='greyBorders'
                style={{backgroundColor: '#FFFFFF'}}
            >
                <ContentWrapper
                    title='Temporary Dumpster Rental'
                    link={{label: 'Learn more', to: Paths.rollOffDetails}}
                    link2={{label: 'Get a quote', to: Paths.orderRollOff}}
                    imageStyles={{marginTop: 52}}
                    image={{
                        path: data.RollOff20TubeGreen.childImageSharp.fluid,
                        alt: 'Residential roll off dumpster rental'
                    }}
                >
                    <p
                        style={{marginTop: 0}}
                    >
                        Planning a home improvement project or just need to cleanout your home?
                    </p>

                    <p>
                        Alliance Disposal can provide you with a roll-off dumpster to get rid of the waste that comes with it.
                    </p>

                    <p>
                        Online ordering and a variety of sizes makes scheduling effortless.
                    </p>
                </ContentWrapper>
            </div>

            
        </Layout>
    );
};

export default ResidentialServices;