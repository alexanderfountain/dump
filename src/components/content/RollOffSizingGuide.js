import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import classes from './RollOffSizingGuide.module.css';

import PageHeader from '../PageHeader';

import Paths from '../../constants/Paths';

import { Pickup } from '../../assets/icons/misc';

const RollOffSizingGuide = (props) => {

    const data = useStaticQuery(graphql`
        query {
            DumpsterSizingChart: file(relativePath: { eq: "average-dumpster-sizes-chart-needed-by-project.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            TenYardDimensions: file(relativePath: { eq: "10-yard-dumpster-dimensions.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            TwentyYardDimensions: file(relativePath: { eq: "20-yard-dumpster-dimensions.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            ThirtyYardDimensions: file(relativePath: { eq: "30-yard-dumpster-dimensions.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            FortyYardDimensions: file(relativePath: { eq: "40-yard-dumpster-dimensions.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)

    const title = 'Size Selection Guide';
    const subTitle = 'Find the right size dumpster for your project. We’ve broken down which dumpster size is best for common projects. You’ll also find the dimensions of each dumpster to make sure that you have the available room for it. Along with their capacity equivalent in full-size pick-up trucks to help you determine which size is best for you.';

    const content = [
        {
            size: '10',
            para: 'Is the smallest size. Fits in small driveways or tight areas. Great for small home projects.',
            bullets: [
                'Single room renovations',
                'Basement or garage cleanouts',
                '250 sq ft deck replacement',
                '1,500 sq ft of roofing'
            ],
            pickups: 4,
            image: {
                path: data.TenYardDimensions.childImageSharp.fluid,
                alt: "A 10 yard dumpster with the roll off dumpster sizing dimensions of it. Showing the size of a 10 yard roll-off container that is offered by Alliance Disposal's dumpster rentals."
            },
            path: Paths.tenYardDumpster
        },
        {
            size: '20',
            para: 'Easy to throw material over the side or in the rear door. Great for larger home projects or small construction projects.',
            bullets: [
                'Multiple room renovation',
                'Multiple room cleanout',
                'Large deck or roof replacement',
                'Yard cleanup with small trees'
            ],
            pickups: 8,
            image: {
                path: data.TwentyYardDimensions.childImageSharp.fluid,
                alt: "A 20 yard roll off dumpster sizing dimensions that is offered by Alliance Disposal's rent a dumpster division."
            },
            path: Paths.twentyYardDumpster
        },
        {
            size: '30',
            para: 'Can handle most construction and demolition projects. Great for large amounts of bulky furniture.',
            bullets: [
                'Major home renovation projects',
                'New home construction',
                'Large estate cleanouts',
                'Removal of trees and storm debris'
            ],
            pickups: 12,
            image: {
                path: data.ThirtyYardDimensions.childImageSharp.fluid,
                alt: "A 30 yard roll off dumpster sizing dimensions. Showing the size of a 30 yard roll off container available for rent from Alliance Disposal"
            },
            path: Paths.thirtyYardDumpster
        },
        {
            size: '40',
            para: 'Largest size available. Meant for large and ongoing home projects or construction sites.',
            bullets: [
                'Home demolitions',
                'New construction',
                'Commercial building cleanouts',
                'Commercial landscaping projects'
            ],
            pickups: 16,
            image: {
                path: data.FortyYardDimensions.childImageSharp.fluid,
                alt: "A 40 yard roll off dumpster sizing dimensions showing the size of Alliance Disposal's 40 yard dumpster rentals."
            },
            path: Paths.fortyYardDumpster
        },
    ];

    const getPickups = (item) => {
        const array = []
        
        for (let i = 0; i < item.pickups; i++) {
            array.push(
                <Pickup size={24} color={'#919191'} />
            )
        }

        return array;
    }
    
    return (
        <div>
            {
                props && props.page
                    ? <PageHeader
                        title={title}
                        subTitle={subTitle}
                        btnText='get pricing'
                        styles={{marginBottom: 37}}
                        subTitleStyles={{marginBottom: 0}}
                        searchField
                    />
                    : (
                        <>
                            <h2
                                style={{marginTop: 0, marginBottom: 17, textAlign: 'center'}}
                            >
                                {title}
                            </h2>
                            <p
                                style={{textAlign: 'center', maxWidth: 525, margin: '0 auto 37px'}}
                            >
                                {subTitle}
                            </p>

                        </>
                    )
            }

            <h3
                style={{margin: '0 0 7px'}}
            >
                Dumpster size by project
            </h3>

            <div>
                <Img
                    fluid={data.DumpsterSizingChart.childImageSharp.fluid}
                    alt='A chart depicting which dumpster rental size a customer should go with depending on the type of project they are doing.'
                />
            </div>

            {
                content.map(item => (
                    <div
                        key={item.size}
                        style={{marginTop: 57}}
                    >

                        <h3
                            style={{margin: 0}}
                        >
                            {item.size} cubic yard roll-off dumpster
                        </h3>

                        <p
                            style={{margin: '17px 0'}}
                        >
                            {item.para}
                        </p>

                        <ul
                            style={{paddingLeft: 0, listStyle: 'none'}}
                        >
                            {
                                item.bullets.map(bullet => (
                                    <li
                                        key={bullet}
                                    >
                                        {`- ${bullet}`}
                                    </li>
                                ))
                            }
                        </ul>

                        <Link
                            to={item.path}
                        >
                            Learn more about a {item.size} yard dumpster rental
                        </Link>

                        <div
                            style={{
                                margin: '27px auto 0',
                                display: 'flex',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                maxWidth: 768
                            }}
                            className={classes.breakImage}
                        >
                            <div
                                style={{marginBottom: 17, textAlign: 'center'}}
                            >
                                <div
                                    style={{fontWeight: 600}}
                                >
                                    Fits {item.pickups} pickup truck beds
                                </div>
                                <div
                                    style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', maxWidth: 328, margin: '0 auto'}}
                                >
                                    {
                                        getPickups(item).map((pickup, i) => (
                                            <div
                                                key={i}
                                                style={{margin: '15px 7.5px 0', width: 'calc(25% - 15px)'}}
                                            >
                                                {pickup}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            <div style={{width: '100%', flex: 1}}>
                                <Img
                                    fluid={item.image.path}
                                    alt={item.image.alt}
                                />
                            </div>
                        </div>

                    </div>
                ))
            }
            
        </div>
    );
};

export default RollOffSizingGuide;