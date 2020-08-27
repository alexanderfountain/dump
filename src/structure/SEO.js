/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';

import SchemaOrg from './SchemaOrg';

const SEO = ({
    description,
    lang,
    meta,
    title,
    metaImage,
    socialTitle,
    canonicalPath,
    isBlogPost,
    addOrganizationSchema,
    additionalSchema,
    author,
    breadcrumbs,
    datePublished,
    dateModified = null
}) => {
    const { site, allianceLogo, dumpsterRental } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        siteUrl
                    }
                }
                allianceLogo: file(relativePath: { eq: "alliance-logo.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 800) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                dumpsterRental: file(relativePath: { eq: "dumpster-rental.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 800) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `
    );

    const metaDescription = description || site.siteMetadata.description;
    const imageUrl = metaImage && metaImage.src
        ? `${site.siteMetadata.siteUrl}${metaImage.src}`
        : `${site.siteMetadata.siteUrl}${allianceLogo.childImageSharp.fluid.src}`;
    const organization = {
        url: site.siteMetadata.siteUrl,
        name: site.siteMetadata.title,
        logo: {
            url: `${site.siteMetadata.siteUrl}${allianceLogo.childImageSharp.fluid.src}`,
            width: 120,
            height: 120
        }
    }
    
    return (<>
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            defaultTitle={site.siteMetadata.title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
        >
            <meta name="description" content={description ? description : site.siteMetadata.description} />

            <meta property="og:title" content={socialTitle ? socialTitle : title} />
            <meta property="og:description" content={metaDescription} />
            <meta property='og:type' content={isBlogPost ? `article` : `website`} />
            <meta property="og:url" content={site.siteMetadata.siteUrl + canonicalPath} />
            <meta name="twitter:site" content="@alliancedsp" />
            <meta name='twitter:title' content={socialTitle ? socialTitle : title} />
            <meta name="twitter:creator" content="@alliancedsp" />
            <meta name='twitter:description' content={metaDescription} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={site.siteMetadata.siteUrl + canonicalPath} />

            <meta property="og:image" content={metaImage ? imageUrl : (site.siteMetadata.siteUrl + dumpsterRental.childImageSharp.fluid.src)} />
            <meta name="twitter:image" content={metaImage ? imageUrl : (site.siteMetadata.siteUrl + dumpsterRental.childImageSharp.fluid.src)} />

            {
                canonicalPath
                    ? <link rel="canonical" href={site.siteMetadata.siteUrl + canonicalPath} />
                    : null
            }
        </Helmet>
        <SchemaOrg
            isBlogPost={isBlogPost}
            canonicalPath={canonicalPath}
            url={site.siteMetadata.siteUrl}
            title={title}
            imageUrl={imageUrl}
            description={metaDescription}
            datePublished={datePublished ? datePublished : false}
            dateModified={dateModified}
            author={isBlogPost ? (author ? author : site.siteMetadata.author) : site.siteMetadata.author}
            organization={organization}
            defaultTitle={site.siteMetadata.title}
            addOrganizationSchema={addOrganizationSchema}
            additionalSchema={additionalSchema}
            breadcrumbs={breadcrumbs}
        />
    </>)
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
    socialTitle: PropTypes.string,
    breadcrumbs: PropTypes.any,
    metaImage: PropTypes.any
}

export default SEO;


