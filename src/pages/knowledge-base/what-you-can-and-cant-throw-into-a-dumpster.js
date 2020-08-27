import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import { withStyles } from '@material-ui/core/styles';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ContentWrapper from '../../components/ContentWrapper';
import Layout from '../../structure/Layout';
import PageHeader from '../../components/PageHeader';

import Colors from '../../constants/Colors';
import Paths from '../../constants/Paths';
import { windowGlobal } from '../../constants/Window';

const ExpansionPanelSummary = withStyles({
    'expandIcon': {
        expanded: 'transform'
        // transform: 'rotate(45deg)'
    }
  })(MuiExpansionPanelSummary);

const allowedMaterials = [
    {
        label: 'Household junk',
        content: <div>
            <p>
                A good rule of thumb is, if you can throw it out in your trash can you can throw it in the dumpster. Things like old blankets, toys, curtains, rugs and similar non-organic trash can all be put in a dumpster. While you can throw in things like cardboard or old books, we urge you to sort and recycle those materials instead to help out the environment. Check out our full list of recyclable materials to learn more.
            </p>
        </div>
    },
    {
        label: 'Furniture',
        content: <div>
            <p>
                Typically all furniture: couches, dressers, tables, are allowed in a dumpster. There are however some counties where mattresses and upholstery furniture are not allowed in landfills, or disposing of them comes with additional fees.
            </p>
            <p>
                If you are unsure if you can dispose of mattresses or upholstery furniture in your local area be sure to <Link to={Paths.contact}>contact us</Link> for help.
            </p>
        </div>
    },
    {
        label: 'Appliances',
        content: <div>
            <p>
                Most appliances can be thrown into a dumpster: ovens, washers, dryers, etc. are all acceptable. For example, any and all components containing hazardous fluids must be removed first. 
            </p>
            <p>
                For example older refrigerators contain freon, a chemical which erodes the ozone layer which must be safely removed and disposed of separately and properly. For more information on proper disposal of hazardous components check out the <a href='https://www.epa.gov/rad' target='_blank' rel='noopener noreferrer'>EPA’s Responsible Appliance Disposal program</a>.
            </p>
            <p>
                If you have an appliance that still has some life in it you can also try using an app like <a href='https://us.letgo.com/' target='_blank' rel='noopener noreferrer'>letgo</a> to divert waste from the landfill entirely.
            </p>
        </div>
    },
    {
        label: 'Renovation debris',
        content: <div>
            <p>
                Material from your home renovation project: drywall, siding, studs, etc. can be disposed of in your dumpster. Just be sure not to include anything from the <i>What Can’t I Put in a Dumpster</i> section.
            </p>
            <p>
                Renovation waste tends to be heavier. Make sure that you have a dumpster with an adequate ton limit or know the overage fee pricing for your area. <Link to={Paths.rollOffDetails}>Learn more about dumpster pricing and weight limits</Link> to avoid surprises on your bill.
            </p>
        </div>
    },
    {
        label: 'Yard waste',
        content: <div>
            <p>
                Brush, branches, logs, and other wood can be placed in a dumpster. There are some counties though that will limit how much organic waste can go in. Be sure to <Link to={Paths.contact}>contact us</Link> to find out the limits for your town.
            </p>
            <p>
                <b>Pro Tip:</b> In most counties you will receive a discounted rate for dumpsters that are all one material. If you are disposing of just yard waste make sure to select the appropriate material on <Link to={Paths.orderRollOff}>checkout</Link>
            </p>
        </div>
    },
    {
        label: 'Roofing shingles',
        content: <div>
            <p>
                Asphalt roofing shingles can go into a dumpster. However, due to their weight it is best to get a dedicated roll off container for them. In most counties you will get better pricing if the container is all roofing shingles, while in others additional fees may be charged if they’re mixed in with other materials. Feel free to ask what the policy is for your town or order a <Link to={Paths.roofingDumpsters}>roofing shingles dumpster rental</Link>.
            </p>
        </div>
    },
    {
        label: 'Concrete, asphalt, brick, stone and dirt',
        content: <div>
            <p>
                In small quantities these materials are allowed in a container. But if you have a large quantity, you’ll want to get dedicated dumpster for <Link to={Paths.concreteDumpsters}>a concrete and heavy debris dumpster rental</Link>.
            </p>
        </div>
    }
];

