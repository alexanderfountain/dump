import React from 'react';
import { Link, graphql, navigate } from 'gatsby';
import Img from 'gatsby-image';

import CircularProgress from '@material-ui/core/CircularProgress';

import classes from './TownLayout.module.css';

import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../../structure/Layout';

import Colors from '../../constants/Colors';
import Paths from '../../constants/Paths';
import PrimaryButton from '../buttons/PrimaryButton';

const ClientSideOnlyLazy = React.lazy(() =>
    import("./Map")
);

const TownLayout = (props) => {
    const mdx = props.data.mdx;
    const mdxData = props.data.mdx.frontmatter;
    const isSSR = typeof window === "undefined";

    return (
        <Layout
            title={mdxData.title}
            description={mdxData.description}
            bgColor='#FFFFFF'
            mainStyles={{paddingLeft: 20, paddingRight: 20, marginBottom: 70}}
            pageContext={props.pageContext}
            canonicalPath={props.location.pathname}
            restrictWidth
            additionalSchema={[{
                '@context': 'https://schema.org',
                '@type': 'LocalBusiness',
                name: 'Alliance Disposal',
                url: Paths.mainUrl,
                telephone: Paths.tel,
                image: Paths.logoPath,
                logo: Paths.logoPath,
                email: Paths.salesEmail,
                priceRange: `${mdxData.priceRange}`,
                description: `Alliance Disposal Provides Dumpster Rental Services In ${mdxData.name}. 10, 20, 30 and 40 yard dumpster rentals.`,
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: '',
                    addressLocality: `${mdxData.name}`,
                    addressRegion: `${mdxData.state}`,
                    postalCode: `${mdxData.zip}`
                }
            },
            {
                '@context': 'https://schema.org',
                '@type': 'Service',
                name: `Dumpster Rentals in ${mdxData.name}, ${mdxData.state}`,
                areaServed: [
                    {
                        '@type': 'City',
                        name: `${mdxData.name}`,
                        address: {
                            '@type': 'PostalAddress',
                            streetAddress: '',
                            addressLocality: `${mdxData.name}`,
                            addressRegion: `${mdxData.state}`,
                            postalCode: `${mdxData.zip}`
                        }
                    }
                ],
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
            {
                props.data.header
                ? (
                    <div
                        style={{position: 'relative', height: 300, margin: '0 -20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
                    >
                        <Img
                            fluid={props.data.header.childImageSharp.fluid}
                            alt={`${mdxData.name} ${mdxData.state} dumpster rentals`}
                            style={{
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                width: '100%',
                                height: '100%',
                            }}
                        />

                        <div
                            style={{zIndex: 2, position: 'relative', color: '#FFFFFF', backgroundColor: 'rgba(6, 56, 82, 0.48)', textAlign: 'center', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
                        >
                            <h1 style={{padding: '0 5px'}}>
                                {mdxData.h1}
                            </h1>

                            <PrimaryButton
                                onClick={() => navigate(Paths.orderRollOff)}
                                style={{maxWidth: 335, backgroundColor: Colors.altSecondaryBtn}}
                                fullWidth
                            >
                                Get Pricing
                            </PrimaryButton>

                        </div>
                    </div>
                )
                : (
                    <div
                        style={{padding: '40px 20px 20px', backgroundColor: Colors.allianceBlue, margin: '0 -20px', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flexDirection: 'column'}}
                    >
                        <h1
                            style={{color: '#FFFFFF'}}
                        >
                            {mdxData.h1}
                        </h1>
                        
                        <PrimaryButton
                            onClick={() => navigate(Paths.orderRollOff)}
                            style={{maxWidth: 335, backgroundColor: Colors.altSecondaryBtn, marginTop: 20}}
                            fullWidth
                        >
                            Get Pricing
                        </PrimaryButton>
                        
                    </div>
                )
            }

            <MDXRenderer imagePath={props.data.image}>
                {mdx.body}
            </MDXRenderer>
            
            {
                !isSSR && (
                    <React.Suspense fallback={<CircularProgress color="secondary" />}>
                        <ClientSideOnlyLazy source={mdxData.map} title={mdxData.title} />
                    </React.Suspense>
                )
            }

            {/* <BlurbSwitcher
                oneWrapper='sizes'
                onePara='We offer a wide range of dumpster sizes in Summit NJ.'
                twoWrapper='rental period'
                twoPara="Complimentary 14 day rental periods in Summit NJ."
            /> */}

            <div>
                <table
                    style={{margin: '30px auto 60px', borderCollapse: 'collapse'}}
                >
                    <thead>
                        <tr>
                            <th
                                colSpan={2}
                                style={{backgroundColor: Colors.allianceBlue, color: '#FFFFFF', borderTopRightRadius: 4, borderTopLeftRadius: 4, padding: 10}}
                            >
                                All services offered in {mdxData.name}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={styles.cell}>
                                {
                                    mdxData.services.includes('dumpster-rental')
                                        ? <Link to={`/service-areas/${mdxData.key}-dumpster-rental/`}>
                                            Dumpster rentals
                                        </Link>
                                        : <>Dumpster rentals</>
                                }
                            </td>
                            <td style={styles.cell}>
                                Recurring trash &amp; recycling pickup for businesses
                            </td>
                        </tr>
                        <tr>
                            <td style={styles.cell}>
                                Residential curbside trash and recycling pickup
                            </td>
                            <td style={styles.cell}>
                                Junk removal
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </Layout>
    );
};

const styles = {
    cell: {
        padding: '30px 8px 30px 30px',
        borderBottom: 'solid 1px rgba(0, 0, 0, 0.28)'
    }
}

export default TownLayout;

export const pageQuery = graphql`
  query ServiceAreaTownQuery($id: String, $imagePath: String, $headerImagePath: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        description
        key
        name
        services
        zip
        state
        priceRange
        h1
        headerImagePath
        map
      }
    }
    header: file(relativePath: { eq: $headerImagePath }) {
        childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
    image: file(relativePath: { eq: $imagePath }) {
        childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
  }
`