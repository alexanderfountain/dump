import React from 'react';

import { MDXRenderer } from 'gatsby-plugin-mdx';

import Breadcrumbs from '../../structure/Breadcrumbs';
import Layout from '../../structure/Layout';

const BlogLayout = (props) => {
    const mdx = props.data.mdx;
    const mdxData = props.data.mdx.frontmatter;

    return (
        <Layout
            title={mdxData.title}
            description={mdxData.description}
            bgColor='#FFFFFF'
            mainStyles={{paddingLeft: 20, paddingRight: 20, marginBottom: 70}}
            pageContext={props.pageContext}
            canonicalPath={props.location.pathname}
            restrictWidth
            isBlogPost={true}
            datePublished={mdxData.datePublished}
            metaImage={{
                src: mdxData.thumbnail.childImageSharp.fluid.src,
                alt: mdxData.title
            }}
        >

            <div style={{paddingTop: 40}}>

                <Breadcrumbs
                    crumbs={props.pageContext.breadcrumb.crumbs}
                    location={props.pageContext.breadcrumb.location}
                />
            
                <MDXRenderer imagePath={props.data.image}>
                    {mdx.body}
                </MDXRenderer>

            </div>

        </Layout>
    );
};

export default BlogLayout;

export const pageQuery = graphql`
  query BlogQuery($id: String) {
    mdx(id: { eq: $id }) {
        id
        body
        frontmatter {
            title
            description
            datePublished
            thumbnail {
                childImageSharp {
                    fluid(maxWidth: 1200) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
  }
`