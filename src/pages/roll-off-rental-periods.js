import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import ContentWrapper from '../components/ContentWrapper';
import Layout from '../structure/Layout';
import PageHeader from '../components/PageHeader';
import PicContent from '../components/PicContent';

import Paths from '../constants/Paths';

const RollOffRentalPeriods = (props) => {

    const data = useStaticQuery(graphql`
        query {
            Calendar: file(relativePath: { eq: "dumpster-rental-period.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            IphoneBackground: file(relativePath: { eq: "iphone-background.png" }) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            WoodClock: file(relativePath: { eq: "roll-off-dumpster-rental-period.png" }) {
                childImageSharp {
                    fluid(maxWidth: 250) {
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
                    fixed(width: 100, height: 100) {
                        ...GatsbyImageSharpFixed_withWebp
                    }
                }
            }
            StackedDumpsters: file(relativePath: { eq: "roll-off-dumpster-rental.png" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return (
        <Layout
            restrictWidth
            title='Roll Off Rental Period'
            description='All Alliance Disposal Dumpster Rentals Come With A 14 Day Rental Period. Need More Time? Extend Your Dumpster Rental.'
            pageContext={props.pageContext}
            canonicalPath={props.location.pathname}
        >

            <PageHeader
                title='Roll Off Dumpster Rental Periods'
                subTitle='Flexible for you life'
                image={{
                    path: data.Calendar.childImageSharp.fluid,
                    alt: 'How long can I keep a dumpster rental'
                }}
                imageWrapper={{maxWidth: 300, margin: '0 auto'}}
                btnText='get pricing'
                searchField
            />

            <div
                style={{backgroundColor: '#FFFFFF'}}
                className='greyBorders'
            >
                <ContentWrapper
                    title='Complimentary rental period'
                    wrapperStyles={{minHeight: 500}}
                >
                    <p
                        style={{marginTop: 0}}
                    >
                        All of our roll-off container rentals come with a 14 day complimentary rental period. You can keep the dumpster for the full fourteen days or call anytime before for a speedy pick up.
                    </p>

                    <p
                        style={{marginBottom: 39}}
                    >
                        We work with you to make sure that your dumpster is delivered when you need it. With easy to schedule online ordering, same day delivery available and next business day delivery guaranteed.
                    </p>
                </ContentWrapper>
            </div>
            
            <div
                className='greyBorders'
            >
                <PicContent
                    image={{
                        path: data.IphoneBackground.childImageSharp.fluid,
                        alt: 'Alliance Disposal provides text updates for when your dumpster rental period ends'
                    }}
                    title='Stay up to date'
                    link={{label: 'Schedule', to: Paths.orderRollOff}}
                    light
                >
                    <p>
                        Receive live text message updates to know when to expect your dumpster delivery.
                    </p>
                    <p>
                        Not going to be home? No problem. Let us know where you would like the dumpster placed and any special instructions. Even send a picture. We’ll take care of everything for you.
                    </p>
                </PicContent>
            </div>

            <div
                style={{backgroundColor: '#FFFFFF'}}
                className='greyBorders'
            >
                <ContentWrapper
                    title='Affordable flexibility'
                    image={{
                        path: data.WoodClock.childImageSharp.fluid,
                        alt: 'Alliance Disposal dumpster rental periods are 14 days long'
                    }}
                    imageStyles={{maxWidth: 250, margin: '52px auto 10px', width: '100%'}}
                    wrapperStyles={{minHeight: 500}}
                    paragraph='It is simple to extend your rental period. With daily flat rate pricing you can extend your dumpster rental in a cost effective manner.'
                />
            </div>

            <div
                className='greyBorders'
            >
                <PicContent
                    title='Carbon neutral'
                    wrapperStyles={{height: 350, fontWeight: 500}}
                    image={{
                        path: data.TreesGrowingPots.childImageSharp.fluid,
                        alt: 'Alliance Disposal plants a tree every time you rent a dumpster'
                    }}
                    link={{label: 'Plant A Tree Program', to: `${Paths.about}#plant-a-tree`}}
                    light
                >
                    <p>
                        We believe that we can make the waste management industry carbon neutral. That is why every time you rent a dumpster we plant a tree!
                    </p>
                    <Img
                        fluid={data.OneTreePlantedService.childImageSharp.fixed}
                        alt='For each dumpster rental period Alliance Disposal plants a tree'
                        style={{height: 100, width: 100, position: 'absolute', bottom: 10, right: 10}}
                    />
                </PicContent>
            </div>

            <div
                style={{marginTop: 62}}
            >
                <ContentWrapper
                    title='Roll Off Rentals'
                    image={{
                        path: data.StackedDumpsters.childImageSharp.fluid,
                        alt: '14 day dumpster rental length'
                    }}
                    wrapperStyles={{minHeight: 550}}
                    paragraph='10 to 40 cubic yard dumpster rentals. Online ordering. Clear and simple pricing. Dedicated customer service. For home and business.'
                    link={{label: 'Learn more', to: Paths.rollOffDetails}}
                    link2={{label: 'Schedule', to: Paths.orderRollOff}}
                />
            </div>

        </Layout>
    );
};

export default RollOffRentalPeriods;