const prohibitedMaterials = [
    {
        label: 'Asbestos',
        content: <div>
            <p>
                Asbestos can be found in older homes and is considered a carcinogen. A majority of U.S. landfills have banned it and many states have strict regulations around disposing of it.
            </p>
            <p>
               If you have asbestos you should contact a licensed contractor to ensure safe removal. We can provide you with an asbestos dumpster with specialty lining and loading instructions to ensure proper disposal. <Link to={Paths.contact}>Contact us for details</Link>.
            </p>
        </div>
    },
    {
        label: 'Paints, stains and lacquers',
        content: <div>
            <p>
                Paints, stains and lacquers may contain lead or mercury and are prohibited from landfills and dumpsters. Use paintcare to <a href='https://www.paintcare.org/drop-off-locations/#/find-a-drop-off-site' target='_blank' rel='noopener noreferrer'>find drop-off locations for your leftover paint</a>.
            </p>
            <p>
                However, placing dried and solidified latex paints into the dumpster is ok if it is first wrapped in a plastic bag. Empty paint cans are also allowed in the container, but placing them in the recycling bin is a more eco-friendly option.
            </p>
        </div>
    },
    {
        label: 'Electronics',
        content: <div>
            <p>
                Electronics should not be placed in dumpsters. Some areas allow for electronics to be thrown into the container, but many states have e-waste recycling and prohibit it from landfills. TVs, computers, printers and other electronics in a dumpster can result in an additional charge based on your area.
            </p>
            <p>
                You can donate or recycle most electronics.  Many states, like New Jersey, have robust and easy to use e-waste programs. <a href='https://www.ncsl.org/research/environment-and-natural-resources/e-waste-recycling-legislation.aspx' target='_blank' rel='noopener noreferrer'>Find out the e-waste recycling options in your state</a>.
            </p>
        </div>
    },
    {
        label: 'Batteries',
        content: <div>
            <p>
                Car batteries and lithium batteries cannot go into a dumpster because they can leak chemicals that are harmful to the environment. Old car batteries can be taken to almost any store that sells them. Lithium batteries can be recycled at most big-box stores in the designated drop-off bins.
            </p>
            <p>
                While small alkaline batteries (AA’s, AAA’s, etc.) can be placed in the dumpster, we ask that you also bring these to drop-off bins as they can still harm the environment as well as cause fires.
            </p>
        </div>
    },
    {
        label: 'Contaminated soil',
        content: <div>
            <p>
                Contaminated soil, soil that has been mixed with hazardous substances, cannot be thrown into the dumpster. They must be contained or treated per Federal Superfund Guidelines and be handled by a certified hauler.
            </p>
            <p>
                <Link to={Paths.contact}>Contact us</Link> if you have contaminated soil and we will help you properly dispose of it.
            </p>
        </div>
    },
    {
        label: 'Fuels, oils and propane tanks',
        content: <div>
            <p>
                Flammable materials like gasoline, diesel, fuels, oils and propane tanks are highly combustible. They present a serious safety risk to drivers, landfill workers, and you. They are not allowed in dumpsters and disposing of them improperly is illegal in most areas.
            </p>
            <p>
                Contact a propane company, hazardous material collection center, or your local fire department for information on how to properly dispose of them in your area.
            </p>
        </div>
    },
    {
        label: 'Hot water tanks',
        content: <div>
            <p>
                Hot water tanks can collect harmful landfill gases inside of them and are not allowed in every landfill. <Link to={Paths.contact}>Contact us if you need to dispose of your hot water heater</Link>.
            </p>
        </div>
    },
    {
        label: 'Other hazardous waste',
        content: <div>
            <p>
                Hazardous materials and liquids must be handled properly and cannot go into a normal dumpster. Some examples of hazardous materials would be medical waste, pesticides, household cleaners, ink and resins. If you have a large amount of these materials you can <Link to={Paths.contact}>contact us to be serviced by a certified Hazardous Waste Hauler </Link>.
            </p>
            <p>
                If you have only a few hazardous waste materials most areas community collection events where you can drop off the hazardous material for proper disposal. Contact a local hazardous materials collection center for more information about the proper procedure in your area.
            </p>
        </div>
    }
];

