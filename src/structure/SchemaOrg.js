import React from 'react';
import { Helmet } from 'react-helmet';

import Paths from '../constants/Paths';
import { areaServed } from '../constants/Schema';

export default React.memo(
    ({
        author,
        datePublished,
        dateModified,
        defaultTitle,
        description,
        imageUrl,
        isBlogPost,
        organization,
        title,
        url,
        addOrganizationSchema,
        additionalSchema,
        canonicalPath,
        breadcrumbs
    }) => {

        const baseSchema = [
            {
                '@context': 'https://schema.org',
                '@type': 'WebPage',
                '@id': url + canonicalPath + '#webpage',
                url: url + canonicalPath,
                name: title,
                "image": [
                    imageUrl
                ],
                isPartOf: {
                    '@type': 'WebSite',
                    '@id': Paths.mainUrl + '#website',
                    url: Paths.mainUrl,
                    name: defaultTitle
                }
            }
        ];

        if (breadcrumbs) {
            const itemListElements = [];
            breadcrumbs.crumbs.forEach((crumb, index) => {
                itemListElements.push({
                    '@type': 'ListItem',
                    position: index + 1,
                    item: {
                        '@type': 'WebPage',
                        '@id': url + crumb.pathname + '#webpage',
                        url: url + crumb.pathname,
                        name: crumb.crumbLabel.replace(/-/g, ' ')
                    }
                })
            });
            baseSchema[0].breadcrumb = {
                '@type': 'BreadcrumbList',
                '@id': url + canonicalPath + '#breadcrumb',
                itemListElement: itemListElements
            }
        }

        let schema = isBlogPost
            ? [
                ...baseSchema,
                {
                    '@context': 'https://schema.org',
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        {
                            '@type': 'ListItem',
                            position: 1,
                            item: {
                            '@id': url,
                            name: title,
                            "image": [
                                imageUrl
                            ],
                            },
                        },
                    ],
                },
                {
                    '@context': 'https://schema.org',
                    '@type': 'BlogPosting',
                    url,
                    name: title,
                    alternateName: defaultTitle,
                    headline: title,
                    image: {
                        '@type': 'ImageObject',
                        url: imageUrl,
                    },
                    description: description,
                    author: {
                        '@type': 'Person',
                        name: (author.name ? author.name : author)
                    },
                    publisher: {
                        '@type': 'Organization',
                        url: organization.url,
                        logo: {
                            "@type": "ImageObject",
                            url: organization.logo.url,
                            width: organization.logo.width,
                            height: organization.logo.height,
                        },
                        name: organization.name,
                    },
                    mainEntityOfPage: {
                        '@type': 'WebSite',
                        '@id': url,
                    },
                    datePublished,
                    dateModified
                },
            ]
        : baseSchema;

        if (addOrganizationSchema) {
            schema = [
                ...schema,
                {
                    '@context': 'https://schema.org',
                    '@type': 'WebSite',
                    '@id': Paths.mainUrl + '#website',
                    url: Paths.mainUrl,
                    name: defaultTitle,
                },
                {
                    '@context': 'https://schema.org',
                    '@type': 'Organization',
                    '@id': url + '/#organization',
                    name: 'Alliance Disposal',
                    legalName: 'Alliance Disposal LLC',
                    address: {
                        '@type': 'PostalAddress',
                        addressLocality: 'South Plainfield',
                        addressCountry: 'USA',
                        addressRegion: 'New Jersey',
                        postalCode: '07080',
                        streetAddress: '550 Hollywood Ave'
                    },
                    description: description,
                    email: Paths.email,
                    logo: organization.logo.url,
                    telephone: Paths.tel,
                    url: url,
                    brand: 'Alliance Disposal',
                    areaServed: areaServed,
                    sameAs: [
                        Paths.facebook,
                        Paths.instagram,
                        Paths.twitter,
                        Paths.youtube,
                        Paths.linkedin
                    ],
                    contactPoint: [
                        {
                            "@type": "ContactPoint",
                            "telephone": Paths.tel,
                            "contactType": "sales",
                            "areaServed": "US"
                        },
                        {
                            "@type": "ContactPoint",
                            "telephone": Paths.tel,
                            "contactType": "customer support",
                            "areaServed": "US",
                            "availableLanguage": ["EN", "ES"]
                        }
                    ],
                    additionalType: 'http://www.productontology.org/doc/Waste_management'
                }
            ]
        }

        if (additionalSchema) {
            schema = [
                ...schema,
                ...additionalSchema
            ]
        }

        return (
            <Helmet>
                {/* Schema.org tags */}
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
            </Helmet>
        );
    },
);
