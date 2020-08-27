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

const DumpstersForRoofing = (props) => {

    const data = useStaticQuery(graphql`
        query {
            RoofColored: file(relativePath: { eq: "roofing-dumpster-rental.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            HandsPlantingTree: file(relativePath: { eq: "hands-planting-tree.jpg" }) {
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
            RoofSpanish: file(relativePath: { eq: "rent-a-dumpster-for-roofing.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            RollOff20Red: file(relativePath: { eq: "20-yard-dumpster-red.png" }) {
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
            title='Roofing Dumpster Rental'
            description='Alliance Disposal Has A Roofing Dumpster For Every Project Size. Same Day Delivery Is Available. Competitive Pricing. Order Online.'
            pageContext={props.pageContext}
            canonicalPath={props.location.pathname}
        >
            
            <div style={{backgroundColor: '#FFFFFF'}}>
                <PageHeader
                    title='Roofing Dumpster Rentals'
                    subTitle='For any size roof'
                    image={{
                        path: data.RoofColored.childImageSharp.fluid,
                        alt: 'Dumpster rentals for roofing'
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
                    title='How roofing dumpsters help'
                >
                    <p
                        style={{marginTop: 0}}
                    >
                        Cleaning up roofing debris can be tedious. Especially if you have to keep moving the material around on the ground. Roll-off containers for roofing make it easier by allowing you to throw the material directly into the dumpster.
                    </p>

                    <p>
                        We will place the dumpster close to the home or building so that debris can be tossed right in. As soon as you’re ready we'll haul it away for you.
                    </p>

                    <p
                        style={{marginBottom: 39}}
                    >
                        With flat rate flexible pricing you’ll never see any surcharges or additional fees on your bill. Same day delivery is available and next business day delivery guaranteed. You can always count on Alliance Disposal to be at the job site for you.
                    </p>
                </ContentWrapper>
            </div>

            <div
                className='greyBorders'
            >
                <PicContent
                    title='Carbon neutral'
                    wrapperStyles={{height: 350, fontWeight: 500}}
                    image={{
                        path: data.HandsPlantingTree.childImageSharp.fluid,
                        alt: 'A tree is planted for every roofing dumpster rented'
                    }}
                    link={{label: 'Plant A Tree Program', to: `${Paths.about}#plant-a-tree`}}
                    light
                >
                    <p>
                        We believe that we can make the waste management industry carbon neutral. That is why for every roofing dumpster rented we plant a tree!
                    </p>
                    <Img
                        fluid={data.OneTreePlantedService.childImageSharp.fluid}
                        alt='Rent a roofing dumpster and Alliance Disposal plants a tree'
                        style={{height: 100, width: 100, position: 'absolute', bottom: 10, right: 10}}
                    />
                </PicContent>
            </div>

            <div
                style={{backgroundColor: '#FFFFFF'}}
                className='greyBorders'
            >

                <ContentWrapper
                    title='Flexible weight limits'
                    wrapperStyles={{minHeight: 500}}
                    image={{
                        path: data.RoofSpanish.childImageSharp.fluid,
                        alt: 'Spanish roofing that can go into a dumpster rental'
                    }}
                >
                    <p
                        style={{marginTop: 0}}
                    >
                        Depending on the size of your roofing job you may have a lot of heavy material, or only a couple tons. When ordering a roofing dumpster we give you the flexibility of setting a weight limit that makes sense for your job.
                    </p>
                    <p>
                        Roofing dumpsters come in two sizes: 10 yard and 20 yard dumpster. A 10 cubic yard container is most common. Their smaller size allows us to place them in the best location for you to easily load.
                    </p>
                    <p>
                        20 yard dumpster are great for larger roofs or ongoing projects with other debris. For bigger projects you can also rent <Link to={Paths.constructionDumpsterRentals}>more than one dumpster</Link> at a time to keep the job running smoothly.
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
                    title='Material allowed in a roofing dumpster'
                    wrapperStyles={{minHeight: 500}}
                >
                    <p
                        style={{marginTop: 0}}
                    >
                        All types of common roofing are allowed into the roll off container, as well as other common materials used in roofing.
                    </p>

                    <p>
                        <b>Asphalt shingles, slate or tile</b> and <b>wooden shingles</b> are all accepted in a roofing roll-off dumpster.
                    </p>

                    <p>
                        Common materials you would find on a roofing job such as felt paper, wood, roofing gravel, flashing and trim are also permitted.
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
                        fluid={data.RollOff20Red.childImageSharp.fluid}
                        alt='Red 20 yard dumpster for roofing debris'
                    />
                </div>

                <FindPricing
                    btnText='find pricing'
                />
            </div>

        </Layout>
    );
};

export default DumpstersForRoofing;