import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Clock from '@material-ui/icons/AccessTimeOutlined';
import DeviceHub from '@material-ui/icons/DeviceHub';
import Phone from '@material-ui/icons/PhoneIphone';

import ContentBlurb from '../components/ContentBlurb';
import ContentWrapper from '../components/ContentWrapper';
import FindPricing from '../components/FindPricing';
import Layout from '../structure/Layout';
import PageHeader from '../components/PageHeader';
import PicContent from '../components/PicContent';

import Paths from '../constants/Paths';

const DumpstersForConstructionAndDemolition = (props) => {

    const data = useStaticQuery(graphql`
        query {
            HouseDemo: file(relativePath: { eq: "rent-a-construction-dumpster.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            HouseFrame: file(relativePath: { eq: "construction-dumpster-house-frame.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            TreeGrowing: file(relativePath: { eq: "rent-a-dumpster-grow-tree.jpg" }) {
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
            RollOff30Blue: file(relativePath: { eq: "roll-off-dumpster-rental-30-yard.png" }) {
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
            title='C &amp; D Dumpsters'
            description='Demolition Dumpsters For Any Project Size. Roll-Off Containers Keep Your Project Site Clean Of Demolition and Construction Debris.'
            pageContext={props.pageContext}
            canonicalPath={props.location.pathname}
        >
            
            <div style={{backgroundColor: '#FFFFFF'}}>
                <PageHeader
                    title='Construction &amp; Demolition Dumpster Rentals'
                    subTitle='For any job site'
                    image={{
                        path: data.HouseDemo.childImageSharp.fluid,
                        alt: 'A house being demolished by an excavator. Construction and demolition debris can go inside dumpster rentals from by Alliance Disposal.'
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
                    image={{
                        path: data.HouseFrame.childImageSharp.fluid,
                        alt: 'Dumpsters for new construction from Alliance Disposal'
                    }}
                >
                    <p
                        style={{marginTop: 0}}
                    >
                        Home remodels, new construction and commercial renovations all produce waste. Alliance Disposal construction and demolition dumpsters make easy to dispose of that waste and keep your job site clean.
                    </p>

                    <p>
                        Whether you are a homeowner doing a DIY project, a contractor working hard for a client or a builder innovating the skyline we always give you dedicated customer service.
                    </p>

                    <p style={{marginBottom: 39}}>
                        Never see a surprise on your bill. We don’t believe in hidden fees or surcharges.
                    </p>
                </ContentWrapper>
            </div>

            <div
                style={{backgroundColor: '#FFFFFF'}}
                className='greyBorders'
            >
                <ContentWrapper
                    title='Service you can count on'
                >
                    <p
                        style={{marginTop: 0}}
                    >
                        Unbeatable service, same day delivery and pick up available. Unlike other companies we work with multiple haulers. Allowing us to be able to quickly deliver on short notice every time.
                    </p>
                    <p>
                        Alliance Disposal is a technology first company. We don’t just use state of the art technology, we create it. We developed all of our technology in house with the sole purpose of providing better service to you.
                    </p>
                    <p>
                        With extended customer service hours you can reach us for help 7 days a week. Our knowledgeable team members can answer any questions you may have.
                    </p>
                </ContentWrapper>
            </div>

            <div
                className='greyBorders'
            >
                <PicContent
                    title="You're planting trees"
                    wrapperStyles={{height: 350, fontWeight: 500}}
                    image={{
                        path: data.TreeGrowing.childImageSharp.fluid,
                        alt: 'Every time you rent a construction and demolition dumpster Alliance Disposal plants a tree'
                    }}
                    link={{label: 'Plant A Tree Program', to: `${Paths.about}#plant-a-tree`}}
                    light
                >
                    <p>
                        You not only build homes, you're building a forest. For every construction and demolition dumpster rented we plant a tree!
                    </p>
                    <Img
                        fluid={data.OneTreePlantedService.childImageSharp.fluid}
                        alt="Alliance Disposal plants a tree for every C&amp;D dumpster rented"
                        style={{height: 100, width: 100, position: 'absolute', bottom: 10, right: 10}}
                    />
                </PicContent>
            </div>

            <div
                style={{marginTop: 62, marginBottom: 75}}
            >

                <ContentBlurb
                    icon={DeviceHub}
                    title='Variety of sizes'
                    paragraph='No two jobs are the same. That is why we offer four main sizes to meet your needs.'
                    wrapperStyle={{marginBottom: 60}}
                    link={{to: Paths.dumpsterSizes, label: 'Explore sizes'}}
                >
                    <p>
                        <b>10 yard dumpsters</b> are for small demolition projects or one room renovations, like a bathroom remodel.
                    </p>

                    <p>
                        <b>20 yard dumpsters</b> are best for kitchen renovations and similar medium sized projects.
                    </p>

                    <p>
                        <b>30 yard dumpsters</b> are used for multi room renovations and ongoing construction project.
                    </p>

                    <p>
                        <b>40 yard dumpsters</b> can handle remodeling an entire house or building a commercial building.
                    </p>
                </ContentBlurb>

            </div>

            <div
                style={{backgroundColor: '#FFFFFF'}}
                className='greyBorders'
            >
                <ContentWrapper
                    title='Versatile waste flow'
                >
                    <p
                        style={{marginTop: 0}}
                    >
                        Construction and demolition dumpsters can handle a wide range of materials. From drywall to flooring and lumber to roofing almost everything you find during a construction or demolition project can go in. Even concrete and asphalt can go in, but if you have a lot you may want to look into a dedicated <Link to={Paths.concreteDumpsters}>concrete dumpster</Link>.
                    </p>

                    <p>
                        Only hazardous materials and certain restricted items cannot go into the dumpster. Materials like asbestos, flammable liquids and propane tanks are all prohibited for safety and environmental concerns. For a full list of restricted debris check out our <Link to={Paths.guideWhatCanGoIntoDumpster}>guide what can and cannot go into a dumpster</Link>.
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
                        fluid={data.RollOff30Blue.childImageSharp.fluid}
                        alt='Blue 30 yard dumpster rental perfect for construction debris'
                    />
                </div>

                <FindPricing
                    btnText='find pricing'
                />
            </div>

        </Layout>
    );
};

export default DumpstersForConstructionAndDemolition;