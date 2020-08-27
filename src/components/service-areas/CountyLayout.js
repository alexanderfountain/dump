import React, { useState, useEffect } from 'react';
import { Link, graphql, navigate } from 'gatsby';
import Img from 'gatsby-image';

import CircularProgress from '@material-ui/core/CircularProgress';

import classes from './CountyLayout.module.css';

import { MDXRenderer } from 'gatsby-plugin-mdx';

import BlurbSwitcher from './BlurbSwitcher';
import DisposalRateScore from './DisposalRateScore';
import Layout from '../../structure/Layout';
import PrimaryButton from '../buttons/PrimaryButton';
import TownsList from './TownsList';

import Colors from '../../constants/Colors';
import Paths from '../../constants/Paths';

const ClientSideOnlyLazy = React.lazy(() =>
    import("./Map")
);

const CountyLayout = (props) => {
    const mdx = props.data.mdx;
    const mdxData = props.data.mdx.frontmatter;
    const isSSR = typeof window === "undefined";

    const [towns, setTowns] = useState([]);

    useEffect(() => {
        const importVar = mdxData.key.split('/')[0];
        import(`../../constants/geo/${importVar}`).then(item => {
            setTowns(item[mdxData.townList].towns)
        });
    }, []);

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
                '@type': 'Service',
                name: `Dumpster Rentals in ${mdxData.name} County, ${mdxData.state}`,
                areaServed: [
                    {
                        '@type': 'AdministrativeArea',
                        name: `${mdxData.name} County`
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
                            alt={`${mdxData.name} county ${mdxData.state} dumpster rentals`}
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
                            <h1>
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

            <h2>
                {mdxData.townListHeader}
            </h2>

            <p>
                {mdxData.townListPara}
            </p>

            <TownsList
                county={mdxData.name}
                towns={towns}
            />

            {
                !isSSR && (
                    <React.Suspense fallback={<CircularProgress color="secondary" />}>
                        <ClientSideOnlyLazy source={mdxData.map} title={mdxData.title} />
                    </React.Suspense>
                )
            }

            <h2>
                {mdxData.disposalRateHeader}
            </h2>
            <DisposalRateScore
                price={+mdxData.disposalRate}
                paragraph={mdxData.disposalRatePara}
            />

            <BlurbSwitcher
                oneWrapper={mdxData.blurbOne}
                onePara={mdxData.blurbOnePara}
                twoWrapper={mdxData.blurbTwo}
                twoPara={mdxData.blurbTwoPara}
            />
            
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
                                All services offered in {mdxData.name} County
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={styles.cell}>
                                {
                                    mdxData.services.includes('dumpster-rental')
                                        ? <Link to={`/service-areas/${mdxData.key}-county-${mdxData.state.toLowerCase()}-dumpster-rental/`}>
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

export default CountyLayout;

export const pageQuery = graphql`
  query ServiceAreaCountyQuery($id: String, $imagePath: String, $headerImagePath: String) {
    mdx(id: { eq: $id }) {
        id
        body
        frontmatter {
            title
            description
            key
            name
            services
            headerImagePath
            h1
            state
            townListHeader
            townListPara
            townList
            map
            disposalRateHeader
            disposalRatePara
            disposalRate
            blurbOne
            blurbOnePara
            blurbTwo
            blurbTwoPara
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