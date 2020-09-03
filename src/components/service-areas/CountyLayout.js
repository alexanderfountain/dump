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