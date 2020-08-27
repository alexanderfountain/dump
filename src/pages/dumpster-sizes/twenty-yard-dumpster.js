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

const TwentyYardDumpster = (props) => {

    const data = useStaticQuery(graphql`
        query {
            TwentyYardDimensions: file(relativePath: { eq: "20-yard-dumpster-dimensions.png" }) {
                childImageSharp {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            TwentyYardDimensionsWhiteBg: file(relativePath: { eq: "20-yard-dumpster-dimensions-whitebg.jpg" }) {
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
            title='20 Yard Dumpster Rental'
            description='20 Yard Roll Off Dumpster Rentals Are Great For Homeowners. Complimentary 14 Day Rental Periods. Same Day Delivery Available.'
            bgColor='#FFFFFF'
            additionalSchema={[{
                "@context": "https://schema.org/", 
                "@type": "Service", 
                "name": "20 Yard Dumpster Rental",
                "image": "https://www.alliancedsp.com/20-yard-dumpster-dimensions.png",
                "description": "20 yard dumpsters are great for most home projects. Easily load over the top or through the rear door. Perfect for medium sized renovations and clean outs.",
                "brand": "Alliance Disposal",
                "additionalType": "http://www.productontology.org/doc/Dumpster",
                "offers": {
                    "@type": "AggregateOffer",
                    "url": "https://www.alliancedsp.com/dumpster-sizes/twenty-yard-dumpster/",
                    "priceCurrency": "USD",
                    "lowPrice": "430",
                    "highPrice": "680"
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
                    title='20 Yard Dumpster'
                    subTitle='The Go To For Homeowners'
                    image={{
                        path: data.TwentyYardDimensions.childImageSharp.fluid,
                        alt: "A 20 yard dumpster's dimensions that is offered by Alliance Disposal's rent a dumpster division."
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
                title='Key aspects of a 20 Yard Dumpster'
            >
                <p
                    style={{maxWidth: 650, margin: '17px auto'}}
                >
                    20 yard dumpsters are great for most home projects. Easily load over the top or through the rear door. Perfect for medium sized renovations and clean outs.
                </p>

                <h3
                    style={{margin: '27px 0 17px', textAlign: 'center'}}
                >
                    The 20 yard dumpster is best suited for
                </h3>

                <ul
                    style={{paddingLeft: 0, listStyle: 'none', textAlign: 'left', maxWidth: 400, margin: '0 auto'}}
                >
                    <li>
                        - Medium kitchen or full bath renovations
                    </li>
                    <li>
                        - Multi room cleanouts
                    </li>
                    <li>
                        - Yard cleanup projects
                    </li>
                    <li>
                        - Concrete &amp; heavy debris removal
                    </li>
                </ul>
            </SectionWrapper>

            <SectionWrapper
                title='How much does it cost to rent a 20 yard dumpster?'
                id='dumpster-costs'
            >
                <p>
                    Location, material and weight affect 20 yard dumpster pricing.
                </p>

                <p>
                    Each county can set their own disposal rate, so pricing changes from county to county. Location is the biggest factor as it is the main driver of the price.
                </p>

                <p>
                    Different materials have different disposal rates. Pricing will change based on the type of material you have. It is often more cost effective to separate concrete from construction debris if you have a large amount.
                </p>

                <p>
                    Finally the weight of the material you put into the dumpster can change the price. Pricing is primarily structured around disposal rate multiplied by ton limit.
                </p>
                
                <FindPricing
                    btnText='find pricing for your town'
                />
            </SectionWrapper>

            <SectionWrapper
                title='How big is a 20 yard dumpster?'
                id='dumpster-size'
            >
                <div
                    style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}
                >
                    <p
                        style={{flex: '1 1 400px'}}
                    >
                        20 yard dumpsters are usually 20 feet long by 8 feet wide by 3.5 feet tall. Every 20 yard dumpster rental will have the same capacity and volume of 20 cubic yards, but exact dimensions may vary slightly.
                    </p>

                    <Img
                        fluid={data.TwentyYardDimensionsWhiteBg.childImageSharp.fluid}
                        alt="20 cubic yard dumpster. Alliance Disposal offers 20 yard dumpster rentals."
                        style={{flex: '1 1 400px', margin: '0 auto', maxWidth: 300}}
                    />
                    
                </div>

                <p>
                    A 20 yard dumpster can hold 20 cubic yards of material. Which is equivalent to about 8 pickup truck beds. The average person orders a 3 ton weight limit (6,000 lbs) with a 20 yard roll-off dumpster. Depending on the type of material you have this may change. Use our online ordering to select a ton limit that matches your project. With Alliance Disposal you get unmatched flexibility. 
                </p>
                
                <TextButton
                    to={Paths.orderRollOff}
                >
                    Experience our online ordering
                </TextButton>
            </SectionWrapper>

            <SectionWrapper
                title='How long can I rent a 20 yard dumpster for?'
                id='dumpster-rental-period'
            >
                <p>
                    All of our dumpsters come with a complimentary 14 day rental period. If you need your 20 yard dumpster for a longer amount of time you can extend your rental with flat rate daily pricing. If you finish with your dumpster before the 14 days are up you can call anytime for a pick up.
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
                    title='A tree for every dumpster'
                    wrapperStyles={{height: 350, fontWeight: 500}}
                    image={{
                        path: data.HandsPlantingTree.childImageSharp.fluid,
                        alt: 'For every 20 yard dumpster you rent Alliance Disposal plants a tree'
                    }}
                    link={{label: 'Plant A Tree Program', to: `${Paths.about}#plant-a-tree`}}
                    light
                >
                    <p>
                        For every 20 yard dumpster rental Alliance Disposal has a tree planted in a forest undergoing reforestation!
                    </p>
                    <Img
                        fluid={data.OneTreePlantedService.childImageSharp.fluid}
                        alt='Rent a 20 yard dumpster, Alliance Disposal and OneTreePlanted will plant a tree'
                        style={{height: 100, width: 100, position: 'absolute', bottom: 10, right: 10}}
                    />
                </PicContent>
            </div>

            <SectionWrapper
                title='How does renting a 20 yard dumpster work?'
                id='how-dumpster-rentals-work'
            >
                <p>
                    All this dumpster rental jargon may be new to you. We’ll help you understand the processes so there are no surprises. Checkout our full guide on <Link to={Paths.howToRentADumpster}>how to rent a dumpster</Link> for even more information.
                </p>

                <p>
                    For starters let's estimate how much weight you'll be putting into the dumpster. If you need help you can always give us a call <TelDisplay /> and we'll happily help find the right weight limit for your project. Weight limits are based off of US tons, where 1 ton is equal to 2,000 pounds. A weight limit is a pre purchased amount of material that you can put into the dumpster at a discounted disposal rate.
                </p>

                <p>
                    If you're ready, our <Link to={Paths.orderRollOff}>online ordering</Link> process will take you step by step to get the best weight limit for you.
                </p>

                <h3 style={{margin: '37px 0 0'}}>
                    Delivery and loading
                </h3>

                <p>
                    Once you place your order the next step is delivery. Before every delivery we check Google Maps to make sure that we send the right size truck. This way your deliveries always go smoothly. Not on Google Maps? Don’t worry we’ll contact you ensure you don’t experience any hiccups or delivery delays.
                </p>

                <p>
                    Here are a few tips to help out with your dumpster:
                </p>

                <ul style={{textAlign: 'left', paddingLeft: 20}}>
                    <li>
                        <b>Placement:</b> Roll off trucks need about 60 feet of space in front of your desired drop location. Please move cars out or to the side of the driveway and remove all items from the path of the truck.
                    </li>
                    <li>
                        <b>Vertical clearance:</b>  A standard roll off truck need about 23 feet of vertical clearance in order to raise the dumpster to place it. If you think there will be an issue please call us. We have more compact trucks which don't need as much clearance that we can send.
                    </li>
                    <li>
                        <b>Go about your day:</b> Due to wait times at disposal sites and changing traffic conditions it is difficult to determine when your dumpster will arrive. <b>No one needs to be home for the delivery though</b>. You can sign up for text message updates to know when to expect your dumpster.
                    </li>
                    <li>
                        <b>Load mindfully:</b> Placing prohibited items in the dumpster can result in contamination fees. Also be mindful of the rim, loading above the rim can pose a hazard when the dumpster is being transported. Loading above the rim is not allowed.
                    </li>
                </ul>

                <h3 style={{margin: '37px 0 0'}}>
                    Pick up and disposal
                </h3>

                <p>
                    Pick up is simple. Contact us when you are done loading your dumpster and we'll promptly remove it for you. No one needs to be home for the pick up.
                </p>

                <p>
                    We then bring your dumpster to the appropriate disposal facility where they weigh the material you put into the dumpster. If you dumpster is within your weight limit you’re all set! If the material does exceed the weight limit the appropriate and agreed upon overage disposal fee will be automatically charged.
                </p>

                <p>
                    You’ll receive your payment receipt by email.
                </p>
            </SectionWrapper>

            <CTABlue
                title='A 20 yard dumpster is right for me'
            />

            <SectionWrapper
                title='Not sure if a 20 yard dumpster rental is right for you?'
                styles={{backgroundColor: Colors.mainBg, paddingTop: 40, paddingBottom: 79}}
            >
                <p>
                    If you think you may need a size smaller or larger than a 20 yard dumpster you can check out our <Link to={Paths.rollOffSizingGuide}>dumpster rental sizing guide</Link>.
                </p>

                <p> 
                    {/* Or Live Chat with us.*/} Or call us. Or shoot us an email. We're easy to get in contact with and are always happy to help you find the best solution for your budget and needs. A friendly Alliance team member will go over your project with you and recommend the best dumpster rental size, weight limit, and options.
                </p>

                <ContactOptions />
            </SectionWrapper>
            
        </Layout>
    );
};

export default TwentyYardDumpster;