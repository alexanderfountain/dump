import React, { useState } from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import GooglePlaces from '../components/inputs/GooglePlaces';
import Layout from '../structure/Layout';
import OrderOptions from '../components/buttons/OrderOptions';
import PageHeader from '../components/PageHeader';
import TelDisplay from '../components/TelDisplay';
import TextButton from '../components/buttons/TextButton';

import Colors from '../constants/Colors';
import Paths from '../constants/Paths';

const DumpsterRentalPermits = (props) => {

    const [town, setTown] = useState(null);
    const [townData, setTownData] = useState(null);
    const [noData, setNoData] = useState(false);
    const [learnMorePath, setLearnMorePath] = useState(null);
    const headings = ['Permits', 'Permit fee', 'Permit is valid for', 'Permit department info']

    const townSelectedHandler = (addressComponents) => {
        const selectedTown = addressComponents.find(item => (
            item.types.includes('locality')
        )).long_name

        const allPaths = props.data.allMdx.edges;

        const townExists = allPaths.find(item => (
            item.node.frontmatter.name === selectedTown
        ));

        if (townExists && townExists.node.frontmatter.permits) {
            setLearnMorePath(townExists.node.fields.slug);
            setTownData(townExists.node.frontmatter.permits);
            setNoData(false);
        } else {
            setNoData(true);
        }

        setTown(selectedTown)

    }

    return (
        <Layout
            title='Find Dumpster Rental Permits'
            description="Find Out If You Need A Permit When You Rent A Dumpster. Search By Town. Find Where To Apply. The Cost. When It's Needed. Find Out Everything You Need To Know."
            pageContext={props.pageContext}
            canonicalPath={props.location.pathname}
            restrictWidth
        >

            <PageHeader
                title='Dumpster Rental Permits'
                subTitle="Some towns require a permit to rent a dumpster. Permitting drastically changes from town to town."
            />

            <div
                style={{backgroundColor: '#FFFFFF', padding: 20}}
            >

                <h2
                    style={{margin: 0, textAlign: 'center'}}
                >
                    Do I need a dumpster permit?
                </h2>

                <div
                    style={{...styles.divWrapper, textAlign: 'center'}}
                >

                    <p>
                        Some towns only require a permit if you plan to place your dumpster in the street. Some if you want to place it in your driveway. Some don't require a permit for dumpsters at all. Some charge fees and others don't.
                    </p>

                    <p>
                        Use the search field to select your town. We'll tell you everything you need to know about dumpster rental permits in your town.
                    </p>

                </div>

                <div
                    style={{backgroundColor: Colors.allianceBlue, padding: 20, margin: '27px -20px'}}
                >
                    <GooglePlaces
                        searchOptions={{types: ['(cities)']}}
                        textFieldStyle={{backgroundColor: '#FFFFFF', margin: '0 auto'}}
                        wrapperStyles={{margin: '0 auto'}}
                        textFieldProps={{
                            placeholder: 'Enter city / town for permit info',
                        }}
                        onSelect={(res) => townSelectedHandler(res.address_components)}
                    />
                </div>

                <div
                    style={{...styles.divWrapper, border: 'solid 1px #979797', borderRadius: 4, padding: '20px 20px 39px'}}
                >

                    <div
                        style={{
                            margin: '0 0 -15px', textAlign: 'center',
                            color: town ? Colors.allianceBlue : '#A1A1A1'
                        }}
                    >
                        {
                            town
                                ? <div>
                                    Permit information for<br/><b>{town}</b>
                                </div>
                                : 'Enter a town above to find out the details about dumpster permits'
                        }
                    </div>

                    {noData
                        ? (
                            <div
                                style={{textAlign: 'center', marginTop: 45, color: '#111111'}}
                            >
                                <p
                                    style={{color: Colors.error}}
                                >
                                    No Information Found
                                </p>
                                <p>
                                    It looks like we haven't had the chance to call your township yet.
                                </p>
                                <p>
                                    We'll call them and get you all the information you need though!
                                </p>
                                <div
                                    style={{marginTop: 37}}
                                >
                                    <TextButton
                                        to={Paths.contact}
                                        state={{message: `Find out dumpster permit information for ${town} for me please.`}}
                                    >
                                        Find out permit info for me
                                    </TextButton>
                                </div>
                            </div>
                        )
                        : !townData
                            ? headings.map(item => (
                                <div
                                    key={item}
                                    style={{...styles.header, ...styles.headerFaded}}
                                >
                                    {item}
                                </div>
                            ))
                            : townData.permit 
                                ? headings.map(item => {
                                    let body;
                                    switch(item) {
                                        case 'Permits':
                                            body = (
                                                <div
                                                    style={{display: 'flex'}}
                                                >
                                                    <div
                                                        style={{width: '50%'}}
                                                    >
                                                        <div style={{fontWeight: 600}}>
                                                            Your property
                                                        </div>
                                                        <div>
                                                            {townData.permits.property}
                                                        </div>
                                                    </div>

                                                    <div
                                                        style={{width: '50%'}}
                                                    >
                                                        <div style={{fontWeight: 600}}>
                                                            Street
                                                        </div>
                                                        <div>
                                                            {townData.permits.street}
                                                        </div>
                                                    </div>

                                                    {
                                                        townData.permits.other
                                                            ? (
                                                                <div
                                                                    style={{width: '100%'}}
                                                                >
                                                                    <div style={{fontWeight: 600}}>
                                                                        Other
                                                                    </div>
                                                                    <div>
                                                                        {townData.permits.other}
                                                                    </div>
                                                                </div>
                                                            )
                                                            : null
                                                    }
                                                </div>
                                            )
                                            break;
                                            case 'Permit fee':
                                                body = (
                                                    <div>
                                                        {
                                                            townData.fee.property
                                                                ? (<>
                                                                    <div
                                                                        style={{fontWeight: 600}}
                                                                    >
                                                                        Your property
                                                                    </div>
                                                                    <div>
                                                                        {townData.fee.property}
                                                                    </div>
                                                                </>)
                                                                : null
                                                        }
                                                        
                                                        {
                                                            townData.fee.street
                                                                ? (<>
                                                                    <div
                                                                        style={{fontWeight: 600}}
                                                                    >
                                                                        Street
                                                                    </div>
                                                                    <div
                                                                        style={{whiteSpace: 'pre-line'}}
                                                                    >
                                                                        {townData.fee.street}
                                                                    </div>
                                                                </>)
                                                                : null
                                                        }

                                                        {
                                                            townData.fee.other
                                                                ? (<>
                                                                    <div
                                                                        style={{fontWeight: 600}}
                                                                    >
                                                                        Other
                                                                    </div>
                                                                    <div>
                                                                        {townData.fee.other}
                                                                    </div>
                                                                </>)
                                                                : null
                                                        }
                                                    </div>
                                                )
                                                break;
                                            case 'Permit is valid for':
                                                body = <div>{townData.valid}</div>
                                                break;
                                            case 'Permit department info':
                                                body = (<>
                                                    {townData.department
                                                        ? <><div style={styles.depHeading}>
                                                            Department
                                                        </div>
                                                        <div style={styles.depBody}>
                                                            {townData.department}
                                                        </div></>
                                                    : null}
                                                    {townData.department
                                                        ? <><div style={styles.depHeading}>
                                                            Address
                                                        </div>
                                                        <div style={styles.depBody}>
                                                            {townData.address}
                                                        </div></>
                                                    : null}
                                                    {townData.website
                                                        ? <><div style={styles.depHeading}>
                                                            Website
                                                        </div>
                                                        <div style={styles.depBody}>
                                                            <a
                                                                href={townData.website}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                {townData.department} website
                                                            </a>   
                                                        </div></>
                                                    : null}
                                                    {townData.form
                                                        ? <><div style={styles.depHeading}>
                                                            Online form
                                                        </div>
                                                        <div style={styles.depBody}>
                                                            <a
                                                                href={townData.form}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                Permit form
                                                            </a>   
                                                        </div></>
                                                    : null}
                                                    {townData.phone
                                                        ? <><div style={styles.depHeading}>
                                                            Phone
                                                        </div>
                                                        <div style={styles.depBody}>
                                                            {townData.phone}
                                                        </div></>
                                                    : null}
                                                    {townData.email
                                                        ? <><div style={styles.depHeading}>
                                                            Email
                                                        </div>
                                                        <div style={{...styles.depBody, marginBottom: 25}}>
                                                            {townData.email}
                                                        </div></>
                                                    : null}
                                                    {townData.notes
                                                        ? <><div style={styles.depHeading}>
                                                            Notes
                                                        </div>
                                                        <div style={{...styles.depBody, marginBottom: 25}}>
                                                            {townData.notes}
                                                        </div></>
                                                    : null}
                                                    {
                                                        learnMorePath
                                                            ? <TextButton
                                                                to={learnMorePath}
                                                            >
                                                                Learn more about dumpster rental permits in {town}
                                                            </TextButton>
                                                            : null
                                                    }
                                                </>)
                                               
                                                break;
                                        default: break;
                                    }

                                    return (<div key={item}>
                                        <div
                                            
                                            style={{...styles.header, ...styles.headerSelected}}
                                        >
                                            {item}
                                        </div>
                                        {body}
                                    </div>)
                                })
                                : (
                                    <div
                                        style={{textAlign: 'center', marginTop: 45, color: '#111111'}}
                                    >
                                        <p
                                            style={{color: Colors.success}}
                                        >
                                            Good News!
                                        </p>
                                        <p>
                                            No permits are required for dumpster rentals.
                                        </p>
                                        {
                                            townData.noPermitNote
                                                ? <p>
                                                    {townData.noPermitNote}
                                                </p>
                                                : null
                                        }
                                    </div>
                                )
                    }

                </div>

            </div>

            <div
                style={{backgroundColor: '#FFFFFF', padding: 20, margin: '15px 0'}}
            >
                <div
                    style={styles.divWrapper}
                >

               
                    <h2
                        style={{margin: 0, textAlign: 'center'}}
                    >
                        How do I apply for a dumpster permit?
                    </h2>

                    <p>
                        If you find that your town requires a permit to rent a dumpster applying is generally easy. Simply call the number, or use the online form if we show it's available. A township clerk will provide you with all the information you need.
                    </p>

                    <p>
                        Once you have completed the form, and if applicable paid the fee, your permit is normally issued within 24 hours. Once you have the permit you are all set to <Link to={Paths.orderRollOff}>rent a dumpster</Link>.
                    </p>

                    <p>
                        If you have an HOA make sure to get their approval as well. Even if you were approved for a dumpster permit.
                    </p>

                    <p>
                        If you need help filing for a dumpster rental permit we are be happy to help you, simply <Link to={Paths.contact}>contact us</Link>. You can even pay a small fee to have an Alliance Disposal team member do the whole dumpster permit process for you! Just give us a call at <TelDisplay />.
                    </p>
                </div>
            </div>

            <div
                style={{...styles.divWrapper, margin: '39px auto 0', textAlign: 'center', padding: '20px 20px 0'}}
            >
                <h2
                    style={{margin: 0}}
                >
                    Ready to rent a dumpster?
                </h2>

                <p>
                    Alliance Disposal has <Link to={Paths.dumpsterSizes}>10 to 40 cubic yard dumpster rentals</Link>. We have simple and transparent pricing, there are never surprises on your bill. Enjoy dedicated and friendly customer service.
                </p>

                <p>
                    Order through the most convenient method for you!
                </p>

                <div
                    style={{margin: '27px auto 39px'}}
                >
                    <OrderOptions />
                </div>

                <div
                    style={{maxWidth: 425, margin: '0 auto'}}
                >
                    <Img
                        fluid={props.data.StackedDumpsters.childImageSharp.fluid}
                        alt='Roll off dumpster rentals – 10 to 40 cubic yard dumpsters'
                    />
                </div>
            </div>
            
        </Layout>
    );
};

const styles = {
    divWrapper: {
        maxWidth: 625,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    header: {
        textAlign: 'center',
        borderRadius: 4,
        margin: '35px -21px 15px'
    },
    headerFaded: {
        border: 'solid 1px #979797',
        padding: 4,
        color: '#757575',
        backgroundColor: '#F9F9F9'
    },
    headerSelected: {
        padding: 5,
        color: '#FFFFFF',
        backgroundColor: Colors.allianceBlue
    },
    depHeading: {
        fontWeight: 600
    },
    depBody: {
        marginBottom: 15
    }
}

export default DumpsterRentalPermits;

export const pageQuery = graphql`
    query townPermitsIndex {
        allMdx (filter: {frontmatter: {level: {regex: "/town/"}}}) {
            edges {
                node {
                    frontmatter {
                        level
                        name
                        permits {
                            address
                            department
                            email
                            form
                            notes
                            permit
                            phone
                            valid
                            website
                            noPermitNote
                            permits {
                                property
                                street
                                other
                            }
                            fee {
                                property
                                street
                                other
                            }
                        }
                      }
                    fields {
                        slug
                    }
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
    }
`