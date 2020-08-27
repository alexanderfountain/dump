import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Clock from '@material-ui/icons/AccessTimeOutlined';
import DeviceHub from '@material-ui/icons/DeviceHub';

import ContentBlurb from '../components/ContentBlurb';
import ContentWrapper from '../components/ContentWrapper';
import FindPricing from '../components/FindPricing';
import Layout from '../structure/Layout';
import PageHeader from '../components/PageHeader';
import PicContent from '../components/PicContent';

import Paths from '../constants/Paths';

const DumpstersForYardWaste = (props) => {

    const data = useStaticQuery(graphql`
        query {
            TreeBushes: file(relativePath: { eq: "yard-waste-dumpster-rental.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            Tree: file(relativePath: { eq: "rent-a-dumpster-for-yard-waste.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
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
            RollOff20TubeGreen: file(relativePath: { eq: "rent-a-20-yard-dumpster.png" }) {
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
            title='Yard Waste Dumpster'
            description="Yard Waste Dumpster's For Tree Removal, Garden Beds Or Any Cleanup Project. Flat Rate Pricing By Dumpster Yard."
            pageContext={props.pageContext}
            canonicalPath={props.location.pathname}
        >
            
            <div style={{backgroundColor: '#FFFFFF'}}>
                <PageHeader
                    title='Yard Waste Dumpster Rentals'
                    subTitle='Landscaping and yard clean up projects'
                    image={{
                        path: data.TreeBushes.childImageSharp.fluid,
                        alt: 'A landscape of trees and bushes showing the materials that can go into an Alliance Disposal yard waste dumpster.'
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
                    title='Why use a dumpster for yard waste'
                    image={{
                        path: data.Tree.childImageSharp.fluid,
                        alt: "A tree that represents Alliance Disposal's dumpsters for yard waste, trees and storm debris."
                    }}
                >
                    <p
                        style={{marginTop: 0}}
                    >
                        Landscaping projects take time and trips to the landfill only slow you down. A dumpster for yard cleanups make your projects run smoother, keep your work area cleaner and save you time.
                    </p>

                    <p>
                        We divert as much organic waste from landfills as possible, by sending the material to recycling facilities that turn it into mulch and other products. Best of all we save you money by doing so.
                    </p>

                    <p style={{marginBottom: 39}}>
                        Flat rate pricing ensures that you always know what you’re going to pay without any surprises. We don’t believe in hidden fees or surcharges.
                    </p>
                </ContentWrapper>
            </div>

            <div
                className='greyBorders'
            >
                <PicContent
                    title='You planted a tree'
                    wrapperStyles={{height: 350, fontWeight: 500}}
                    image={{
                        path: data.TreesGrowingPots.childImageSharp.fluid,
                        alt: "A group of tree saplings growing in pots ready to be planted. Alliance Disposal plants a tree for every yard waste dumpster rented."
                    }}
                    link={{label: 'Plant A Tree Program', to: `${Paths.about}#plant-a-tree`}}
                    light
                >
                    <p>
                        While you may be cleaning up a downed tree, you are also planting one. For every yard waste dumpster rented Alliance Disposal has one tree planted!
                    </p>
                    <Img
                        fluid={data.OneTreePlantedService.childImageSharp.fluid}
                        alt="A badge showing that Alliance Disposal donates to One Tree Planted for every yard waste dumpster rented so that a tree can be planted."
                        style={{height: 100, width: 100, position: 'absolute', bottom: 10, right: 10}}
                    />
                </PicContent>
            </div>

            <div
                style={{backgroundColor: '#FFFFFF'}}
                className='greyBorders'
            >
                <ContentWrapper
                    title='Weight limits that make sense'
                    wrapperStyles={{minHeight: 500}}
                >
                    <p
                        style={{marginTop: 0}}
                    >
                        Leaves and branches are light, so why get charged for more than you need.
                    </p>
                    <p>
                        Depending on your location we’ll either fit you with a ton limit that makes sense for your needs. Or you’ll enjoy a flat rate with no ton limit, fill the container up to the rim and pay one price.
                    </p>
                </ContentWrapper>
            </div>

            <div
                style={{marginTop: 62, marginBottom: 75}}
            >

                <ContentBlurb
                    icon={DeviceHub}
                    title='Variety of sizes'
                    paragraph='Dumpster come in four main sizes to help meet the needs of your specific project.'
                    wrapperStyle={{marginBottom: 60}}
                    link={{to: Paths.dumpsterSizes, label: 'Explore sizes'}}
                >
                    <p>
                        <b>10 yard dumpsters</b> are great regular yard maintenance and small cleanup projects.
                    </p>

                    <p>
                        <b>20 yard dumpsters</b> can handle the clean up of multiple small trees and shrubs.
                    </p>

                    <p>
                        <b>30 yard dumpsters</b> are needed for larger lawns or complete landscape redesigns.
                    </p>

                    <p>
                        <b>40 yard dumpsters</b> are best for storm debris cleanups and commercial landscaping projects.
                    </p>
                </ContentBlurb>

            </div>

            <div
                style={{backgroundColor: '#FFFFFF'}}
                className='greyBorders'
            >
                <ContentWrapper
                    title='Loading a yard waste dumpster'
                >
                    <p
                        style={{marginTop: 0}}
                    >
                        All dumpsters come with a door in the rear, making loading the dumpster easy. Either throw material in over the sides or walk it in through the door.
                    </p>

                    <p>
                        For yard waste dumpsters you can only throw in acceptable materials, otherwise there could be a contamination fee.
                    </p>

                    <p>
                        Acceptable materials include <b>leaves, grass clippings, shrubs</b> and <b>branches</b>. They can be be chipped, bagged, loose or whole.
                    </p>

                    <p>
                        Logs under four inches in diameter are accepted. Stumps are allowed in some locations. If you have stumps or larger logs <Link to={Paths.contact}>contact us</Link> and we’ll help find the best disposal solution for you.
                    </p>
                </ContentWrapper>
            </div>

            <div
                style={{marginTop: 62, marginBottom: 75}}
                className='toFlex'
            >
                    
                <ContentBlurb
                    icon={Clock}
                    title='Fast and reliable service'
                    paragraph='Same day delivery and pick up available.'
                />
            </div>

            <div
                className='bottomCta'
            >

                <div
                    style={{marginTop: 37}}
                >
                    <Img
                        fluid={data.RollOff20TubeGreen.childImageSharp.fluid}
                        alt='A green tube style 20 yard dumpster. You can rent a yard waste dumpster from Alliance Disposal.'
                    />
                </div>

                <FindPricing
                    btnText='find pricing'
                />
            </div>

        </Layout>
    );
};

export default DumpstersForYardWaste;