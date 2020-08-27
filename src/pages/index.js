import React, { Component } from 'react';
import { navigate, graphql } from 'gatsby';

import { connect } from 'react-redux';

import classes from './index.module.css'

import Button from '../components/buttons/PrimaryButton';
import ContactOptions from '../components/buttons/ContactOptions';
import ContentWrapper from '../components/ContentWrapper';
import Layout from '../structure/Layout';
import PageHeader from '../components/PageHeader';
import PicContent from '../components/PicContent';

import Colors from '../constants/Colors';
import Paths from '../constants/Paths';
import { areaServed } from '../constants/Schema';

import { AInCircle } from '../assets/icons/logos';

const borders = {borderTop: 'solid 6px #FFFFFF', borderBottom: 'solid 6px #FFFFFF'};

class Index extends Component {

    render() {
        const topContent = [
            {
                picContent: true,
                title: 'Trees Planted',
                link: {label: 'Learn more about our efforts', to: `${Paths.about}#plant-a-tree`},
                wrapperStyles: {height: '100%'},
                contentStyles: {paddingBottom: 39, minHeight: 350},
                light: true,
                image: {
                    path: this.props.data.TreeSaplingHand.childImageSharp.fluid,
                    alt: "A tree sapling in dirt being held in someone's hands representing Alliance Disposal's plant a tree program."
                },
                children: (<>
                    <p
                        style={{marginTop: 0}}
                    >
                        We plant a tree for every dumpster rented
                    </p>
                    <div
                        style={{
                            fontSize: 80,
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        {this.props.treeCount}
                    </div>
                </>)
            },
            {
                title: 'Roll Off Rentals',
                paragraph: <>10 to 40 cubic yard dumpster rentals.<br />Online ordering. Clear and simple pricing. <br />Dedicated customer service.</>,
                link: {label: 'Learn more', to: Paths.rollOffDetails},
                link2: {label: 'Schedule', to: Paths.orderRollOff},
                image: {
                    path: this.props.data.StackedDumpsters.childImageSharp.fluid,
                    alt: 'Roll off dumpster rentals – 10 to 40 cubic yard dumpsters'
                },
                imgWrapperStyle: {maxWidth: 335, marginLeft: 'auto', marginRight: 'auto'}
            },
            {
                title: 'Commercial Dumpsters',
                paragraph: <>2 to 8 cubic yard dumpsters.<br />Compactors for any type of business.<br />Free waste audits. No gimmick contracts.</>,
                link: {label: 'Learn more', to: Paths.commDumpsterDetails},
                link2: {label: 'Set up service', to: Paths.quoteCommercial},
                image: {
                    path: this.props.data.CommercialDumpsters.childImageSharp.fluid,
                    alt: 'Commercial dumpster rental options include self-compacting roll-off container, a front end dumpster and a rear end dumpster'
                },
            },
            {
                picContent: true,
                title: 'Areas we service',
                image: {
                    path: this.props.data.MapBackground.childImageSharp.fluid,
                    alt: "A map of the United States representing Alliance Disposal's roll-off dumpster service areas."
                },
                link: {label: 'All service areas', to: Paths.serviceAreas},
                contentStyles: {paddingBottom: 39, minHeight: 218},
                wrapperStyles: {height: '100%'},
                children: <p>Alliance Disposal currently services New Jersey, Delaware, Pennsylvania and Connecticut.</p>,
                light: true
            },
            {
                title: 'Residential Services',
                paragraph: <>Dependable service.<br />Best size and price for you.<br />Waste and recycling. Online scheduling.</>,
                link: {label: 'Learn more', to: Paths.resiDetails},
                link2: {label: 'Set up service', to: Paths.quoteResi},
                image: {
                    path: this.props.data.TotersColored.childImageSharp.fluid,
                    alt: 'Residential dumpster rentals, trash pickup, and recycling'
                },
            },
            {
                title: 'Junk Removal',
                paragraph: <>Alliance crews remove everything for you.<br />Responsible disposal.<br />Servicing homes and businesses.</>,
                link: {label: 'Learn more', to: Paths.junkRemovalDetails},
                link2: {label: 'Schedule', to: Paths.quoteJunkRemoval},
                image: {
                    path: this.props.data.JunkHaulingTruck.childImageSharp.fluid,
                    alt: 'A junk removal truck representing the full service junk removal services that Alliance Disposal offers.'
                },
            }
        ];

        const bottomContent = [
            {
                title: 'A modern experience',
                paragraph: <>A seamless integrated experience.<br />From ordering to final disposal.<br />We are revolutionizing the industry.</>,
                link: {label: 'Learn more', to: Paths.about},
                image: {
                    path: this.props.data.Laptop.childImageSharp.fluid,
                    alt: 'Book your dumpster rental online'
                },
                divStyles: {background: '#F9BB42'} // Alt color could be #1B1B3A with a light schema
            },
            {
                title: 'Reducing emissions',
                paragraph: <>We find the best hauler for you.<br />Reducing travel time, trucks and emissions.<br />Planting trees to absorb carbon.</>,
                link: {label: 'Learn more', to: Paths.about},
                image: {
                    path: this.props.data.Earth.childImageSharp.fluid,
                    alt: "The Earth nested in the recycling symbol representing Alliance Disposal's commitment of protecting the environment and achieve carbon neutrality in the roll-off container market and the waste industry."
                    
                },
                imageClass: classes.emissionsImage
            }
        ];

        return (
            <Layout
                title='Dumpster Rental - Rent a Dumpster'
                socialTitle='On-Demand Waste Services'
                mainStyles={{textAlign: 'center'}}
                canonicalPath={'/'}
                addOrganizationSchema
                additionalSchema={[{
                    '@context': 'https://schema.org',
                    '@type': 'Service',
                    name: 'Dumpster Rental',
                    areaServed: areaServed,
                    availableChannel: {
                        availableLanguage: ['en-US', 'es-419'],
                        serviceUrl: Paths.mainUrl + Paths.orderRollOff.slice(1),
                        servicePhone: Paths.tel,
                        serviceSmsNumber: Paths.tel
                    },
                    brand: 'Alliance Disposal',
                    logo: Paths.logoPath,
                    serviceType: 'Dumpster Rental',
                    termsOfService: Paths.mainUrl + Paths.tos.slice(1),
                    slogan: 'Same Day Delivery Available, Next Business Day Delivery Guaranteed.',
                    serviceOutput: 'Debris removal',
                    hoursAvailable: [
                        'Mon-Sun 07:00 - 19:00'
                    ]
                }]}
            >
                <div style={{borderBottom: 'solid 6px #FFFFFF'}}>
                    <PageHeader
                        title={'Dumpster Rentals\nand Waste Services\nOn Demand'}
                        subTitle={<span>Alliance Disposal<br /><i>Always on your side</i></span>}
                        btnText='get pricing'
                        image={{
                            path: this.props.data.RollOffFrontEndToterLogos.childImageSharp.fluid,
                            alt: 'Roll off dumpster rentals, commercial dumpster service and residential waste pickup are available from Alliance Disposal.'
                        }}
                        imageWrapper={{padding: '50px 20px'}}
                        onClick={() => navigate(Paths.schedule)}
                        btnClassName='schedule-a-service'
                        zeroMargin
                    />
                </div>

                <div
                    className={classes.desktopWrapper}
                >
                    {topContent.map(item => (
                        <div
                            key={item.title}
                            style={{...borders, overflow: 'hidden'}}
                            className={`${item.divClass} ${classes.desktopContentWrapper}`}
                        >
                            {
                                item.picContent
                                    ? (
                                        <PicContent
                                            {...item}
                                        >
                                            {item.children}
                                        </PicContent>
                                    )
                                    :(
                                        <ContentWrapper
                                            wrapperClass={classes.contentWrapper}
                                            imageWrapper={classes.imageWrapperDesktop}
                                            {...item}
                                        />
                                    )
                            }
                            
                        </div>
                    ))}
                </div>

                <div
                    style={borders}
                >
                    <PicContent
                        title={'Are you a contractor?\nRent a lot of dumpsters?'}
                        image={{
                            path: this.props.data.HouseUnderConstruction.childImageSharp.fluid,
                            alt: 'Contractors working on building a house and renting a dumpster for construction and demolition debris from Alliance Disposal.'
                        }}
                        wrapperClass={classes.picContentWrapper}
                        light
                    >

                        <div
                            style={{maxWidth: 335, margin: '0 auto', marginTop: 'auto', paddingBottom: 39}}
                        >
                            <Button
                                href={`tel:${this.props.tel}`}
                                fullWidth
                                style={{marginBottom: 27}}
                            >
                                call for volume pricing
                            </Button>

                            <Button
                                onClick={() => navigate(Paths.constructionDumpsterRentals)}
                                secondary
                                fullWidth
                            >
                                learn more
                            </Button>
                        </div>

                    </PicContent>
                </div>

                <div
                    className={classes.desktopWrapper}
                >
                    {bottomContent.map(item => (
                        <div
                            key={item.title}
                            style={{...borders, overflow: 'hidden', ...item.divStyles}}
                            className={classes.desktopContentWrapper}
                        >
                            <ContentWrapper
                                wrapperClass={classes.contentWrapper}
                                imageWrapper={classes.imageWrapperDesktop}
                                {...item}
                            />
                        </div>
                    ))}
                </div>

                <div style={{...borders, borderBottom: 'solid 12px #FFFFFF', background: Colors.allianceBlue, color: '#FFFFFF'}}>
                    <ContentWrapper
                        title='Questions?'
                        paragraph={<>We love to hear from you.<br />Fast email responses.<br />Taking calls from 7am to 7pm EST.<br />Rent a dumpster today!</>}
                    >
                        <div style={{marginTop: 27, marginBottom: 37, textAlign: 'center'}}>
                            <AInCircle size={119} />
                        </div>

                       
                        <ContactOptions />
                        

                    </ContentWrapper>
                </div>

            </Layout>
        )
    }
}

const mapStateToProps = state => {
    return {
        treeCount: state.app.treeCount,
        tel: state.app.tel
    };
};

export default connect(mapStateToProps, null)(Index);

export const query = graphql`
    query {
        TreeSaplingHand: file(relativePath: { eq: "tree-sapling-in-hand.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        StackedDumpsters: file(relativePath: { eq: "roll-off-dumpster-rental.png" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        CommercialDumpsters: file(relativePath: { eq: "commercial-dumpsters-and-compactor.png" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        MapBackground: file(relativePath: { eq: "map-background.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        TotersColored: file(relativePath: { eq: "residential-dumpster-rentals.png" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        JunkHaulingTruck: file(relativePath: { eq: "junk-hauling-truck.png" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        Laptop: file(relativePath: { eq: "online-dumpster-rentals.png" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        Earth: file(relativePath: { eq: "earth-and-leaves.png" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        HouseUnderConstruction: file(relativePath: { eq: "contractor-dumpster-rentals.jpeg" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        RollOffFrontEndToterLogos: file(relativePath: { eq: "dumpster-rental.png" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`