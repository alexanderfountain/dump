import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { navigate } from '@reach/router';
import Img from 'gatsby-image';

import SectionWrapper, { sectionStyles } from '../../components/SectionWrapper';
import ScrollTo from '../../components/dumpster-sizes/ScrollTo';

import ContactOptions from '../../components/buttons/ContactOptions';
import CTABlue from '../../components/CTABlue';
import FindPricing from '../../components/FindPricing';
import Layout from '../../structure/Layout';
import PageHeader from '../../components/PageHeader';
import PicContent from '../../components/PicContent';
import TelDisplay from '../../components/TelDisplay';
import TextButton from '../../components/buttons/TextButton';

import Colors from '../../constants/Colors';
import Paths from '../../constants/Paths';

const ThirtyYardDumpster = (props) => {

    const data = useStaticQuery(graphql`
        query {
            ThirtyYardDimensions: file(relativePath: { eq: "30-yard-dumpster-dimensions.png" }) {
                childImageSharp {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            ThirtyYardDimensionsWhiteBg: file(relativePath: { eq: "30-yard-dumpster-dimensions-whitebg.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 400) {
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
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return (
        <Layout
            title='30 Yard Dumpster Rental'
            description='30 Yard Dumpster Rentals Are Great For Construction Projects. Same Day Delivery Available. Skip The Hassle Order Online.'
            bgColor='#FFFFFF'
            additionalSchema={[{
                "@context": "https://schema.org/", 
                "@type": "Service", 
                "name": "30 Yard Dumpster Rental",
                "image": "https://www.alliancedsp.com/30-yard-dumpster-dimensions.png",
                "description": "30 yard dumpsters are great for construction projects and big clean outs. A rear door makes loading easy.",
                "brand": "Alliance Disposal",
                "additionalType": "http://www.productontology.org/doc/Dumpster",
                "offers": {
                    "@type": "AggregateOffer",
                    "url": "https://www.alliancedsp.com/dumpster-sizes/thirty-yard-dumpster/",
                    "priceCurrency": "USD",
                    "lowPrice": "520",
                    "highPrice": "820"
                }
            }]}
            pageContext={props.pageContext}
            canonicalPath={props.location.pathname}
            restrictWidth
        >

            <div
                style={{backgroundColor: Colors.mainBg}}
            >
                <PageHeader
                    title='30 Yard Dumpster'
                    subTitle="Construction's best friend"
                    image={{
                        path: data.ThirtyYardDimensions.childImageSharp.fluid,
                        alt: "A 30 yard dumpster rental dimensions. Showing the size of a 30 yard roll off container available for rent from Alliance Disposal"
                    }}
                    imageWrapper={{width: '80%', margin: '0 auto', maxWidth: 325}}
                    btnText='get pricing'
                    searchField
                />
            </div>

            <ScrollTo
                navigate={(id) => navigate(id)}
                styles={sectionStyles.section}
            />

            <SectionWrapper
                title='Key aspects of a 30 Yard Dumpster'
            >
                <p
                    style={{maxWidth: 650, margin: '17px auto'}}
                >
                    30 yard dumpsters are great for construction projects and big clean outs. A rear door makes loading easy.
                </p>

                <h3
                    style={{margin: '27px 0 17px', textAlign: 'center'}}
                >
                    A 30 yard dumpster is best for
                </h3>

                <ul
                    style={{paddingLeft: 0, listStyle: 'none', textAlign: 'left', maxWidth: 375, margin: '0 auto'}}
                >
                    <li>
                        - Large renovations
                    </li>
                    <li>
                        - Estate cleaning
                    </li>
                    <li>
                        - Storm debris removal
                    </li>
                    <li>
                        - Construction projects
                    </li>
                </ul>
            </SectionWrapper>

            <SectionWrapper
                title='How much does it cost to rent a 30 yard dumpster?'
                id='dumpster-costs'
            >
                <p>
                    The three main factors that affect 30 yard dumpster pricing are: location, material and weight.
                </p>

                <p>
                    The biggest factor is location. Pricing changes from county to county since each set their own disposal rates, the per ton cost to get rid of your material.
                </p>

                <p>
                    Which brings us to our second factor, the material you are disposing of. Different materials go to different facilities, each charging a different disposal rate depending on what type of material it is.
                </p>

                <p>
                    Lastly the actual weight of the material you put into the dumpster can change the price you pay. It will only change the price if you put in more weight than the weight limit you purchased.
                </p>
                
                <FindPricing
                    btnText='find pricing for your town'
                />
            </SectionWrapper>

            <SectionWrapper
                title='How big is a 30 yard dumpster?'
                id='dumpster-size'
            >
                <div
                    style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}
                >
                    <p
                        style={{flex: '1 1 400px'}}
                    >
                        Typically 30 yard dumpsters are 20 feet long by 8 feet wide by 5 feet tall. While dimensions may vary slightly between container styles, all 30 yard dumpster rentals have the same capacity and volume of 30 cubic yards.
                    </p>

                    <Img
                        fluid={data.ThirtyYardDimensionsWhiteBg.childImageSharp.fluid}
                        alt="30 cubic yard dumpster. Alliance Disposal offers 30 yard dumpster rentals."
                        style={{flex: '1 1 400px', margin: '0 auto', maxWidth: 300}}
                    />
                    
                </div>

                <p>
                    30 yard dumpster hold up to 30 cubic yards of material, the equivalent of about 12 pickup truck beds worth. Most people order a 4 ton weight limit (8,000 lbs), but this may change based on the type of material you're disposing of. At Alliance Disposal we give you flexibility, order online and you can select your own ton limit to fit your project's needs. 
                </p>
                
                <TextButton
                    to={Paths.orderRollOff}
                >
                    Order a 30 yard dumpster online 
                </TextButton>
            </SectionWrapper>

            <SectionWrapper
                title='How long can I rent a 30 yard dumpster for?'
                id='dumpster-rental-period'
            >
                <p>
                    Enjoy a complimentary 14 day rental period, standard on all Alliance Disposal dumpsters. Finished with your dumpster before the 14 days are up? No problem, give us a call anytime before and we’ll pick it up for you. Need a 30 yard dumpster longer than 14 days? We have you covered, extend your rental with flexible and flat rate daily pricing.
                </p>

                <TextButton
                    to={Paths.rollOffRentalPeriods}
                >
                    Learn more about rental periods
                </TextButton>
            </SectionWrapper>

            <div
                className='greyBorders'
            >
                <PicContent
                    title='You make a difference'
                    wrapperStyles={{height: 350, fontWeight: 500}}
                    image={{
                        path: data.TreeGrowing.childImageSharp.fluid,
                        alt: 'For every 30 yard dumpster you rent Alliance Disposal plants a tree'
                    }}
                    link={{label: 'Plant A Tree Program', to: `${Paths.about}#plant-a-tree`}}
                    light
                >
                    <p>
                        You can make a positive impact on the world. For every 30 yard dumpster you rent from Alliance Disposal we have one tree planted!
                    </p>
                    <Img
                        fluid={data.OneTreePlantedService.childImageSharp.fluid}
                        alt='Rent a 30 yard dumpster, Alliance Disposal and OneTreePlanted will plant a tree'
                        style={{height: 100, width: 100, position: 'absolute', bottom: 10, right: 10}}
                    />
                </PicContent>
            </div>

            <SectionWrapper
                title='How does renting a 30 yard dumpster work?'
                id='how-dumpster-rentals-work'
            >
                <p>
                    Unfamiliar with dumpster rental jargon? We’ll help you understand the processes so there aren't any surprises. Check out our full guide on <Link to={Paths.howToRentADumpster}>how to rent a dumpster</Link> for even more details.
                </p>

                <p>
                    First off let's estimate how much weight you'll be putting into the 30 yard dumpster. Weight limits are based off of US tons, where 1 ton is equal to 2,000 pounds. A weight limit is a pre purchased amount of material that you can put into the dumpster at a discounted disposal rate. Our <Link to={Paths.orderRollOff}>online ordering</Link> will take you step by step to help you find the best weight limit for you
                </p>

                <p>
                    Having trouble figuring out how much that pile of debris weighs? Give us a call <TelDisplay /> we are always happy to help. We'll go over your project with you to help you determine the best weight limit for you.
                </p>

                <h3 style={{margin: '37px 0 0'}}>
                    Delivery and loading
                </h3>

                <p>
                    Ok you've ordered your dumpster, now onto delivery. By checking Google Maps before your delivery we make sure we send the appropriate sized truck so that your delivery is a breeze. If we anticipate any issues with your delivery we'll contact you to make sure the dumpster can be placed where you want it, or find a suitable delivery placement.
                </p>

                <p>
                    Below are a few tips to help ensure you have a great experience:
                </p>

                <ul style={{textAlign: 'left', paddingLeft: 20}}>
                    <li>
                        <b>Dumpster placement:</b> The truck needs about 60 feet of space to place the container. Please move any cars out or to the side of your driveway, and remove all obstructions that would be in the path between the truck and your delivery spot.
                    </li>
                    <li>
                        <b>Watch for wires:</b>  The average truck needs about 23 feet of vertical clearance in order to raise the dumpster and place it in location. Don't have the space? Don't worry we compact trucks that do not need as much clearance. If you think that there will be an issue please call us.
                    </li>
                    <li>
                        <b>No need to wait around:</b> Great news, no one needs to be home for the delivery! With changing traffic conditions and unpredictable wait times at disposal sites it is hard to know exactly when your dumpster will arrive. If you'd like to stay up to date you can take advantage of our text message updates.
                    </li>
                    <li>
                        <b>The kitchen sink:</b> The kitchen sink can go into the dumpster, but do not throw in any prohibited materials. Also do not load over the top of the dumpster, as we may not be able to pick it up.
                    </li>
                </ul>

                <h3 style={{margin: '37px 0 0'}}>
                    Pick up and disposal
                </h3>

                <p>
                    Pick up is even easier. Simply let us know when you're done with your dumpster and promptly pick it up. No one needs to be home for the pick up either.
                </p>

                <p>
                    We will dispose of your material at the appropriate facility, in order to maximize recycling efforts. If you are within your weight limit you’re all set! If the dumpster goes over the weight limit the agreed upon overage disposal fee will automatically be charged.
                </p>

                <p>
                    You’ll receive your payment receipt by email.
                </p>
            </SectionWrapper>

            <CTABlue
                title="I'm ready to order!"
            />

            <SectionWrapper
                title='Not sure if a 30 yard dumpster rental is right for you?'
                styles={{backgroundColor: Colors.mainBg, paddingTop: 40, paddingBottom: 79}}
            >
                <p>
                    Need a smaller dumpster? Need a bigger dumpster? If you think that a 30 yard dumpster just won't cut it browse our <Link to={Paths.rollOffSizingGuide}>dumpster rental sizing guide</Link>.
                </p>

                <p>
                    Or give us a ring. Or send a friendly email.{/* Or use our handy Live Chat messaging. */} Getting in contact with an Alliance Disposal team member is easy. You always speak to a real person. We're always friendly and happy to help you find the best dumpster for you. We’ll go over your project with you and recommend the best dumpster rental size, weight limit, and options.
                </p>

                <ContactOptions />
            </SectionWrapper>
            
        </Layout>
    );
};

export default ThirtyYardDumpster;