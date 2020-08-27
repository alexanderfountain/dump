import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import classes from './construction-dumpster-rentals.module.css';

import Clock from '@material-ui/icons/AccessTimeOutlined';
import DeviceHub from '@material-ui/icons/DeviceHub';
import Door from '@material-ui/icons/MeetingRoomOutlined';
import Friendly from '@material-ui/icons/AccountCircleOutlined';
import Phone from '@material-ui/icons/PhoneIphone';
import ThumbUp from '@material-ui/icons/ThumbUpAltOutlined';
import Timer from '@material-ui/icons/TimerOutlined';

import ContentBlurb from '../components/ContentBlurb';
import ContentWrapper from '../components/ContentWrapper';
import FindPricing from '../components/FindPricing';
import Layout from '../structure/Layout';
import OrderCard from '../components/ContentOrderCard';
import PageHeader from '../components/PageHeader';

import Paths from '../constants/Paths';
import { areaServed } from '../constants/Schema';

const ConstructionDumpsterRentals = (props) => {

    const data = useStaticQuery(graphql`
        query {
            HeavyDutyDumpster: file(relativePath: { eq: "construction-dumpster-rental.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            HouseDemo: file(relativePath: { eq: "rent-a-construction-dumpster.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            ConcreteBlocks: file(relativePath: { eq: "rent-a-concrete-dumpster.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            RoofColored: file(relativePath: { eq: "roofing-dumpster-rental.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            TreeBushes: file(relativePath: { eq: "yard-waste-dumpster-rental.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            RollOff30Yellow: file(relativePath: { eq: "30-yard-dumpster-yellow.png" }) {
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
            title='Construction Dumpster Rental Services'
            description='Construction Roll Off Dumpster Rentals For Any Job Site. Same Day Delivery And Pick up Available. All Non-Hazardous Debris Disposal For Construction Sites.'
            pageContext={props.pageContext}
            canonicalPath={props.location.pathname}
            additionalSchema={[{
                '@context': 'https://schema.org',
                '@type': 'Service',
                name: 'Construction Dumpster Rental',
                areaServed: areaServed,
                availableChannel: {
                    availableLanguage: ['en-US', 'es-419'],
                    serviceUrl: Paths.mainUrl + Paths.orderRollOff.slice(1),
                    servicePhone: Paths.tel,
                    serviceSmsNumber: Paths.tel
                },
                brand: 'Alliance Disposal',
                logo: Paths.logoPath,
                serviceType: 'Construction Dumpster Rental',
                termsOfService: Paths.mainUrl + Paths.tos.slice(1),
                slogan: 'Same Day Delivery Available, Next Business Day Delivery Guaranteed.',
                serviceOutput: 'Construction debris removal',
                hoursAvailable: [
                    'Mon-Sun 07:00 - 19:00'
                ]
            }]}
        >
            <PageHeader
                title='Construction Dumpster Rentals'
                subTitle='Same day delivery available'
                image={{
                    path: data.HeavyDutyDumpster.childImageSharp.fluid,
                    alt:'Construction dumpster rentals'
                }}
                imageWrapper={{maxWidth: 400, margin: '0 auto'}}
                btnText='get pricing'
                searchField
            />

            <div style={{backgroundColor: '#FFFFFF'}}>
                <ContentWrapper
                    title='Dependable service'
                >
                    <p
                        style={{marginTop: 0}}
                    >
                        We know how important consistent and reliable service is. We make sure your job is never held up because of a missing or full dumpster. Same day delivery and pick up is available for construction dumpster rentals. Fast next business day delivery is guaranteed. Helping keep your waste flow moving and your job site efficient and clean.
                    </p>

                    <p>
                        Your job and hours can be unpredictable. That is why Alliance Disposal has extended customer service hours and rental periods. We are always there for you when it counts.
                    </p>

                    <p>
                        By partnering with multiple haulers, as well as running our own trucks, we make sure that no matter where your next job site is you can rely on Alliance Disposal to deliver on-time and with the same great service.
                    </p>
                </ContentWrapper>
            </div>

            <div
                style={{paddingTop: 62, paddingBottom: 39}}
                className='whiteBorders'
            >
                    
                <ContentBlurb
                    icon={ThumbUp}
                    title='Simple pricing and volume discounts'
                    paragraph="We don't believe in hidden fees or surcharges. The price we quote you is the price you'll pay, including tax. No hassles, games or tricks."
                    link={{label: 'Contact us', to: Paths.contact}}
                >
                    <p>
                        If you order construction dumpsters frequently we can offer special volume discounts. Give us a call to find out what we can save you.
                    </p>
                </ContentBlurb>

            </div>

            <div
                style={{paddingTop: 62, paddingBottom: 39, borderBottom: 0}}
                className='whiteBorders'
            >
                    
                <ContentBlurb
                    title='The right dumpster for the job'
                    paragraph="Getting the right dumpster for your construction waste flow can save you a lot of money."
                    link={{label: 'Contact us', to: Paths.contact}}
                >
                    <p>
                        Depending on the material, amount of debris and local regulations you may be better off separating the material into two dumpsters or mixing them together.
                    </p>

                    <p>
                        If you need help deciding contact us and we'll get you the best roll-off containers for your needs.
                    </p>

                    <p>
                        Below are the different types of construction dumpsters available.
                    </p>
                </ContentBlurb>

            </div>

            <div
                className='toFlex'
            >

                <OrderCard
                    title='Construction and demolition debris'
                    path={Paths.orderRollOff}
                    className='order-roll-off'
                    link={{label: 'Learn more about dumpsters for construction projects', to: Paths.cAndDDumpsters}}
                    image={{
                        path: data.HouseDemo.childImageSharp.fluid,
                        alt: 'Rent a construction dumpster for demolition'
                    }}
                    flex
                >
                    <p style={{marginTop: 0}}>
                        Whether you are knocking walls down or putting them up our construction dumpster rentals are perfect for the job. You can mix material from drywall, carpeting and flooring to windows, lumber and bricks.
                    </p>

                    <p>
                        Clear and simple pricing with complimentary ton limits included for each size.
                    </p>
                </OrderCard>

                <OrderCard
                    title='Concrete and heavy debris'
                    path={Paths.orderRollOff}
                    className='order-roll-off'
                    link={{label: 'Learn more about dumpsters for concrete disposal', to: Paths.concreteDumpsters}}
                    image={{
                        path: data.ConcreteBlocks.childImageSharp.fluid,
                        alt: 'Construction dumpster rental for concrete'
                    }}
                    flex
                    right
                >
                    <p
                        style={{marginTop: 0}}
                    >
                        If you have large amounts of concrete, asphalt, brick, pavers, dirt or stone it is more cost effective to get a dedicated dumpster for it. Heavy debris can put a dumpster way over its weight limit.   
                    </p>

                    <p>
                        So long as the material is free of contaminants you can get a dumpster specifically for heavy debris at a much better rate.
                    </p>

                    <p>
                        Pricing for heavy debris comes with a flat rate or with 10 ton+ weight limits, giving you a lot more flexibility.
                    </p>
                </OrderCard>

            </div>

            <div
                style={{marginTop: 62}}
                className='toFlex'
            >

                <ContentBlurb
                    icon={Friendly}
                    title='Personalized friendly support'
                    paragraph='Alliance Disposal team members are happy to answer any questions you have.'
                    wrapperStyle={{marginBottom: 62}}
                />

                <ContentBlurb
                    icon={Timer}
                    title='Fast and reliable service'
                    paragraph='Same day delivery and pick up available.'
                    wrapperStyle={{marginBottom: 62}}
                    wrapperClass={classes.middleBlurb}
                />

                <ContentBlurb
                    icon={DeviceHub}
                    title='Variety of sizes'
                    paragraph="Dumpsters come in 10, 15, 20, 30 and 40 cubic yards to match your job's need"
                    wrapperStyle={{marginBottom: 62}}
                />

            </div>

            <div
                className='toFlex'
            >

                <OrderCard
                    title='Roofing'
                    path={Paths.orderRollOff}
                    className='order-roll-off'
                    link={{label: 'Learn more about dumpsters for roofing and shingles', to: Paths.roofingDumpsters}}
                    image={{
                        path: data.RoofColored.childImageSharp.fluid,
                        alt: 'Rent a dumpster for construction roofing debris'
                    }}
                    flex
                >
                    <p style={{marginTop: 0}}>
                        Shingles and other roofing material are heavier than they appear. Roofing dumpsters make disposing of them more cost effective than other dumpsters.
                    </p>

                    <p>
                        We'll help you get the right size for your job. We make sure it is placed close to home or building to make loading easy.
                    </p>
                </OrderCard>

                <OrderCard
                    title='Yard waste and landscaping debris'
                    path={Paths.orderRollOff}
                    className='order-roll-off'
                    link={{label: 'Learn more about dumpsters for yard waste', to: Paths.yardDumpsters}}
                    image={{
                        path: data.TreeBushes.childImageSharp.fluid,
                        alt: 'Construction dumpster rentals for landscaping waste'
                    }}
                    flex
                    right
                >
                    <p
                        style={{marginTop: 0}}
                    >
                        Brush, branches, logs, shrubs, leaves and other yard debris can often be disposed of for a better flat rate at specialty disposal sites. Or are often much lighter than other types of debris.
                    </p>

                    <p>
                        We make sure you get the best rate possible for your area by bringing yard waste to the most affordable disposal site.
                    </p>

                    <p>
                        Landscaping debris are easy to load into roll-off containers. Allowing projects to move faster and not get cluttered.
                    </p>
                </OrderCard>

            </div>

            <div
                style={{marginTop: 62}}
                className='toFlex'
            >

                <ContentBlurb
                    icon={Clock}
                    title='Flexible rental periods'
                    paragraph='Complimentary rental periods. Extend with simple and affordable flat rate daily pricing.'
                    wrapperStyle={{marginBottom: 62}}
                />

                <ContentBlurb
                    icon={Door}
                    title='Easy loading'
                    paragraph='Open the dumpster door for easy loading.'
                    wrapperStyle={{marginBottom: 62}}
                    wrapperClass={classes.middleBlurb}
                />

                <ContentBlurb
                    icon={Phone}
                    title='Stay up to date'
                    paragraph='Receive live text message updates to know when to expect your dumpster.'
                    wrapperStyle={{marginBottom: 62}}
                />

            </div>

            <div
                className='bottomCta'
            >

                <div
                    style={{marginTop: 37}}
                >
                    <Img
                        fluid={data.RollOff30Yellow.childImageSharp.fluid}
                        alt='Construction dumpster rental'
                    />
                </div>

                <FindPricing
                    btnText='find pricing'
                />
            </div>

        </Layout>
    );
};

export default ConstructionDumpsterRentals;