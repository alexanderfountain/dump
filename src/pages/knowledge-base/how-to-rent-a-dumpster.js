import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import ContactOptions from '../../components/buttons/ContactOptions';
import FindPricing from '../../components/FindPricing';
import Layout from '../../structure/Layout';
import OrderOptions from '../../components/buttons/OrderOptions';
import PageHeader from '../../components/PageHeader';
import SectionWrapper, { sectionStyles } from '../../components/SectionWrapper';
import TelDisplay from '../../components/TelDisplay';
import TextButton from '../../components/buttons/TextButton';

import Colors from '../../constants/Colors';
import { dumpsterSizes } from '../../constants/Data';
import Paths from '../../constants/Paths'; 

const HowToRentADumpster = (props) => {

    const data = useStaticQuery(graphql`
        query {
            RollOff20Red: file(relativePath: { eq: "20-yard-dumpster-red.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            AllianceTruckDelivery: file(relativePath: { eq: "alliance-disposal-dumpster-rental-delivery.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1140) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return (
        <Layout
            title='How To Rent A Dumpster'
            description='A Guide Outlining How Dumpster Rentals Work. Learn About Pricing, Weight Limits, Delivery, Pick Up. Be Prepared For Your Dumpster Rental.'
            bgColor='#FFFFFF'
            pageContext={props.pageContext}
            canonicalPath={props.location.pathname}
            additionalSchema={[{
                "@context": "https://schema.org",
                "@type": "HowTo",
                "name": "How To Rent A Dumpster",
                "description": "You may only need to rent a dumpster once in a lifetime. This guide will walk you through how to order a dumpster and prepare you for delivery and pick up.",
                "image": {
                    "@type": "ImageObject",
                    "url": "https://www.alliancedsp.com/alliance-truck-delivery.jpg",
                    "height": "131",
                    "width": "305"
                },
                "step": [
                    {
                        "@type": "HowToStep",
                        "url": "https://www.alliancedsp.com/knowledge-base/how-to-rent-a-dumpster#step1",
                        "name": "Select a size",
                        "itemListElement": [{
                            "@type": "HowToDirection",
                            "text": "The first thing you'll want to do is figure out how much material you need to dispose of. That will help you determine which size dumpster you’ll need to be able to fit all your material in."
                        }, {
                            "@type": "HowToDirection",
                            "text": "There are four primary sizes for dumpsters: 10, 20, 30 and 40 cubic yards. Cubic yards refers to how much volume you can put into a dumpster."
                        }, {
                            "@type": "HowToTip",
                            "text": "Different sizes come with different weight limits. A weight limit is how much weight you can put into a dumpster at the listed price. If you go over a weight limit you simply pay for the excess weight you put in."
                        }]
                    },
                    {
                        "@type": "HowToStep",
                        "url": "https://www.alliancedsp.com/knowledge-base/how-to-rent-a-dumpster#step2",
                        "name": "Order the dumpster",
                        "itemListElement": [{
                            "@type": "HowToDirection",
                            "text": "Once you know what size you'll need it's time to order the dumpster. To order simply call the company or order online if available. Make sure you discuss where the dumpster will be placed with the company to ensure it can be delivered how you want it."
                        }, {
                            "@type": "HowToTip",
                            "text": "If you order through Alliance Disposal you can order online and Alliance Disposal plants a tree for every dumpster ordered."
                        }]
                    },
                    {
                        "@type": "HowToStep",
                        "url": "https://www.alliancedsp.com/knowledge-base/how-to-rent-a-dumpster#step3",
                        "name": "Dumpster delivery",
                        "itemListElement": [{
                            "@type": "HowToDirection",
                            "text": "After you ordered your dumpster it is time to prepare for delivery. The roll off truck that will deliver the container needs about 60 feet of space in front of your desired drop location so make sure it is clear of all vehicles and obstructions."
                        }, {
                            "@type": "HowToTip",
                            "text": "Check with your town to see if you need a dumpster permit, especially if it is going in the street or public property."
                        }]
                    },
                    {
                        "@type": "HowToStep",
                        "url": "https://www.alliancedsp.com/knowledge-base/how-to-rent-a-dumpster#step4",
                        "name": "Loading the dumpster",
                        "itemListElement": [{
                            "@type": "HowToDirection",
                            "text": "When loading the dumpster make sure that you do not put in any prohibited items. For example do not place in any hazardous materials or asbestos. If you ordered a specialty dumpster, such as one for concrete, be sure not not to place in any trash or contaminants."
                        }, {
                            "@type": "HowToDirection",
                            "text": "Do not load the dumpster above the top rim. If you do the driver may not be able to pick up the container, which could result in an extra fee or trip charge."
                        }]
                    },
                    {
                        "@type": "HowToStep",
                        "url": "https://www.alliancedsp.com/knowledge-base/how-to-rent-a-dumpster#step5",
                        "name": "Pick up and disposal",
                        "itemListElement": [{
                            "@type": "HowToDirection",
                            "text": "After you've loaded your dumpster and are ready for pick up, simply call the company and let them know. Be sure nothing is blocking the container so the truck can access it. They'll pick it up and properly dispose of the material."
                        }]
                    }
                ]
            }]}
            restrictWidth
        >
            <div
                style={{backgroundColor: Colors.mainBg}}
            >
                <PageHeader
                    title='How To Rent A Dumpster'
                    subTitle='A helpful guide that will walk you through the dumpster rental process from ordering to pick up'
                    image={{
                        path: data.RollOff20Red.childImageSharp.fluid,
                        alt: 'How to rent a dumpster'
                    }}
                    imageWrapper={{width: '80%', margin: '0 auto', maxWidth: 325}}
                    btnText='get pricing'
                    searchField
                />
            </div>

            <SectionWrapper
                title='Where do I begin?'
                id='step1'
            >
                <p>
                    The first thing you'll want to do is figure out how much material you need to dispose of. That will help you determine which size dumpster you’ll need to be able to fit all your material in.
                </p>

                <p>
                    Below is a helpful table that outlines every available size, their dimensions and their capacity equivalent in pickup truck loads. The Yard in size is in reference to Cubic Yards, which is the volume they can hold. For example a 10 Yard Dumpster can hold a volume of 10 Cubic Yards.
                </p>

                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div
                        style={{width: '100vw', maxWidth: 700, overflow: 'scroll', margin: '37px -20px'}}
                    >
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{...styles.header, borderTopLeftRadius: 4}}>
                                        Size
                                    </TableCell>
                                    <TableCell style={{...styles.header}}>
                                        Dimensions
                                    </TableCell>
                                    <TableCell style={{whiteSpace: 'nowrap', ...styles.header, borderTopRightRadius: 4}}>
                                        Weight limit
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {dumpsterSizes.map(row => (
                                    <TableRow key={row.size}>
                                        <TableCell>
                                            {row.size} Yard Dumpster
                                        </TableCell>
                                        <TableCell>
                                            {row.length} ft long x {row.width} ft wide x {row.height} ft high
                                        </TableCell>
                                        <TableCell>
                                            {row.pickup} pickup truck loads
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>

                <p>
                    Looking for more information on dumpster rental sizes? Check out our <Link to={Paths.rollOffSizingGuide}>dumpster sizing guide</Link> for more help and to see sizes broken down by project types. Or <Link to={Paths.contact}>contact us</Link> Alliance Disposal team members are always happy to help answer any questions you may have.
                </p>
            </SectionWrapper>

            <SectionWrapper
                title='What is a weight limit?'
            >
                <p>
                    Once you determine which size is best for you it’s time to estimate how much weight you will put into the dumpster.
                </p>

                <p>
                    When you purchase a dumpster rental it comes with a pre purchased weight limit. Which is how much weight you can put into a dumpster at a discounted disposal rate.
                </p>

                <p>
                    If you go over the weight limit don’t worry, you simply pay for the extra weight put into the dumpster at the standard and prorated disposal rate. The standard disposal rate is typically labeled as an “overage fee”, you'll always know the rate before you order. If you do go over weight we also provide you with a copy of the dump ticket for full transparency.
                </p>

                <p>
                    With our no hassle <Link to={Paths.orderRollOff}>online ordering</Link> you will be taken step by step through the process. If you need help, want to find out about using a different weight limit than what is available online, or just prefer ordering over the phone give us a call <TelDisplay />!
                </p>
            </SectionWrapper>

            <SectionWrapper
                title='How long can I rent a dumpster for?'
            >
                <p>
                    All Alliance Disposal dumpsters come with a complimentary 14 day rental period. If you don’t need your dumpster for all 14 days you can call us anytime before and we’ll pick the dumpster up for you.
                </p>

                <p>
                    If you need your dumpster for longer than 14 days you can extend your rental with flexible flat rate daily pricing. Give us a call if you need it for a prolonged amount of time so we can set you up with the most budget friendly option.
                </p>

                <TextButton
                    to={Paths.rollOffRentalPeriods}
                >
                    Learn more about rental periods
                </TextButton>
            </SectionWrapper>

            <SectionWrapper
                title='Ordering a dumpster'
                id='step2'
            >
                <p>
                    When you are ready to order your dumpster you can order by whichever method you feel most comfortable with:
                </p>

                <div
                    style={{margin: '37px auto'}}
                >
                    <OrderOptions />
                </div>

                <p>
                    Same day delivery is available. Next business day deliveries are guaranteed if the order is placed before 12pm.
                </p>

                <p>
                    If you would like to request a specific time window for your dumpster delivery you can do so. It is best to give more advanced notice to ensure that the time slot you want is available. <b>No one needs to be home for the delivery though.</b>
                </p>
            </SectionWrapper>

            <SectionWrapper
                title='We plant a tree'
                styles={{backgroundColor: '#138A36', color: '#FFFFFF', textAlign: 'center', fontWeight: 500}}
            >
                <p>
                    When you rent a dumpster from Alliance Disposal we make a donation to One Tree Planted, who then plants a tree in a damaged forest in order to revive the forest.
                </p>
            </SectionWrapper>

            <SectionWrapper
                title='Your dumpster delivery'
                id='step3'
            >
                <p>
                    In order to deliver your dumpster the truck needs about 60 feet of space in front of your desired drop location. On your delivery day please make sure that all obstructions are cleared from the truck's path. For instance please make sure all cars are either out or to the side of your driveway.
                </p>

                <p>
                    Due to traffic, changing road conditions and wait times at disposal sites it is difficult to estimate exactly when your dumpster will arrive. You can opt in for text message updates to know when to expect your dumpster. <b>No one needs to be home for the delivery</b>. When you order we take down delivery instructions to ensure proper placement.
                </p>

                <p>
                    The truck also needs about 23 feet of vertical clearance in order to raise up the container to place it.
                </p>

                <p>
                    We always check Google Maps to ensure we send the proper style of truck and that the delivery will go smoothly. If we have any questions or concerns we will contact you in order to make sure that the dumpster can be delivered where you desire, or find a suitable location for placement.
                </p>

                <Img
                    fluid={data.AllianceTruckDelivery.childImageSharp.fluid}
                    alt='How a roll off truck delivers a dumpster rental'
                    style={{margin: '39px -20px -39px'}}
                />
            </SectionWrapper>

            <SectionWrapper
                title='Loading the dumpster'
                id='step4'
            >
                <p>
                    When loading the dumpster make sure you do not place any prohibited items into it. If you do contamination fees can be charged by the disposal site. You can use our guide for <Link to={Paths.guideWhatCanGoIntoDumpster}>what can and can't go into a dumpster</Link> for help.
                </p>

                <p>
                    If you purchased a yard waste, concrete, other heavy debris or recycling dumpster do not place any trash into it. These materials will be recycled and recycling facilities will charge for trash contamination.
                </p>

                <p>
                    Lastly it is important that you do not fill above the top of the dumpster. Doing so poses a risk to drivers on the road. All of our dumpsters get tarped on pick up, so if the driver cannot place the tarp over the dumpster then we will not be able to pick up the dumpster. Which can result in a trip charge and you'll have to level off the dumpster before we try to pick it up again.
                </p>
            </SectionWrapper>

            <SectionWrapper
                title='Picking up the dumpster'
                id='step5'
            >
                <p>
                    When you are finished with your dumpster and ready for it to be removed all you have to do is call. We'll schedule a pick up for you as soon as possible, typically for the next business day.
                </p>

                <p>
                    <b>No one needs to be home for the pick up</b>. Again please make sure that there are no obstructions in front of the dumpster so that the truck can get to it.
                </p>
            </SectionWrapper>

            <SectionWrapper
                title='Disposal and wrapping up'
            >
                <p>
                    After the driver picks up your dumpster it will be brought to the appropriate disposal facility, in an effort to recycle as much as possible.
                </p>

                <p>
                    At the disposal facility the material you put into the dumpster will get weighed. If you were within the weight limit than you're done! If you go over the weight limit the appropriate and agreed upon overage fee will be applied at a prorated rate. If you go over we will also provide you with a copy of your dump ticket from the disposal facility for full transparency.
                </p>

                <p>
                    You will receive your payment receipt, and if applicable a copy of your dump ticket, via email.
                </p>
            </SectionWrapper>

            <div
                style={{...sectionStyles.section, backgroundColor: Colors.allianceBlue}}
            >
                <h2
                    style={{color: '#FFFFFF', textAlign: 'center', margin: 0}}
                >
                    Ready to order?
                </h2>

                <FindPricing
                    btnText='find pricing'
                    btnStyle={{backgroundColor: Colors.altSecondaryBtn}}
                />
            </div>

            <SectionWrapper
                title='Still have questions?'
                styles={{backgroundColor: Colors.mainBg, paddingTop: 40, paddingBottom: 79}}
            >
                <p>
                    We make it easy for you to get in touch with Alliance Disposal. Choose any of the contact options below and a friendly team member will happily help answer any questions you may have.
                </p>

                <ContactOptions />
            </SectionWrapper>
        </Layout>
    );
};

const styles = {
    header: {
        color: '#FFFFFF',
        backgroundColor: Colors.allianceBlue
    }
}

export default HowToRentADumpster;