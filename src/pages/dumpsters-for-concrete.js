import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Clock from '@material-ui/icons/AccessTimeOutlined';
import Friendly from '@material-ui/icons/AccountCircleOutlined';
import Phone from '@material-ui/icons/PhoneIphone';
import Timer from '@material-ui/icons/TimerOutlined';

import ContentBlurb from '../components/ContentBlurb';
import ContentWrapper from '../components/ContentWrapper';
import FindPricing from '../components/FindPricing';
import Layout from '../structure/Layout';
import PageHeader from '../components/PageHeader';
import PicContent from '../components/PicContent';

import Paths from '../constants/Paths';
import { areaServed } from '../constants/Schema';

const DumpstersForConcrete = (props) => {

    const data = useStaticQuery(graphql`
        query {
            ConcreteBlocks: file(relativePath: { eq: "rent-a-concrete-dumpster.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            TreesGrowingPots: file(relativePath: { eq: "trees-growing-pots.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            OneTreePlantedService: file(relativePath: { eq: "ServiceOneTreeStampDesignBlue.png" }) {
                childImageSharp {
                    fluid(maxWidth: 700) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            RollOff20TubeBlue: file(relativePath: { eq: "20-yard-dumpster-rental.png" }) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            ConcreteRebar: file(relativePath: { eq: "concrete-dumpster-rental.jpg" }) {
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
            title='Concrete Dumpster Rentals'
            description='Concrete Disposal Is Easy With Special Concrete Roll Off Dumpsters. For Clean Concrete And Concrete With Rebar. Same Day Service Is Available.'
            pageContext={props.pageContext}
            canonicalPath={props.location.pathname}
            additionalSchema={[{
                '@context': 'https://schema.org',
                '@type': 'Service',
                name: 'Concrete Dumpster Rental',
                areaServed: areaServed,
                availableChannel: {
                    availableLanguage: ['en-US', 'es-419'],
                    serviceUrl: Paths.mainUrl + Paths.orderRollOff.slice(1),
                    servicePhone: Paths.tel,
                    serviceSmsNumber: Paths.tel
                },
                brand: 'Alliance Disposal',
                logo: Paths.logoPath,
                serviceType: 'Concrete Dumpster Rental',
                termsOfService: Paths.mainUrl + Paths.tos.slice(1),
                slogan: 'Concrete Dumpster Rental Same Day Delivery Available, Next Business Day Delivery Guaranteed.',
                serviceOutput: 'Removal of concrete debris',
                hoursAvailable: [
                    'Mon-Sun 07:00 - 19:00'
                ]
            }]}
        >
            
            <div
                style={{backgroundColor: '#FFFFFF'}}
            >
                <PageHeader
                    title='Concrete Dumpster Rental Services'
                    subTitle='10 ton+ weight limits make it easy'
                    image={{
                        path: data.ConcreteBlocks.childImageSharp.fluid,
                        alt: 'Concrete dumpster rentals for homes and businesses'
                    }}
                    imageWrapper={{width: '70%', margin: '0 auto -30px'}}
                    btnText='get pricing'
                    searchField
                />
            </div>

            <div
                style={{backgroundColor: '#FFFFFF'}}
                className='greyBorders'
            >
                <ContentWrapper
                    title='Why rent a concrete dumpster'
                >
                    <p
                        style={{marginTop: 0}}
                    >
                        It's no secret, concrete is heavy. <Link to={Paths.cAndDDumpsters}>Construction roll-off container rentals</Link> come with appropriate weight limits for general construction waste. But if you have only concrete, or a lot of it, the weight limit can easily be exceeded. Shooting up the cost.
                    </p>

                    <p>
                        That is why we offer special dumpster rental pricing specifically for concrete, asphalt, block and stone. These materials can be recycled at specialty facilities, so long as they are free of contaminants.
                    </p>

                    <p>
                        Concrete dumpsters are ideal for driveway and slab removals, tearing down retaining walls, and home or business remodels.
                    </p>

                    <p style={{marginBottom: 39}}>
                        Flat rate all inclusive pricing eliminates any surprises from your bill. The price you see is the price you pay. Simple and transparent. The way it should be.
                    </p>
                </ContentWrapper>
            </div>

            <div
                className='greyBorders'
            >
                <PicContent
                    title='Making a difference'
                    wrapperStyles={{height: 350, fontWeight: 500}}
                    image={{
                        path: data.TreesGrowingPots.childImageSharp.fluid,
                        alt: 'Rent a concrete dumpster and Alliance Disposal will plant a tree'
                    }}
                    link={{label: 'Plant A Tree Program', to: `${Paths.about}#plant-a-tree`}}
                    light
                >
                    <p>
                        We do more than just recycle your concrete. For every concrete dumpster rented we plant a tree in a forest in need!
                    </p>
                    <Img
                        fluid={data.OneTreePlantedService.childImageSharp.fluid}
                        alt='This concrete dumpster rental service will plant one tree'
                        style={{height: 100, width: 100, position: 'absolute', bottom: 10, right: 10}}
                    />
                </PicContent>
            </div>

            <div
                style={{backgroundColor: '#FFFFFF'}}
                className='greyBorders'
            >
                <ContentWrapper
                    title='Maximum weight'
                    wrapperStyles={{minHeight: 500}}
                >
                    <p
                        style={{marginTop: 0}}
                    >
                        Depending on your state's laws concrete and other heavy debris dumpster can come with either a 10 ton or a 15 ton weight limit. The maximum allowable to travel on the road.
                    </p>
                    <p>
                        You also have the choice of using a 10 yard or 20 yard dumpster for concrete. With the 20 cubic yard dumpster you are only allowed to fill it half way. If it is filled to the top it will be over the legal limit and not allowed on the road.
                    </p>
                </ContentWrapper>
            </div>

            <div
                style={{marginTop: 62, marginBottom: 75}}
                className='toFlex'
            >
                    
                <ContentBlurb
                    icon={Timer}
                    title='Fast and reliable service'
                    paragraph='Same day delivery and pick up available.'
                    link={{label: 'Get Pricing', to: Paths.orderRollOff}}
                    wrapperStyle={{marginBottom: 60}}
                />

                <ContentBlurb
                    icon={Friendly}
                    title='Personalized friendly support'
                    paragraph="Alliance Disposal team members are happy to answer any questions you have."
                    link={{label: 'Contact Alliance Disposal', to: Paths.contact}}
                />
            </div>

            <div
                style={{backgroundColor: '#FFFFFF'}}
                className='greyBorders'
            >
                <ContentWrapper
                    title='Acceptable materials'
                    image={{
                        path: data.ConcreteRebar.childImageSharp.fluid,
                        alt: 'Acceptable materials for a concrete dumpster rental'
                    }}
                    imageStyles={{width: '100%', margin: '0 auto'}}
                >
                    <p
                        style={{marginTop: 0}}
                    >
                        There are a few types of heavy debris that qualify for concrete dumpster pricing at different rates.
                    </p>

                    <p>
                        <b>Clean concrete.</b> Concrete that is free of trash, rebar, roots or other contaminants. Painted concrete is acceptable so long as it is not lead-based paint.
                    </p>

                    <p>
                        <b>Concrete with metal.</b> Concrete with rebar or other metal can be hauled away. The disposal rate will be higher than clean concrete as the metal will be have to be extracted from the concrete.
                    </p>

                    <p>
                        <b>Asphalt and/or brick.</b> Whether from removing pavement or a building demolition it can all go in.
                    </p>

                    <p>
                        <b>Mixed heavy debris.</b> Any combination of the above can be mixed together. The disposal rate will be higher than if they were separated however.
                    </p>
                </ContentWrapper>
            </div>
 
            <div
                style={{backgroundColor: '#FFFFFF'}}
                className='greyBorders'
            >
                <ContentWrapper
                    title='What cannot go into a concrete dumpster'
                >
                    <p
                        style={{marginTop: 0}}
                    >
                        In order to qualify for heavy debris pricing the material may not be contaminated.
                    </p>

                    <p>
                        <b>Concrete slurry.</b> Solid concrete is acceptable, however concrete slurry is not. Concrete slurry is a mixture of sand, cement, water and sometimes lime. Contact us for disposal of cement slurry.
                    </p>

                    <p>
                        <b>Trash and other debris.</b> Other construction waste, household trash or materials not listed as acceptable are not allowed into a concrete or heavy debris dumpster. Doing so can result in contamination fees. Use a household items or construction debris dumpster rental instead.

                    </p>
                </ContentWrapper>
            </div>

            <div
                style={{marginTop: 62, marginBottom: 75}}
                className='toFlex'
            >
                    
                <ContentBlurb
                    icon={Clock}
                    title='Flexible rental periods'
                    paragraph='Complimentary rental periods. Extend with simple and affordable flat rate daily pricing.'
                    link={{label: 'Learn more', to: Paths.rollOffRentalPeriods}}
                    wrapperStyle={{marginBottom: 60}}
                />

                <ContentBlurb
                    icon={Phone}
                    title='Stay up to date'
                    paragraph='Receive live text message updates to know when to expect your dumpster.'
                />
            </div>

            <div
                className='bottomCta'
            >

                <div
                    style={{marginTop: 37}}
                >
                    <Img
                        fluid={data.RollOff20TubeBlue.childImageSharp.fluid}
                        alt='Dumpster rental for concrete'
                    />
                </div>

                <FindPricing
                    btnText='find pricing'
                />
            </div>

        </Layout>
    );
};

export default DumpstersForConcrete;