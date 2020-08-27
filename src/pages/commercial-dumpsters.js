import React from 'react';
import { Link, navigate, useStaticQuery, graphql } from 'gatsby';

import LockOpen from '@material-ui/icons/LockOpenOutlined';
import Assignment from '@material-ui/icons/AssignmentOutlined';
import BottomCtaImage from '@material-ui/icons/YoutubeSearchedFor';

import ContentBlurb from '../components/ContentBlurb';
import ContentWrapper from '../components/ContentWrapper';
import Layout from '../structure/Layout';
import PageHeader from '../components/PageHeader';
import PrimaryButton from '../components/buttons/PrimaryButton';

import Paths from '../constants/Paths';
import { areaServed } from '../constants/Schema';

const CommercialDumpsters = (props) => {

    const data = useStaticQuery(graphql`
        query {
            FrontEndContainerRed: file(relativePath: { eq: "waste-services-commercial-dumpsters.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            RearEndAndApartmentCompactor: file(relativePath: { eq: "commercial-dumpsters.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            SelfCompactor: file(relativePath: { eq: "self-compacting-container.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return (
        <Layout
            restrictWidth
            title='Commercial Dumpster Services'
            description='Recurring Trash and Recycling Commercial Dumpster Service For Businesses. Retail, Restaurant, Malls, Property Complexes, Waste Services For Every Type Of Business'
            pageContext={props.pageContext}
            canonicalPath={props.location.pathname}
            additionalSchema={[{
                '@context': 'https://schema.org',
                '@type': 'Service',
                name: 'Commercial Dumpster',
                areaServed: areaServed,
                availableChannel: {
                    availableLanguage: ['en-US', 'es-419'],
                    serviceUrl: Paths.mainUrl + Paths.orderRollOff.slice(1),
                    servicePhone: Paths.tel,
                    serviceSmsNumber: Paths.tel
                },
                brand: 'Alliance Disposal',
                logo: Paths.logoPath,
                serviceType: 'Commercial Dumpster',
                termsOfService: Paths.mainUrl + Paths.tos.slice(1),
                slogan: 'For Every Type Of Business',
                serviceOutput: 'Waste and recycling pick up for retailers, malls, restaurants, and every type of business',
                hoursAvailable: [
                    'Mon-Sun 07:00 - 19:00'
                ]
            }]}
        >

            <PageHeader
                title='Commercial Dumpsters'
                subTitle={'For every type of business'}
                image={{
                    path: data.FrontEndContainerRed.childImageSharp.fluid,
                    alt: 'Commercial Dumpster Rentals for Businesses'
                }}
                imageWrapper={{width: '60%', maxWidth: 270, margin: '0 auto'}}
                btnText='get a free quote now'
                onClick={() => navigate(Paths.quoteCommercial)}
                btnClassName='quote-commercial'
            />

            <div style={{backgroundColor: '#FFFFFF'}}>
                <ContentWrapper
                    title='Clear &amp; simple pricing'
                >
                    <p
                        style={{marginTop: 0}}
                    >
                        Alliance Disposal believes in providing straight forward pricing. There are never any hidden fees or surcharges. Our contracts are only for one-year.
                    </p>

                    <p>
                        Bundle recycling and waste removal to save. When you use Alliance Disposal for waste and recycling you're rewarded for helping clean up the waste stream and protecting the environment.
                    </p>
                    
                    <p style={{marginBottom: 0}}>
                       No matter your type of business or how much waste you generate we'll help reduce your bill.
                    </p>
                </ContentWrapper>
            </div>

            <div
                style={{marginTop: 62, marginBottom: 75}}
                className='toFlex'
            >
                    
                <ContentBlurb
                    icon={LockOpen}
                    title='Stuck in a contract?'
                    paragraph='We can help get you out of any contract.'
                    link={{label: 'Learn more', to: Paths.contact}}
                    wrapperStyle={{marginBottom: 60}}
                />

                <ContentBlurb
                    icon={Assignment}
                    title='Free waste audit'
                    paragraph="Set up an appointment and we will review the most cost effective way for you to discard your waste."
                    link={{label: 'Schedule', to: Paths.scheduleWasteAudit}}
                />

            </div>

            <div 
                style={{backgroundColor: '#FFFFFF', borderTop: 0}}
                className='greyBorders'
            >
                <ContentWrapper
                    title='The right size for you'
                    image={{
                        path: data.RearEndAndApartmentCompactor.childImageSharp.fluid,
                        alt: '2 - 8 yard commercial dumpsters'
                    }}
                >
                    <p
                        style={{marginTop: 0}}
                    >
                       Choose from a wide selection of 2 to 8 cubic yard dumpsters. Customize your dumpster with wheels, locks or even choose for it to be made of lightweight durable plastic.
                    </p>

                    <p>
                        Are you tight on space and heavy with waste? We have small compactors that can meet your needs.
                    </p>

                    <p
                        style={{marginBottom: 52}}
                    >
                        Need something bigger? We also have large <Link to={Paths.compactors}>roll-off compactors</Link>.
                    </p>

                </ContentWrapper>
            </div>

            <div 
                style={{backgroundColor: '#FFFFFF'}}
                className='greyBorders'
            >
                <ContentWrapper
                    title='Roll Off Compactors'
                    image={{
                        path: data.SelfCompactor.childImageSharp.fluid,
                        alt: 'Recurring commercial dumpster rentals. 2 - 8 yards and compactors'
                    }}
                    link={{label: 'Learn more', to: Paths.compactors}}
                    imageStyles={{marginTop: 62}}
                >
                    <p
                        style={{marginTop: 0}}
                    >
                       Self contained compactors can reduce haul frequency by 75%.
                    </p>

                    <p>
                        Fully sealed. Ideal for high-liquid content waste from supermarkets, apartment complexes, malls, hotels and hospitals.
                    </p>

                    <p>
                        Designed for businesses with space constraints and high volumes of waste.
                    </p>

                </ContentWrapper>
            </div>

            <div
                className='bottomCta'
            >
                <ContentBlurb
                    icon={BottomCtaImage}
                    title='Save time and money'
                    paragraph='Alliance Disposal has partnered with a variety of reliable haulers, giving us access to the best pricing.'
                    extendWidth
                />

                <p>
                    This saves you time and anywhere from 5% to 50% on your waste and recycling bill.
                </p>

                <div
                    style={{textAlign: 'center'}}
                >
                    <PrimaryButton
                        onClick={() => navigate(Paths.quoteCommercial)}
                        fullWidth
                        style={{maxWidth: 335, marginTop: 39}}
                        className='quote-commercial'
                    >
                        get started
                    </PrimaryButton>
                </div>

            </div>
            
        </Layout>
    );
};

export default CommercialDumpsters;