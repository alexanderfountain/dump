import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import useMediaQuery from '@material-ui/core/useMediaQuery';

import Layout from '../structure/Layout';
import PageHeader from '../components/PageHeader';
import TextButton from '../components/buttons/TextButton';

import Colors from '../constants/Colors';
import Paths from '../constants/Paths';

const Services = (props) => {

    const data = useStaticQuery(graphql`
        query {
            RollOff30Blue: file(relativePath: { eq: "roll-off-dumpster-rental-30-yard.png" }) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            HeavyDutyDumpster: file(relativePath: { eq: "construction-dumpster-rental.png" }) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            FrontEndContainerRed: file(relativePath: { eq: "waste-services-commercial-dumpsters.png" }) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            TotersColored: file(relativePath: { eq: "residential-dumpster-rentals.png" }) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            JunkHaulingTruck: file(relativePath: { eq: "junk-hauling-truck.png" }) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    const serviceItems = [
        {
            title: 'Roll off dumpster rentals',
            para: "Roll off dumpsters are a simple and cost effective solution to remove tons of debris. They are perfect for home and business clean outs or any project that produces a lot of debris.",
            link: {label: 'roll off rentals', to: Paths.rollOffDetails},
            image: {
                path: data.RollOff30Blue.childImageSharp.fluid,
                alt: 'Waste services: roll off dumpster rentals'
            }
        },
        {
            title: 'Construction dumpsters',
            para: "Tearing down a building or putting one up? Construction dumpster’s are perfect for keeping your job site clear of debris. With a wide selection of materials and sizes there is one for every project.",
            link: {label: <span>construction<br />dumpsters</span>, to: Paths.constructionDumpsterRentals},
            image: {
                path: data.HeavyDutyDumpster.childImageSharp.fluid,
                alt: "Waste services: construction dumpsters"
            }
        },
        {
            title: 'Commercial dumpsters',
            para: "Alliance Disposal can help lower your business’s waste and recycling bill. Using our network of dependable haulers we find the best hauler for you. Saving you anywhere from 5% to 50% a month.",
            link: {label: <span>commercial<br />dumpsters</span>, to: Paths.commDumpsterDetails},
            image: {
                path: data.FrontEndContainerRed.childImageSharp.fluid,
                alt: 'Waste services: commercial dumpsters'
            }
        },
        {
            title: 'Residential waste services',
            para: "We help keep your home and neighborhood clean with reliable trash and recycling pickup. We don’t believe in hidden fees or surcharges, there will never be a surprise on your bill.",
            link: {label: <span>residential<br />services</span>, to: Paths.resiDetails},
            image: {
                path: data.TotersColored.childImageSharp.fluid,
                alt: 'Residential waste services: trash and recycling pickup'
            }
        },
        {
            title: 'Junk Removal',
            para: "With our full service junk removal you’ll never have to lift a finger. Simply let us know what must go and our professional Junk Removal Specialists will take care of the rest.",
            link: {label: 'junk removal', to: Paths.junkRemovalDetails},
            image: {
                path: data.JunkHaulingTruck.childImageSharp.fluid,
                alt: 'Waste services: junk removal'
            }
        },
    ]

    const sixTwenty = useMediaQuery('(min-width: 620px)');
    const tablet = useMediaQuery('(min-width: 768px)');

    return (
        <Layout
            title='Waste Services | On Demand'
            description='Alliance Disposal Offers Roll Off Dumpster Rentals, Commercial Dumpsters, Residential Trash And Recycling Pickup And Junk Removal.'
            pageContext={props.pageContext}
            canonicalPath={props.location.pathname}
        >
            <PageHeader
                title={'Waste Services'}
                subTitle={`Meeting all of your\nwaste management needs`}
                styles={{paddingBottom: 20, color: '#FFFFFF', backgroundColor: Colors.allianceBlue, maxWidth: '100%', borderBottom: `solid 10px ${Colors.mainBg}`}}
            />

            {
                serviceItems.map((item, index) => (
                    <div
                        key={item.title}
                        style={{
                            ...styles.card,
                            padding: sixTwenty ? 30 : '30px 20px',
                            flexDirection: tablet
                                ? index%2 === 0 ? 'row-reverse' : 'row'
                                : 'column'
                            
                        }}
                    >

                        <Img
                            fluid={item.image.path}
                            alt={item.image.alt}
                            imgStyle={{objectFit: 'contain'}}
                            style={{height: 132, width: tablet ? '50%' : '100%', marginBottom: 27}}
                        />

                        <div
                            style={{width: tablet ? '50%' : '100%'}}
                        >
                            <h3 style={{margin: 0, color: Colors.allianceOrange}}>
                                {item.title}
                            </h3>

                            <p style={{marginBottom: 27}}>
                                {item.para}
                            </p>

                            <TextButton
                                to={item.link.to}
                            >
                                Learn more about {item.link.label}
                            </TextButton>
                        </div>

                    </div>
                ))
            }

        </Layout>
    );
};

const styles = {
    card: {
        backgroundColor: '#FFFFFF',
        maxWidth: 768,
        margin: '0 auto',
        borderTop: `solid 10px ${Colors.mainBg}`,
        borderBottom: `solid 10px ${Colors.mainBg}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}

export default Services;