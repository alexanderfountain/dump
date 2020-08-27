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

const TenYardDumpster = (props) => {

    const data = useStaticQuery(graphql`
        query {
            TenYardDimensions: file(relativePath: { eq: "10-yard-dumpster-dimensions.png" }) {
                childImageSharp {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            TenYardDimensionsWhiteBg: file(relativePath: { eq: "10-yard-dumpster-dimensions-whitebg.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 400) {
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
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return (
        <Layout
            title='10 Yard Dumpster Rental'
            description='A 10 Yard Roll Off Dumpster Rental Is Great For Small Projects. Easy Online Ordering. Same Day Delivery Available.'
            bgColor='#FFFFFF'
            additionalSchema={[{
                "@context": "https://schema.org/", 
                "@type": "Service", 
                "name": "10 Yard Dumpster Rental",
                "image": "https://www.alliancedsp.com/10-yard-dumpster-dimensions.png",
                "description": "The 10 yard dumpster is the smallest size available. It is the most budget friendly. Perfect for small renovations and clean outs.",
                "brand": "Alliance Disposal",
                "additionalType": "http://www.productontology.org/doc/Dumpster",
                "offers": {
                    "@type": "AggregateOffer",
                    "url": "https://www.alliancedsp.com/dumpster-sizes/ten-yard-dumpster/",
                    "priceCurrency": "USD",
                    "lowPrice": "350",
                    "highPrice": "545"
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
                    title='10 Yard Dumpster'
                    subTitle='The smallest size available'
                    image={{
                        path: data.TenYardDimensions.childImageSharp.fluid,
                        alt: "A 10 yard dumpster with the dimensions of it. Showing the size of a 10 yard roll-off container that is offered by Alliance Disposal's dumpster rentals."
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
                title='Key aspects of a 10 Yard Dumpster'
            >
                <p
                    style={{maxWidth: 650, margin: '17px auto'}}
                >
                    The 10 yard dumpster is the smallest size available. It is the most budget friendly. Perfect for small renovations and clean outs.
                </p>

                <h3
                    style={{margin: '27px 0 17px', textAlign: 'center'}}
                >
                    Projects best suited for a 10 yard dumpster
                </h3>

                <ul
                    style={{paddingLeft: 0, listStyle: 'none', textAlign: 'left', maxWidth: 375, margin: '0 auto'}}
                >
                    <li>
                        - Small kitchen or bath renovations
                    </li>
                    <li>
                        - Basement or garage cleanouts
                    </li>
                    <li>
                        - Small yard cleanup projects
                    </li>
                    <li>
                        - Concrete &amp; heavy debris removal
                    </li>
                </ul>
            </SectionWrapper>

            <SectionWrapper
                title='How much does it cost to rent a 10 yard dumpster?'
                id='dumpster-costs'
            >
                <p>
                    10 yard dumpster pricing is affected by three categories: location, material and weight.
                </p>

                <p>
                    Pricing changes from county to county as each sets their own disposal rates. This is the biggest factor as it is the main driver of the price.
                </p>

                <p>
                    The material you need to dispose of also affects the price. Different materials can have different disposal rates as well.
                </p>

                <p>
                    Lastly the weight of the material you put into the dumpster will determine the final price you'll pay.
                </p>
                
                <FindPricing
                    btnText='find pricing for your town'
                />
            </SectionWrapper>

            <SectionWrapper
                title='How big is a 10 yard dumpster?'
                id='dumpster-size'
            >
                <div
                    style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}
                >
                    <p
                        style={{flex: '1 1 400px'}}
                    >
                        A typical 10 yard dumpster is 10 feet long by 8 feet wide by 3.5 feet tall. Dimensions may vary slightly, but all 10 yard dumpster rentals have the same capacity and volume of 10 cubic yards.
                    </p>

                    <Img
                        fluid={data.TenYardDimensionsWhiteBg.childImageSharp.fluid}
                        alt="10 cubic yard dumpster. Alliance Disposal offers 10 yard dumpster rentals."
                        style={{flex: '1 1 400px', margin: '0 auto', maxWidth: 300}}
                    />                    
                    
                </div>

                <p>
                    A 10 yard dumpster can hold 10 cubic yards of material. That is the equivalent of about 4 pickup truck beds. On average most people get a 2 ton weight limit (4,000 lbs). This may change based on the type of material you have. With our online ordering you can select your own ton limit to fit your project's needs. 
                </p>
                
                <TextButton
                    to={Paths.orderRollOff}
                >
                    Experience our online ordering
                </TextButton>
            </SectionWrapper>

            <SectionWrapper
                title='How long can I rent a 10 yard dumpster for?'
                id='dumpster-rental-period'
            >
                <p>
                    All of our dumpsters come with a complimentary 14 day rental period. If you are finished with your dumpster before the 14 days you can call us anytime and we’ll pick it up for you. If you need your 10 yard dumpster for longer you can extend your rental with flexible and flat rate daily pricing.
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
                    title='We plant trees'
                    wrapperStyles={{height: 350, fontWeight: 500}}
                    image={{
                        path: data.HandsPlantingTree.childImageSharp.fluid,
                        alt: 'For every 10 yard dumpster you rent Alliance Disposal plants a tree'
                    }}
                    link={{label: 'Plant A Tree Program', to: `${Paths.about}#plant-a-tree`}}
                    light
                >
                    <p>
                        When you rent a 10 yard dumpster from Alliance Disposal we make a donation to OneTreePlanted and they go out and plant a tree!
                    </p>
                    <Img
                        fluid={data.OneTreePlantedService.childImageSharp.fluid}
                        alt='Rent a 10 yard dumpster, Alliance Disposal and OneTreePlanted will plant a tree'
                        style={{height: 100, width: 100, position: 'absolute', bottom: 10, right: 10}}
                    />
                </PicContent>
            </div>

            <SectionWrapper
                title='How does renting a 10 yard dumpster work?'
                id='how-dumpster-rentals-work'
            >
                <p>
                    There may be a lot of jargon you are unfamiliar with when it comes to dumpster rentals. We’ll help you understand the processes so there are no surprises. You can also checkout our full guide on <Link to={Paths.howToRentADumpster}>how to rent a dumpster</Link>.
                </p>

                <p>
                    The process starts with finding the right weight limit for the material you have. Weight limits are based off of US tons, where 1 ton is equal to 2,000 pounds. A weight limit is a pre purchased amount of material that you can put into the dumpster at a discounted disposal rate.
                </p>

                <p>
                    Our <Link to={Paths.orderRollOff}>online ordering</Link> process will take you step by step to get the best weight limit for you, or give us a call <TelDisplay /> we are always happy to help.
                </p>

                <h3 style={{margin: '37px 0 0'}}>
                    Delivery and loading
                </h3>

                <p>
                    Once you order your dumpster the next step is delivery. We always check Google Maps to make sure that we send the right size truck so that deliveries always go smoothly. If you’re not on Google Maps don’t worry we’ll contact you ensure you don’t experience any delivery delays or hiccups.
                </p>

                <p>
                    Here are a few tips to make sure you have a great experience:
                </p>

                <ul style={{textAlign: 'left', paddingLeft: 20}}>
                    <li>
                        <b>Drop location:</b> We’ll need about 60 feet of space to deliver the container. Please move all obstructions that would prevent the truck to having access to your desired drop location. Such as moving cars out or to the side of your driveway.
                    </li>
                    <li>
                        <b>Look up:</b>  Most trucks need about 23 feet of vertical clearance to raise the dumpster and place it. However we do have more compact trucks that do not need as much clearance. If you think there will be an issue please call us.
                    </li>
                    <li>
                        <b>Enjoy your day:</b> No one needs to be home for the delivery. Due to changing traffic conditions and delivery schedules your dumpster may arrive at anytime throughout the day. You can signup for text message updates to know when to expect your dumpster.
                    </li>
                    <li>
                        <b>Load appropriately:</b> Do not place in any prohibited materials. Also be mindful of the rim, you cannot load above the dumpsters rim as it will pose a hazard to other drivers on the road.
                    </li>
                </ul>

                <h3 style={{margin: '37px 0 0'}}>
                    Pick up and disposal
                </h3>

                <p>
                    Pick up is simple. Just let us know when you're done with your dumpster and will come get it out of the way for you. No one needs to be home for the pick up.
                </p>

                <p>
                    We will then bring your dumpster to the appropriate disposal facility for proper treatment. If you dumpster is within your weight limit you’re all set! If the dumpster did go over the weight limit we will charge the appropriate and agreed upon overage disposal fee.
                </p>

                <p>
                    You’ll receive your payment receipt by email.
                </p>
            </SectionWrapper>

            <CTABlue
                title='Ready to order?'
            />

            <SectionWrapper
                title='Not sure if a 10 yard dumpster rental is right for you?'
                styles={{backgroundColor: Colors.mainBg, paddingTop: 40, paddingBottom: 79}}
            >
                <p>
                    If you think that a 10 yard dumpster isn’t the right size for you check out our <Link to={Paths.rollOffSizingGuide}>dumpster rental sizing guide</Link>.
                </p>

                <p>
                    Or contact us by any of the methods below. We're always happy to help you find the best solution for your budget and needs. We’ll go over your project with you and recommend the best dumpster rental size, weight limit, and options.
                </p>

                <ContactOptions />
            </SectionWrapper>
            
        </Layout>
    );
};

export default TenYardDumpster;