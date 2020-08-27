import React from 'react';
import { navigate } from 'gatsby';

import Img from 'gatsby-image';
import Grid from '@material-ui/core/Grid';

import Layout from '../structure/Layout';

const TrashTalksBlog = (props) => {

    const allMdx = props.data.allMdx.edges

    return (
        <Layout
            bgColor='#FFFFFF'
            mainStyles={{paddingRight: 20, paddingLeft: 20, paddingBottom: 60}}
            title='Trash Talks Blog'
            description="Trash Talks It's Time To Listen. Follow Alliance Disposal On Our Journey Exploring The Many Facets Of Waste And Its Effect On Our Environment, Climate And Lives"
            pageContext={props.pageContext}
            canonicalPath={props.location.pathname}
            restrictWidth
        >

            <h1 style={{marginTop: 50}}>Trash Talks</h1>

            <Grid container spacing={3} style={{marginTop: 30}}>
                {
                    allMdx.map(item => {
                        const post = item.node;
                        const details = item.node.frontmatter;

                        return (
                            <Grid
                                item
                                xs={12}
                                md={6}
                                key={`${details.title}${details.datePublished}`}
                                onClick={() => navigate(post.fields.slug)}
                                style={{cursor: 'pointer'}}
                            >
                                <Img
                                    fluid={details.thumbnail.childImageSharp.fluid}
                                    alt={details.title}
                                />
                                <div style={{marginTop: 10}}>
                                    <span style={{fontWeight: 600}}>{details.title}</span> - {details.datePublished}
                                </div>
                                <div style={{marginTop: 10}}>
                                    {post.excerpt}
                                </div>
                            </Grid>
                        )
                    })
                }
            </Grid>

        </Layout>
    );
};

export default TrashTalksBlog;

export const pageQuery = graphql`
    query {
        allMdx(filter: {frontmatter: {type: {eq: "blog"}}}, sort: {order: DESC, fields: frontmatter___datePublished}) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        description
                        datePublished
                        thumbnail {
                            childImageSharp {
                                fluid(maxWidth: 600) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`