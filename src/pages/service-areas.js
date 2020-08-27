import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import ContentWrapper from '../components/ContentWrapper';
import Layout from '../structure/Layout';
import PageHeader from '../components/PageHeader';
import TextButton from '../components/buttons/TextButton';

import Colors from '../constants/Colors';
import { states } from '../constants/Data';
import Paths from '../constants/Paths';

const ServiceAreas = (props) => {
    return (
        <Layout
            title='Service Areas'
            description='Alliance Disposal Provides Dumpster Rentals And Other Waste Services In New Jersey, Conneticut, Delaware and Pennsylvania'
            pageContext={props.pageContext}
            canonicalPath={props.location.pathname}
        >
            <PageHeader
                title='Service Areas'
                subTitle='Dumpster Rentals, Commercial &amp; Residential Pickup'
            />

            {
                states.map(state => (
                    <div
                        key={state.key}
                        style={{backgroundColor: '#FFFFFF', ...styles.section}}
                    >
                        <h2
                            style={{margin: '0 0 17px', textAlign: 'center'}}
                        >
                            {state.name}
                        </h2>

                        <p>
                            Alliance Disposal services all of {state.name}. Providing dumpster rentals, recurring trash and recycling removal for businesses, and curbside trash and recycling collection for homeowners. Select a county below to learn more about service in that area. {state.path ? <Link to={Paths[state.path]}>Learn more about {state.name} waste services</Link> : null}
                        </p>

                        <div
                            style={{marginBottom: 7}}
                        >
                            <b>Counties</b>
                        </div>

                        <div
                            style={{display: 'flex', flexWrap: 'wrap'}}
                        >
                            {
                                state.counties.map(county => {
                                    const allPaths = props.data.allMdx.edges;
                                    const validPaths = allPaths.filter(node => {
                                        const slug = Object.values(node)[0].fields.slug;

                                        if (
                                            slug.includes(state.key)
                                            && slug.includes(
                                                county.toLowerCase().replace(' ', '-') + '-county'
                                            )
                                        ) return slug;

                                        return null;
                                    });

                                    let path = null;
                                    if (validPaths.length > 0) {
                                        path = validPaths[0].node.fields.slug;
                                    }

                                    return(
                                        <div
                                            key={county}
                                            style={{width: 'calc(50% - 5px)', marginBottom: 7, marginRight: 5}}
                                        >
                                            {
                                                path
                                                    ? <Link to={path}>{county} County</Link>
                                                    : <>{county} County</>
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                ))
            }

            <div
                style={{...styles.section, backgroundColor: Colors.allianceBlue, textAlign: 'center', color: '#FFFFFF'}}
            >
                <h2
                    style={{marginTop: 17}}
                >
                    Where should we service next? 
                </h2>

                <p>
                    Not satisfied with your current waste management solution? Recommend that we service your area next.
                </p>

                <TextButton
                    to={Paths.contact}
                    styles={{color: Colors.allianceOrange}}
                >
                    Recommend my area
                </TextButton>
               
                <Img
                    fluid={props.data.ServiceMyAreaMap.childImageSharp.fluid}
                    alt='Alliance Disposal covers all of the United States with waste services'
                    style={{maxWidth: 300, margin: '37px auto 0'}}
                />
                
            </div>

            <div
                style={{...styles.section, }}
            >
                <ContentWrapper
                    title='Roll Off Rentals'
                    paragraph='10 to 40 cubic yard dumpster rentals. Hassle free online ordering. Transparent pricing. Home or business. Dedicated customer service.'
                    link={{label: 'Learn more', to: Paths.rollOffDetails}}
                    link2={{label: 'Get pricing', to: Paths.orderRollOff}}
                    image={{
                        path: props.data.StackedDumpsters.childImageSharp.fluid,
                        alt: 'Alliance Disposal provides dumpster rentals across all of the United States'
                    }}
                />
            </div>

        </Layout>
    );
};

const styles = {
    section: {
        margin: '15px auto',
        maxWidth: 600,
        padding: 20
    }
}

export default ServiceAreas;

export const pageQuery = graphql`
  query serviceAreaIndex {
    allMdx(filter: {frontmatter: {level: {regex: "/county/"}}}) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
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
    ServiceMyAreaMap: file(relativePath: { eq: "service-my-area-map.png" }) {
        childImageSharp {
            fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
  }
`