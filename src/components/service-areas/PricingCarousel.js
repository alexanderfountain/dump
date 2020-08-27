import React, { useState, useEffect } from 'react';
import { navigate, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import classes from './PricingCarousel.module.css';

import PrimaryButton from '../buttons/PrimaryButton';

import Colors from '../../constants/Colors';
import Paths from '../../constants/Paths';

const PricingCarousel = (props) => {

    const data = useStaticQuery(graphql`
        query {
            TenYardDimensions: file(relativePath: { eq: "10-yard-dumpster-dimensions.png" }) {
                childImageSharp {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            TwentyYardDimensions: file(relativePath: { eq: "20-yard-dumpster-dimensions.png" }) {
                childImageSharp {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            ThirtyYardDimensions: file(relativePath: { eq: "30-yard-dumpster-dimensions.png" }) {
                childImageSharp {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            FortyYardDimensions: file(relativePath: { eq: "40-yard-dumpster-dimensions.png" }) {
                childImageSharp {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            TenYardDumpsterRental: file(relativePath: { eq: "10-yard-dumpster-rental.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            TwentyYardDumpsterRental: file(relativePath: { eq: "20-yard-dumpster-rental.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            ThirtyYardDumpsterRental: file(relativePath: { eq: "30-yard-dumpster-rental.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            FortyYardDumpsterRental: file(relativePath: { eq: "40-yard-dumpster-rental.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)

    const [selectedSize, setSelectedSize] = useState('10');
    const [slide, setSlide] = useState(false);
    const [dumpRate, setDumpRate] = useState(null);
    const [haulRate, setHaulRate] = useState(null);

    useEffect(() => {
        if (props.skus) {
            import('../../axios/stripe').then(stripe => {
                stripe.getOneSku(props.skus.dump)
                    .then(res => {
                        if (res.data && res.data.price) {
                            setDumpRate(res.data.price / 100);
                        }
                    })
                    .catch((error) => {
                        console.warn(error);
                    });
                stripe.getOneSku(props.skus.haul)
                    .then(res => {
                        if (res.data && res.data.price) {
                            setHaulRate(res.data.price / 100);
                        }
                    })
                    .catch((error) => {
                        console.warn(error);
                    });
            })
        }
    }, []);

    const sizeSelectedHandler = (value) => {
        setSlide(true);
        setSelectedSize(value);
        setTimeout(() => {
            setSlide(false);
        }, 200);
    }

    const sizes = [
        {
            size: '10',
            thumbnail: {
                path: data.TenYardDumpsterRental.childImageSharp.fluid,
                alt: '10 yard dumpster rental Alliance Disposal'
            },
            image: {
                path: data.TenYardDimensions.childImageSharp.fluid,
                alt: "A 20 yard dumpster's dimensions that is offered by Alliance Disposal's rent a dumpster division."
            },
            para: 'A 10 yard dumpster is the smallest size available, and is best if you do not have a lot of debris or the space to fit a larger dumpster. A 10 yard dumpster can hold 10 cubic yards of material, about 4 pickup truck loads, typically holds approximately 2-3 tons of debris.',
            startingTons: 2
        },
        {
            size: '20',
            thumbnail: {
                path: data.TwentyYardDumpsterRental.childImageSharp.fluid,
                alt: '20 yard dumpster rental Alliance Disposal'
            },
            image: {
                path: data.TwentyYardDimensions.childImageSharp.fluid,
                alt: "A 20 yard dumpster's dimensions that is offered by Alliance Disposal's rent a dumpster division."
            },
            para: '20 yard dumpsters are perfect for household cleanouts, small renovation projects and large deck or roof replacements. A 20 yard dumpster holds 20 cubic yards of debris, 8 pickup truck loads, for most materials holds approximately 3-4 tons.',
            startingTons: 3
        },
        {
            size: '30',
            thumbnail: {
                path: data.ThirtyYardDumpsterRental.childImageSharp.fluid,
                alt: '30 yard dumpster rental Alliance Disposal'
            },
            image: {
                path: data.ThirtyYardDimensions.childImageSharp.fluid,
                alt: "A 30 yard dumpster rental dimensions. Showing the size of a 30 yard roll off container available for rent from Alliance Disposal"
            },
            para: 'A 30 yard roll off container is best for ongoing construction projects and large estate cleanouts. 30 yard dumpsters can hold 30 cubic yards of materials, about 12 pickup truck loads, typically holds approximately 4-5 tons of material.',
            startingTons: 4
        },
        {
            size: '40',
            thumbnail: {
                path: data.FortyYardDumpsterRental.childImageSharp.fluid,
                alt: '40 yard dumpster rental Alliance Disposal'
            },
            image: {
                path: data.FortyYardDimensions.childImageSharp.fluid,
                alt: "A 40 yard dumpster dimensions showing the size of Alliance Disposal's 40 yard dumpster rentals."
            },
            para: '40 yard dumpsters are the largest size available. They are best for large demolition projects. A 40 yard roll off dumpster can hold 40 cubic yards of materials, about 16 pickup truck loads, typically equivalent to approximately 5-6 tons of debris.',
            startingTons: 5
        }
    ];

    return (
        <div
            style={{maxWidth: 745, margin: '0 auto 52px'}}
        >

            <div
                style={{width: '100%', marginBottom: 10, display: 'flex'}}
            >
                {
                    sizes.map(size => (
                        <div
                            key={size.size}
                            style={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative'}}
                            onClick={() => sizeSelectedHandler(size.size)}
                        >
                            <div
                                style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.48)',
                                zIndex: size.size === selectedSize ? 0 : 2
                            }}
                            />
                            <Img
                                fluid={size.thumbnail.path}
                                alt={size.thumbnail.alt}
                                style={{
                                    width: '100%',
                                    height: '100%'
                                }}
                            />
                            <div
                                className='footNote'
                                style={{position: 'relative', color: size.size === selectedSize ? Colors.tintColor : 'rgba(0, 0, 0, 0.87)'}}
                            >
                                {size.size} yard
                            </div>
                        </div>
                    ))
                }
            </div>

            <div
                style={{overflow: 'hidden'}}
            >
                {sizes.map(size => (
                    <div
                        key={size.size}
                        style={{
                            width: '100%',
                            display: size.size === selectedSize ? 'block' : 'none',
                            position: 'relative',
                            left: (size.size === selectedSize) ? 0 : -2000,
                            opacity: slide ? 0 : 1,
                            transition: slide ? '1s' : '1s',
                        }}
                    >
                        <div
                            className={[classes.parentWrapper, classes.mainImageParent].join(' ')}
                        >
                            <div
                                className={classes.mainImageWrapper}
                            >
                                <Img
                                    fluid={size.image.path}
                                    alt={size.image.alt}
                                    style={{
                                        minWidth: 300,
                                        maxWidth: 335,
                                        width: '100%'
                                    }}
                                />
                            </div>

                            <div
                                style={{color: Colors.allianceBlue}}
                                className={classes.childWrapper}
                            >
                                <h4
                                    style={{margin: '12px 0 0'}}
                                >
                                    {size.size} Yard Roll Off Dumpster
                                </h4>
                                <p
                                    style={{marginTop: 7, marginBottom: 12, fontWeight: '300'}}
                                >
                                    {size.para}
                                </p>
                            </div>
                        </div>

                        <div
                            className={classes.parentWrapper}
                        >
                            <div
                                className={classes.childWrapper}
                            >
                                <p
                                    style={{margin: 0, marginBottom: 5, fontWeight: '600'}}
                                >
                                    Base Package:
                                </p>
                                <p
                                    style={{margin: 0, fontWeight: '300'}}
                                >
                                    14 Day Rental Period. Delivery and Pickup. {size.startingTons} Tons of Disposal.<br/>Transparent Pricing No Hidden Fees.
                                </p>
                            </div>

                            <div
                                className={classes.orderWrapper}
                            >
                                {
                                    dumpRate && haulRate
                                        ? (
                                            <div
                                                style={{marginBottom: 17, display: 'flex', justifyContent: 'center', alignItems: 'baseline'}}
                                            >
                                                <p style={{margin: 0, paddingRight: 5}}>Starting at</p> <h3 style={{margin: 0}}>${(dumpRate * size.startingTons) + haulRate}</h3>
                                            </div>
                                        )
                                        : null
                                }

                                <PrimaryButton
                                    onClick={() => navigate(Paths.orderRollOff)}
                                    className='order-roll-off'
                                    fullWidth
                                    style={{maxWidth: 335}}
                                >
                                    order now
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default PricingCarousel;