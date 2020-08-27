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

const FortyYardDumpster = (props) => {

    const data = useStaticQuery(graphql`
        query {
            FortyYardDimensions: file(relativePath: { eq: "40-yard-dumpster-dimensions.png" }) {
                childImageSharp {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            FortyYardDimensionsWhiteBg: file(relativePath: { eq: "40-yard-dumpster-dimensions-whitebg.jpg" }) {
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
            title='40 Yard Dumpster Rental'
            description='Large Project? A 40 Yard Dumpster Rental Is Great For Ongoing Construction Projects. Same Day Delivery Available. Transparent Pricing. No Hidden Fees.'
            bgColor='#FFFFFF'
            additionalSchema={[{
                "@context": "https://schema.org/", 
                "@type": "Service", 
                "name": "40 Yard Dumpster Rental",
                "image": "https://www.alliancedsp.com/40-yard-dumpster-dimensions.png",
                "description": "40 yard dumpsters are the largest available. A rear door makes loading easy. Reaching over the top is hard.",
                "brand": "Alliance Disposal",
                "additionalType": "http://www.productontology.org/doc/Dumpster",
                "offers": {
                    "@type": "AggregateOffer",
                    "url": "https://www.alliancedsp.com/dumpster-sizes/forty-yard-dumpster/",
                    "priceCurrency": "USD",
                    "lowPrice": "580",
                    "highPrice": "945"
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
                    title='40 Yard Dumpster'
                    subTitle="The big boy"
                    image={{
                        path: data.FortyYardDimensions.childImageSharp.fluid,
                        alt: "A 40 yard dumpster dimensions showing the size of Alliance Disposal's 40 yard dumpster rentals."
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
                title='Key aspects of a 40 Yard Dumpster'
            >
                <p
                    style={{maxWidth: 650, margin: '17px auto'}}
                >
                    40 yard dumpsters are the largest available. A rear door makes loading easy. Reaching over the top is hard.
                </p>

                <h3
                    style={{margin: '27px 0 17px', textAlign: 'center'}}
                >
                    A 40 yard dumpster is best suited for
                </h3>

                <ul
                    style={{paddingLeft: 0, listStyle: 'none', textAlign: 'left', maxWidth: 375, margin: '0 auto'}}
                >
                    <li>
                        - Large demolition projects
                    </li>
                    <li>
                        - Full estate cleaning
                    </li>
                    <li>
                        - Tree and debris removal
                    </li>
                    <li>
                        - Ongoing construction projects
                    </li>
                </ul>
            </SectionWrapper>

            <SectionWrapper
                title='How much does it cost to rent a 40 yard dumpster?'
                id='dumpster-costs'
            >
                <p>
                    Three factors that affect 40 yard dumpster pricing: location, material and weight.
                </p>

                <p>
                    Location. Each county can set their own disposal rates, the per ton cost to get rid of your material. Meaning pricing changes from county to county.
                </p>

                <p>
                    Material. Different materials get sent to different facilities. Each charging a disposal rate changing based on the specific type of material you are disposing of.
                </p>

                <p>
                    Weight. The actual weight of the material you put into the dumpster affects the weight limit you'll need and ultimately the price of your dumpster rental.
                </p>
                
                <FindPricing
                    btnText='find pricing for your town'
                />
            </SectionWrapper>

            <SectionWrapper
                title='How big is a 40 yard dumpster?'
                id='dumpster-size'
            >
                <div
                    style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}
                >
                    <p
                        style={{flex: '1 1 400px'}}
                    >
                        Most 40 yard dumpsters are 20 feet long by 8 feet wide by 7 feet tall. Dimensions can vary slightly between container styles, but all 40 yard dumpster rentals have the same capacity and volume of 40 cubic yards.
                    </p>

                    <Img
                        fluid={data.FortyYardDimensionsWhiteBg.childImageSharp.fluid}
                        alt="40 cubic yard dumpster. Alliance Disposal offers 40 yard dumpster rentals."
                        style={{flex: '1 1 400px', margin: '0 auto', maxWidth: 300}}
                    />
            
                </div>

                <p>
                    These big 40 yard dumpster hold up to 40 cubic yards of material. The equivalent of about 16 pickup truck beds. Typically people order a 5 ton weight limit (10,000 lbs). Based on the type of material you're disposing of you may want to select a different weight limit. With Alliance Disposal you can always enjoy flexibility, order online and select a weight limit to fit your project's needs. 
                </p>
                
                <TextButton
                    to={Paths.orderRollOff}
                >
                    Order a 40 yard dumpster online 
                </TextButton>
            </SectionWrapper>

            <SectionWrapper
                title='How long can I rent a 40 yard dumpster for?'
                id='dumpster-rental-period'
            >
                <p>
                    Every Alliance Disposal dumpster comes with a complimentary 14 day rental period. Don't need it for that long? Simply give us a call anytime before and we’ll pick it up for you. Need it for longer? We have you covered, extend your 40 yard dumpster rental with flat rate and flexible daily pricing.
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
                    title='Carbon neutral'
                    wrapperStyles={{height: 350, fontWeight: 500}}
                    image={{
                        path: data.TreeGrowing.childImageSharp.fluid,
                        alt: 'For every 40 yard dumpster you rent Alliance Disposal plants a tree'
                    }}
                    link={{label: 'Plant A Tree Program', to: `${Paths.about}#plant-a-tree`}}
                    light
                >
                    <p>
                        We believe that we can make the waste management industry carbon neutral. That is why for every 40 yard dumpster rented we plant a tree!
                    </p>

                    <Img
                        fluid={data.OneTreePlantedService.childImageSharp.fluid}
                        alt='Rent a 40 yard dumpster, Alliance Disposal and OneTreePlanted will plant a tree'
                        style={{height: 100, width: 100, position: 'absolute', bottom: 10, right: 10}}
                    />
    
                </PicContent>
            </div>

            <SectionWrapper
                title='How does renting a 40 yard dumpster work?'
                id='how-dumpster-rentals-work'
            >
                <p>
                    We’ll help you understand the processes and all this confusing dumpster rental jargon. If you want a more detailed explanation check out <Link to={Paths.howToRentADumpster}>how to rent a dumpster</Link>.
                </p>

                <p>
                    Let's estimate how much weight you'll be putting into the 40 yard dumpster. Weight limits are based off of US tons, where 1 ton is equal to 2,000 pounds. Having trouble figuring out how much your debris weighs? Give us a call <TelDisplay />. We'll happily help by going over your project with you to determine the best weight limit for your project.
                </p>

                <p>
                    A weight limit is a pre purchased amount of material that you can put into the dumpster at a discounted disposal rate. Use our <Link to={Paths.orderRollOff}>online ordering</Link> to go step by step to find the best weight limit for you
                </p>

                <h3 style={{margin: '37px 0 0'}}>
                    Delivery and loading
                </h3>

                <p>
                    Now that you've ordered your dumpster, it's time for it to be delivered. We check Google Maps before your delivery we make sure that there won't be any unforeseen issues with placement. If we anticipate an issue we'll contact you to make sure the dumpster can be placed where you want it, or find a suitable alternative delivery placement.
                </p>

                <p>
                    Below are a few tips to help ensure you have a great experience:
                </p>

                <ul style={{textAlign: 'left', paddingLeft: 20}}>
                    <li>
                        <b>Horizontal space:</b> Delivery trucks need about 60 feet of space in front of the placement location. Please remove any items that may be in the path between the truck and the drop spot. Move any cars out or to the side of your driveway.
                    </li>
                    <li>
                        <b>Vertical space:</b>  The truck also needs about 23 feet of vertical clearance so that it can lift the dumpster and place it properly. Don't have the space? Give us a call <TelDisplay /> and we'll figure out how to place the dumpster.
                    </li>
                    <li>
                        <b>No need to be home:</b> No one needs to be home for the delivery! Changing traffic conditions and erratic lines at disposal sites make it hard to predict exactly when your dumpster will be delivered. You can stay up to date with text message updates if you'd like.
                    </li>
                    <li>
                        <b>Be careful what you throw in:</b> Prohibited and hazardous materials cannot go into the dumpster. Also do not fill the container above it's sides, because we may not be able to pick it up.
                    </li>
                </ul>

                <h3 style={{margin: '37px 0 0'}}>
                    Pick up and disposal
                </h3>

                <p>
                    Pick up is easy. Just let us know when you're done filling your dumpster and we'll pick it up in a jiffy. No one needs to be home for the pick up either.
                </p>

                <p>
                    We bring your material the appropriate facility for disposal. If you are within your weight limit you’re all set! If the dumpster is over the weight limit the prorated overage fee will automatically be applied.
                </p>

                <p>
                    You’ll receive your payment receipt by email.
                </p>
            </SectionWrapper>

            <CTABlue
                title='Order a 40 yard dumpster today'
            />

            <SectionWrapper
                title='Not sure if a 40 yard dumpster rental is right for you?'
                styles={{backgroundColor: Colors.mainBg, paddingTop: 40, paddingBottom: 79}}
            >
                <p>
                    Is a 40 yard dumpster too big? Need a smaller sized dumpster? Browse our <Link to={Paths.rollOffSizingGuide}>dumpster rental sizing guide</Link> to find the best sized dumpster for your project.
                </p>

                <p>
                    Want more personal help? Getting in contact with an Alliance Disposal is easy. We're always friendly and happy to help you find the best dumpster for your needs. Together we’ll go over your project and will recommend the best dumpster rental size, weight limit, and options for you. Choose from any of the contact options below:
                </p>

                <ContactOptions />
            </SectionWrapper>
            
        </Layout>
    );
};

export default FortyYardDumpster;