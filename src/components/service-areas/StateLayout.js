import React from 'react';
import { graphql, navigate } from 'gatsby';
import Img from 'gatsby-image';

// import { MDXRenderer } from 'gatsby-plugin-mdx';

import ContactOptions from '../buttons/ContactOptions';
import ContentWrapper from '../ContentWrapper';
import Layout from '../../structure/Layout';
import PrimaryButton from '../buttons/PrimaryButton';

import Colors from '../../constants/Colors';
import Paths from '../../constants/Paths';

import { AInCircle } from '../../assets/icons/logos';

const TownLayout = (props) => {
    const mdx = props.data.mdx;
    return (
        <Layout
            title={mdx.frontmatter.title}
            description={mdx.frontmatter.description}
            bgColor='#FFFFFF'
            mainStyles={{paddingLeft: 20, paddingRight: 20, marginBottom: 70}}
            pageContext={props.pageContext}
            canonicalPath={props.location.pathname}
            restrictWidth
        >

            {
                props.data.header
                ? (
                    <div
                        style={{position: 'relative', height: 300, margin: '0 -20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
                    >
                        <Img
                            fluid={props.data.header.childImageSharp.fluid}
                            alt={`${mdx.frontmatter.name} dumpster rentals`}
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
                                {mdx.frontmatter.h1}
                            </h1>

                            <PrimaryButton
                                onClick={() => navigate(Paths.schedule)}
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
                            {mdx.frontmatter.h1}
                        </h1>
                        
                        <PrimaryButton
                            onClick={() => navigate(Paths.schedule)}
                            style={{maxWidth: 335, backgroundColor: Colors.altSecondaryBtn, marginTop: 20}}
                            fullWidth
                        >
                            Get Pricing
                        </PrimaryButton>
                        
                    </div>
                )
            }

            {/* <MDXRenderer imagePath={props.data.image}>
                {mdx.body}
            </MDXRenderer> */}

            <div style={{background: Colors.allianceBlue, color: '#FFFFFF', margin: '0 -20px', textAlign: 'center'}}>
                <ContentWrapper
                    title='Need help?'
                    paragraph={<>We love to hear from you.<br />Fast email responses.<br />Taking calls from 7am to 7pm EST.</>}
                >
                    <div style={{marginTop: 27, marginBottom: 37, textAlign: 'center'}}>
                        <AInCircle size={119} />
                    </div>

                    <ContactOptions />
                    
                </ContentWrapper>
            </div>

        </Layout>
    );
};

export default TownLayout;

export const pageQuery = graphql`
  query ServiceAreaStateQuery($id: String, $imagePath: String, $headerImagePath: String) {
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