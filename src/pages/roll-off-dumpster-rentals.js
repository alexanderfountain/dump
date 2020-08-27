import React from 'react';
import { Link, navigate, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Build from '@material-ui/icons/BuildOutlined';
import DateRange from '@material-ui/icons/DateRangeOutlined';
import Phone from '@material-ui/icons/PhoneIphone';

import Icon from '@mdi/react';
import { mdiMapMarkerRadius, mdiAtom, mdiScale, mdiRuler, mdiTree, mdiScaleBalance } from '@mdi/js';

import ContentBlurb from '../components/ContentBlurb';
import ContentWrapper from '../components/ContentWrapper';
import FindPricing from '../components/FindPricing';
import Layout from '../structure/Layout';
import PageHeader from '../components/PageHeader';
import PicContent from '../components/PicContent';
import PrimaryButton from '../components/buttons/PrimaryButton';
import TelDisplay from '../components/TelDisplay';

import Colors from '../constants/Colors';
import { dumpsterSizes } from '../constants/Data';
import Paths from '../constants/Paths';
import { areaServed } from '../constants/Schema';

import { RollOff } from '../assets/icons/services';

const headerStyle = {
    color: '#FFFFFF', backgroundColor: Colors.allianceBlue
};

const pricingParagraphs = [
    {
        title: 'Location',
        text: 'Prices change from county to county. Each county has different waste flow rules and regulations that affect the price. Making pricing very location specific.',
        icon: mdiMapMarkerRadius
    },
    {
        title: 'Material',
        text: "There are different disposal rates for different materials. By bringing your dumpsters to the appropriate facility, we ensure that you get the best price and that it’s disposed of in the most environmentally friendly manner.",
        icon: mdiAtom
    },
    {
        title: 'Weight',
        text: 'The amount of weight put into a dumpster will determine the price you pay. When you order a dumpster you pre purchase a discounted amount of weight. If you go over weight you simply pay the prorated rate for the extra.',
        icon: mdiScale
    }
];

const orderingSize = 54;
const orderingIconColor = '#5BBA6F';

const howOrderingWorks = [
    {
        heading: 'Select a size',
        text: 'Pick the best size dumpster for your job',
        icon: <Icon path={mdiRuler} size={`${orderingSize}px`} color={orderingIconColor} />
    },
    {
        heading: 'Select a weight',
        text: 'Save by bundling in disposal weight',
        icon: <Icon path={mdiScaleBalance} size={`${orderingSize}px`} color={orderingIconColor} />
    },
    {
        heading: 'Fill your dumpster',
        text: 'Toss in your debris & call for pick up',
        icon: <RollOff size={orderingSize} color={orderingIconColor} borderColor={Colors.allianceBlue} />
    },
    {
        heading: 'We plant a tree',
        text: 'For every dumpster rented',
        icon: <Icon path={mdiTree} size={`${orderingSize}px`} color={orderingIconColor} />
    }
];

const RollOffDetails = (props) => {

    const data = useStaticQuery(graphql`
        query {
            RollOff30Blue: file(relativePath: { eq: "roll-off-dumpster-rental-30-yard.png" }) {
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
            RollOff20TubeBlue: file(relativePath: { eq: "20-yard-dumpster-rental.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    const mobile = useMediaQuery('(max-width: 599px)');

    return (
        <Layout
            title='Roll Off Dumpster Rental Services'
            description='Affordable Dumpster Rental. Same Day Delivery Available. Online Ordering. Transparent Pricing. No Hidden Fees. 10 Yard To 40 Yard Dumpsters.'
            pageContext={props.pageContext}
            canonicalPath={props.location.pathname}
            restrictWidth
            additionalSchema={[{
                '@context': 'https://schema.org',
                '@type': 'Service',
                name: 'Roll Off Dumpster Rental',
                areaServed: areaServed,
                availableChannel: {
                    availableLanguage: ['en-US', 'es-419'],
                    serviceUrl: Paths.mainUrl + Paths.orderRollOff.slice(1),
                    servicePhone: Paths.tel,
                    serviceSmsNumber: Paths.tel
                },
                brand: 'Alliance Disposal',
                logo: Paths.logoPath,
                serviceType: 'Roll Off Dumpster Rental',
                termsOfService: Paths.mainUrl + Paths.tos.slice(1),
                slogan: 'Same Day Delivery Available, Next Business Day Delivery Guaranteed.',
                serviceOutput: 'Home debris removal',
                hoursAvailable: [
                    'Mon-Sun 07:00 - 19:00'
                ]
            }]}
        >
            
            <PageHeader
                title='Roll Off Dumpster Rentals'
                subTitle='Same day delivery available'
                image={{
                    path: data.RollOff30Blue.childImageSharp.fluid,
                    alt: 'Roll off dumpster rentals'
                }}
                imageWrapper={{width: '70%', margin: '0 auto'}}
                btnText='get pricing'
                searchField
            />

            <div 
                style={{backgroundColor: Colors.allianceBlue, color: '#FFFFFF', textAlign: 'center'}}
                className='greyBorders'
            >
                <ContentWrapper
                    title='How ordering works'
                    wrapperStyles={{maxWidth: '100%'}}
                >
                    <div
                        style={{display: 'flex', margin: '20px 30px -20px', flexWrap: 'wrap', justifyContent: 'center'}}
                    >
                    {
                        howOrderingWorks.map(item => (
                            <div
                                key={item.heading}
                                style={{width: 220, margin: '0 15px 40px'}}
                            >
                                <div style={{marginBottom: 10}}>
                                    {item.icon}
                                </div>
                                <h3 style={{margin: 0}}>
                                    {item.heading}
                                </h3>
                                <div>
                                    {item.text}
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </ContentWrapper>
            </div>

            <div style={{backgroundColor: '#FFFFFF'}} className='greyBorders'>
                <ContentWrapper
                    title='How pricing works'
                >
                    <p
                        style={{marginTop: 0, textAlign: 'center'}}
                    >
                        Our pricing is transparent. We don't believe in hidden fees or surcharges. The price you see on checkout is the price you pay.
                    </p>

                    <p
                        style={{textAlign: 'center'}}
                    >
                        Dumpster rental pricing is affected by three factors: <b>location, type of debris</b> and <b>debris weight</b>.
                    </p>

                    {
                        pricingParagraphs.map((para, index) => {
                            const isEven = index % 2 === 0;
                            const icon = (
                                <div
                                    style={{
                                        marginRight: isEven ? 15 : 0,
                                        marginLeft: !isEven ? 15 : 0,
                                        textAlign: 'center'
                                    }}
                                >
                                    <Icon
                                        path={para.icon}
                                        size='56px'
                                        color={Colors.allianceOrange}
                                    />
                                </div>
                            )

                            return (
                                <div
                                    key={para.title}
                                    className='p'
                                    style={{
                                        display: 'flex',
                                        flexDirection: mobile
                                            ? !isEven ? 'column-reverse' : 'column'
                                            : 'row'
                                    }}
                                >
                                    {
                                        isEven
                                            ? icon
                                            : null
                                    }
                                    <p
                                        style={{margin: 0}}
                                    >
                                        <b>{para.title}:</b> {para.text}
                                    </p>
                                    {
                                        !isEven
                                            ? icon
                                            : null
                                    }
                                </div>
                            )
                        })
                    }
                </ContentWrapper>
            </div>

            <div
                style={{marginTop: 62, marginBottom: 75}}
                className='toFlex'
            >
                    
                <ContentBlurb
                    icon={DateRange}
                    title='14 day rental periods'
                    paragraph='All of our dumpster rentals come with a complimentary fourteen day rental period. Rental extensions available.'
                    link={{label: 'Learn more', to: Paths.rollOffRentalPeriods}}
                    link2={{label: 'Get pricing', to: Paths.orderRollOff}}
                    wrapperStyle={{marginBottom: 60}}
                />

                <ContentBlurb
                    icon={Build}
                    title='Contractor or builder?'
                    paragraph='We can get you a dumpster no matter where your project is. Contact us to see if you qualify for volume discounts.'
                    link={{label: 'Learn more', to: Paths.constructionDumpsterRentals}}
                    link2={{label: 'Contact', to: Paths.contact}}
                />

            </div>

            <div 
                style={{backgroundColor: '#FFFFFF', borderTop: 0}}
                className='greyBorders'
            >
                <ContentWrapper
                    title='Dumpster sizes'
                >
                     <p style={{marginTop: 0}}>
                        The most important aspect to consider when ordering a roll-off dumpster is getting the right size for your disposal needs.
                    </p>

                    <p>
                       <Link to={Paths.dumpsterSizes} id='roll-off-details-dumpster-sizes'>Roll off dumpsters come in five primary sizes</Link>, each with a range of weight limits you can select from.
                    </p>

                    <p>
                        Below is a helpful table with the dimensions and average ton limit purchased for each of the various sizes. 1 ton is equal to 2,000 lbs. Or checkout our <Link to={Paths.rollOffSizingGuide}>roll-off dumpster selection guide</Link> to find the best size dumpster based on project types.
                    </p>

                    <p>
                        The average weight limits below are based on household or general construction debris. See limits for <Link to={Paths.concreteDumpsters}>concrete dumpsters</Link> or <Link to={Paths.yardDumpsters}>yard waste dumpsters</Link>.
                    </p>

                </ContentWrapper>

                <div
                    style={{width: '100vw', maxWidth: 700, overflow: 'scroll', margin: '0 auto'}}
                >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{...headerStyle, borderTopLeftRadius: 4}}>
                                    Size
                                </TableCell>
                                <TableCell style={{...headerStyle}}>
                                    Dimensions
                                </TableCell>
                                <TableCell style={{whiteSpace: 'nowrap', ...headerStyle, borderTopRightRadius: 4}}>
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
                                        {row.tons} Tons
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    <div
                        style={{fontSize: 12, marginTop: 20, color: '#232323', fontWeight: 300, paddingLeft: 20}}
                    >
                        *Actual dimensions may vary slightly. Weight limits vary by type of debris.
                    </div>
                </div>

                <div style={{textAlign: 'center', marginTop: 37, marginBottom: 39}}>
                    <PrimaryButton
                        className='order-roll-off'
                        onClick={() => navigate(Paths.orderRollOff)}
                        style={{maxWidth: 335}}
                        fullWidth
                    >
                        I'm ready to order!
                    </PrimaryButton>
                </div>

            </div>

            <div
                className='greyBorders'
            >
                <PicContent
                    title='Make a difference'
                    wrapperStyles={{height: 350, fontWeight: 500}}
                    image={{
                        path: data.TreeGrowing.childImageSharp.fluid,
                        alt: 'Rent a roll off dumpster from Alliance Disposal and we plant a tree'
                    }}
                    link={{label: 'Plant A Tree Program', to: `${Paths.about}#plant-a-tree`}}
                    light
                >
                    <p>
                        When you rent a dumpster from Alliance Disposal we make a donation to have a tree planted in a forest in need. Your purchase can make a difference.
                    </p>
                    <Img
                        fluid={ data.OneTreePlantedService.childImageSharp.fluid}
                        alt='OneTreePlanted plants a tree for every roll off dumpster rental that Alliance Disposal rents'
                        style={{height: 100, width: 100, position: 'absolute', bottom: 10, right: 10}}
                    />
                </PicContent>
            </div>

            <div
                className='greyBorders'
                style={{backgroundColor: '#FFFFFF'}}
            >
                <ContentWrapper
                    title='Selection tips'
                >
                    <p 
                        style={{marginTop: 0}}
                    >
                        <b>Size matters.</b> Make sure you get the appropriate size dumpster for the job. You want to ensure that all of your debris will fit inside the dumpster and not above the rim.
                    </p>

                    <p>
                        <b>Material matters.</b> In order to protect the environment and abide by state and local laws not all materials can be dumped at the same location. If you have a mix of different materials you may need two smaller dumpsters in order to avoid contamination fees. Materials like <b>yard waste, dirt</b> and <b>concrete or brick</b> are typically better off in their own dumpster. If you need help determining what materials cannot be mixed together <Link to={Paths.contact}>Contact Alliance Disposal</Link>.
                    </p>

                    <p>
                        Hazardous materials such as: wet paint, asbestos and certain other materials may never be mixed into a dumpster. Contact us directly for help discarding hazardous materials. Check out our helpful guide to see <Link to={Paths.guideWhatCanGoIntoDumpster}>what you can and can't throw into a dumpster</Link>.
                    </p>

                    <p>
                        Have an odd material you need to get rid of? Alliance Disposal can haul away odd items like railroad ties, telephone poles, etc. Just fill out our <Link to={Paths.quoteRollOff}>roll off dumpster quote request</Link> form and we'll respond to you quickly with a free quote.
                    </p>

                    <p>
                        <b>Placement matters.</b> Dumpsters are delivered on roll-off trucks. The dumpster is slowly rolled off the back of the truck onto the ground at the service location. For that reason a truck typically needs a little more than double the dumpster length to be able to deliver it. If you think the space will be tight, give us a call <TelDisplay /> and we'll be happy to help determine the best size for you.
                    </p>

                    <p>
                        If you need or would like your dumpster placed on public property, such as a street, you must check with your local township to see if any permits are required.
                        Check to see if your town requires a <Link to={Paths.dumpsterPermits}>dumpster rental permit</Link>.
                        {/* You can also choose for Alliance Disposal to get the permit for you on checkout. This may effect the delivery date depending on the municipality. */}
                    </p>
                </ContentWrapper>
            </div>

            <div
                className='bottomCta'
            >
                <ContentBlurb
                    icon={Phone}
                    title='Stay up to date'
                    paragraph='Receive live text message updates to know when to expect your dumpster delivery.'
                    extendWidth
                />

                <p>
                    Not going to be home? Not a problem. Let us know where to place the dumpster and any special instructions. Even send us a picture.
                </p>

                <div
                    style={{marginTop: 37}}
                >
                    <Img
                        fluid={data.RollOff20TubeBlue.childImageSharp.fluid}
                        alt='Affordable roll off dumpster rentals'
                        style={{maxWidth: 390, margin: '0 auto'}}
                    />
                </div>

                <FindPricing
                    btnText='find pricing'
                />
            </div>

        </Layout>
    );
};

export default RollOffDetails;