const WhatYouCanAndCantThrowIntoADumpster = (props) => {

    const data = useStaticQuery(graphql`
        query {
            WhatCanCantDumpster: file(relativePath: { eq: "what-can-you-throw-in-a-dumpster.png" }) {
                childImageSharp {
                    fluid(maxWidth: 525) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            StackedDumpsters: file(relativePath: { eq: "roll-off-dumpster-rental.png" }) {
                childImageSharp {
                    fluid(maxWidth: 525) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        // If there is an open div get the height of it
        let openHeight = null;
        let openPos = null;
        if (expanded) {
            const openDiv = document.getElementById(expanded);
            openHeight = openDiv.offsetHeight;
            openPos = openDiv.offsetTop;
        };

        setExpanded(isExpanded ? panel : false);

        // Scroll up by the amount of the open div so that the content stays centered for user
        const newDivHeight = document.getElementById(panel).offsetTop;
        if (openPos && newDivHeight > openPos) {
            windowGlobal.scrollTo(0, newDivHeight - (openHeight + 100));
        }

    };

    return (
        <Layout
            restrictWidth
            title="What Can You Throw in a Dumpster"
            description='Have Questions About What Can Go Into A Dumpster? Use This Simple Guide To Help You Avoid Extra Fees And Protect The Environment'
            pageContext={props.pageContext}
            canonicalPath={props.location.pathname}
        >

            <PageHeader
                title="What Can You Throw in a Dumpster"
                subTitle="And what CAN'T you throw in a dumpster"
                image={{
                    path: data.WhatCanCantDumpster.childImageSharp.fluid,
                    alt: "What can you throw in a dumpster, also what you can't throw in a dumpster"
                }}
                subTitleH2
            />

            <div
                style={{backgroundColor: '#FFFFFF', marginTop: 39}}
            >
                <ContentWrapper
                    title='Why it matters'
                >
                    <p
                        style={{marginTop: 0}}
                    >
                        What you put into a dumpster impacts the price you pay, as well as the environment.
                    </p>

                    <p>
                        Most household and construction debris can be thrown into a roll-off container. Modern landfills are well equipped to keep contaminants contained and prevent leaching.
                    </p>

                    <p>
                        However, there are some materials that are regulated or banned by various local and federal regulations in order to protect people and the environment. Breaking these regulations can result in unwanted additional fees and other penalties.
                    </p>

                    <p>
                        This guide will answer the question of what you can and can’t throw into a dumpster. We did our best to make the below list as comprehensive as possible, but if you still need help determining what is accepted in your area, <Link to={Paths.contact}>contact Alliance Disposal</Link> and we’ll be happy to help.
                    </p>

                    <p
                        style={{textAlign: 'left'}}
                    >
                        <a
                            href='#faq'
                            style={{color: Colors.allianceOrange}}
                        >
                            Jump to frequently asked questions
                        </a>
                    </p>
                </ContentWrapper>
            </div>

            <div
                className='whiteBorders'
            >                
                <ContentWrapper
                    title='What can I put in a dumpster'
                    paragraph='Typically any non-hazardous material can be put into a dumpster. Most household waste, bulky furniture, construction debris, yard waste and appliances are perfectly acceptable. Below is a list of the most universally accepted materials along with some exceptions.'
                >

                    <div
                        style={{marginTop: 15}}
                    >
                        {allowedMaterials.map(item => (
                            <ExpansionPanel 
                                key={item.label}
                                id={item.label}
                                expanded={expanded === item.label}
                                onChange={handleChange(item.label)}
                                style={{backgroundColor: 'transparent', boxShadow: 'none', textAlign: 'left', borderBottom: 'solid 0.5px rgba(0, 0, 0, 0.5)', borderRadius: 0}}
                            >
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                >
                                    {item.label}
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    {item.content}
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        ))}
                    </div>

                </ContentWrapper>
            </div>

            <div
                className='whiteBorders'
            >                
                <ContentWrapper
                    title="What can't I put in a dumpster"
                    paragraph='All hazardous materials are prohibited from going into the dumpster. This includes materials that can be toxic or pose a safety hazard such as wet paint, asbestos, sealed tanks, or flammables. This helps protect hard working men and women as well as our environment.'
                >

                    <p>
                        Always remember to ask when in doubt. We are always happy to <Link to={Paths.contact}>answer any questions</Link> you may have. Don’t risk the chance of getting extra fees or harming others.
                    </p>

                    <div
                        style={{marginTop: 15}}
                    >
                        {prohibitedMaterials.map(item => (
                            <ExpansionPanel 
                                key={item.label}
                                id={item.label}
                                expanded={expanded === item.label}
                                onChange={handleChange(item.label)}
                                style={{backgroundColor: 'transparent', boxShadow: 'none', textAlign: 'left', borderBottom: 'solid 0.5px rgba(0, 0, 0, 0.5)', borderRadius: 0}}
                            >
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                >
                                    {item.label}
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    {item.content}
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        ))}
                    </div>

                </ContentWrapper>
            </div>

            {/* FAQ */}
            <div
                style={{backgroundColor: '#FFFFFF', position: 'relative'}}
            >
                <div style={{position: 'absolute', top: -92}} id='faq' />
                <ContentWrapper
                    title='Frequently asked questions'
                >
                    <div
                        style={styles.faqDiv}
                    >
                        <div
                            style={styles.faqInnerDiv}
                        >
                            <div
                                style={styles.faqQA}
                            >
                                Q:
                            </div>
                            <div>
                                <p>
                                    Can you throw tires into a dumpster?
                                </p>
                            </div>
                        </div>

                        <div
                            style={styles.faqInnerDiv}
                        >
                            <div
                                style={styles.faqQA}
                            >
                                A:
                            </div>
                            <div>
                                <p>
                                    Many landfills ban tires, and placing a tire into the dumpster can result in a monetary fine.
                                </p>
                                <p>
                                    Most tire dealers and auto parts stores will accept your old tires.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        style={styles.faqDiv}
                    >
                        <div
                            style={styles.faqInnerDiv}
                        >
                            <div
                                style={styles.faqQA}
                            >
                                Q:
                            </div>
                            <div>
                                <p>
                                    Can you put a TV in a dumpster?
                                </p>
                            </div>
                        </div>

                        <div
                            style={styles.faqInnerDiv}
                        >
                            <div
                                style={styles.faqQA}
                            >
                                A:
                            </div>
                            <div>
                                <p>
                                    It is discouraged to put electronic waste into a dumpster. It is best to keep them out of landfills as they have components that can leach toxic material into the ground. If you have a large amount of electronics you will be required to recycle them as e-waste.
                                </p>
                                <p>
                                    However, if you have one or two TVs or other personal electronic devices most towns will allow them in a dumpster. There are some areas where local regulations strictly prohibit any e-waste to be put into a dumpster.
                                </p>
                                <p>
                                    <a href='https://www.ncsl.org/research/environment-and-natural-resources/e-waste-recycling-legislation.aspx'>
                                        Learn more about e-waste recycling options in your state.
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{...styles.faqDiv, borderBottom: 0}}
                    >
                        <div
                            style={styles.faqInnerDiv}
                        >
                            <div
                                style={styles.faqQA}
                            >
                                Q:
                            </div>
                            <div>
                                <p>
                                    Can I throw a mattress into a dumpster?
                                </p>
                            </div>
                        </div>

                        <div
                            style={styles.faqInnerDiv}
                        >
                            <div
                                style={styles.faqQA}
                            >
                                A:
                            </div>
                            <div>
                                <p>
                                    It depends on your area. Some towns allow mattresses into the landfill, while others prohibit it and doing so will result in additional charges. <Link to={Paths.contact}>Contact us to learn if your mattress can go into the dumpster</Link>.
                                </p>
                            </div>
                        </div>
                    </div>
                </ContentWrapper>
            </div>

            <div
                style={{marginTop: 62}}
            >
                <ContentWrapper
                    title='Roll Off Rentals'
                    image={{
                        path: data.StackedDumpsters.childImageSharp.fluid,
                        alt: 'Can I throw into a dumpster'
                    }}
                    wrapperStyles={{minHeight: 550}}
                    paragraph='10 to 40 cubic yard dumpster rentals. Online ordering. Clear and simple pricing. Dedicated customer service. A tree is planted for every dumpster rented.'
                    link={{label: 'Learn more', to: Paths.rollOffDetails}}
                    link2={{label: 'Get pricing', to: Paths.orderRollOff}}
                />
            </div>

        </Layout>
    );
};

const styles = {
    faqDiv: {
        borderBottom: 'solid 1px #939393',
        textAlign: 'left'
    },
    faqInnerDiv: {
        display: 'flex',
        alignItems: 'baseline'
    },
    faqQA: {
        fontWeight: 600,
        color: '#939393',
        marginRight: 5
    }
}

export default WhatYouCanAndCantThrowIntoADumpster;