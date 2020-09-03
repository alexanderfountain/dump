import React, { useState, useEffect } from 'react';
import { Link, graphql, navigate } from 'gatsby';

import Layout from '../../structure/Layout';


const CountyLayout = (props) => {


    return (
        <Layout

        >

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