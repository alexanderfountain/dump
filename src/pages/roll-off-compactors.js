import React from 'react';
import { navigate, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Category from '@material-ui/icons/CategoryOutlined';
import LockOpen from '@material-ui/icons/LockOpenOutlined';

import ContentBlurb from '../components/ContentBlurb';
import ContentWrapper from '../components/ContentWrapper';
import Layout from '../structure/Layout';
import PageHeader from '../components/PageHeader';
import PrimaryButton from '../components/buttons/PrimaryButton';

import Paths from '../constants/Paths';


const Compactors = (props) => {

    const data = useStaticQuery(graphql`
        query {
            SelfCompactor: file(relativePath: { eq: "self-compacting-container.png" }) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            RecyclingBales: file(relativePath: { eq: "recycling-bales.png" }) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            TrashCompactor: file(relativePath: { eq: "trash-compactor.png" }) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return (
        <Layout
            restrictWidth
            title='Roll Off Compactors'
            description='For Businesses And Apartments With A Lot Of Trash A Compactor Dumpster Can Save You Money On Your Monthly Waste Bill'
            pageContext={props.pageContext}
            canonicalPath={props.location.pathname}
        >

            <PageHeader
                title='Garbage Compactors for Businesses'
                subTitle='The most cost effective solution'
                image={{
                    path: data.SelfCompactor.childImageSharp.fluid,
                    alt: 'A 40 yard self compacting roll off dumpster for rent. Used by businesses to reduce their waste and recycling bill.'
                }}
                btnText='get a quote'
                onClick={() => navigate(Paths.scheduleWasteAudit)}
                btnClassName='schedule-waste-audit'
            />

            <div
                style={{backgroundColor: '#FFFFFF'}}
                className='greyBorders'
            >
                <ContentWrapper
                    title='Lower your waste bill'
                    wrapperStyles={{minHeight: 500}}
                >
                    <p
                        style={{marginTop: 0}}
                    >
                        By compacting your waste fewer trips to the landfill are needed. Saving you money and reducing carbon emissions. 
                    </p>

                    <p>
                        Compacting your trash means you do not need as many waste containers. Having less containers not only saves you money, but also frees up more space on your property.
                    </p>

                    <p
                        style={{marginBottom: 39}}
                    >
                        Flat rate billing makes sure you know what you’re going to pay each and every month with no surprises. We don’t believe in hidden fees or surcharges.
                    </p>
                </ContentWrapper>
            </div>

            <div
                style={{backgroundColor: '#FFFFFF'}}
                className='greyBorders'
            >
                <ContentWrapper
                    title='Ease of use'
                    image={{
                        path: data.RecyclingBales.childImageSharp.fluid,
                        alt: 'Dumpster compactors make bales of recyclables such as cardboard bales'
                    }}
                >
                    <p
                        style={{marginTop: 0}}
                    >
                        Compactors are easy to use. Simply place your waste into the hopper and let the compactor do the rest. Freeing up your personnel to do more important things.
                    </p>

                    <p>
                        Whether you generate solid or wet waste it is no problem for our compactors. Tight seals prevent any leakage or spillage onto your property keeping it safe and clean.
                    </p>

                    <p
                        style={{marginBottom: 39}}
                    >
                        Locking mechanisms are also available to prevent any unwanted waste from going in or out of your compactor. Keeping the load secure until collection.
                    </p>
                </ContentWrapper>
            </div>

            <div
                style={{marginTop: 62, marginBottom: 75}}
            >
                <ContentBlurb
                    icon={Category}
                    title='A style for every need'
                    paragraph='No matter what type of business you run we have a compactor style that meets your needs and space requirements.'
                    extendWidth
                >
                    <p>
                        <b>Self-contained and compaction containers.</b> Designed to handle wet waste, processed food and medical waste. Sealed tight keeping pests away, reducing fires and controlling any odors. Perfect for warehouses, restaurants, offices, grocery stores and schools.
                    </p>

                    <p>
                        <b>Vertical compactors.</b> Designed for tight spaces. Best for dry waste, cardboard, paper and other recyclables.
                    </p>

                    <p>
                        <b>Apartment and high rise compactors.</b> Hand feed or through a chute system depending on your needs. Easy to operate with no training. Best for dry waste and low volumes.
                    </p>

                    <p>
                        <b>Add-ons.</b> Customize a compactor to fit your needs with additional add-ons. Deodorizers, fans, safety switches and more.
                    </p>
                </ContentBlurb>
            </div>

            <div
                style={{backgroundColor: '#FFFFFF'}}
                className='greyBorders'
            >
                <ContentWrapper
                    title='Recycling compactor solutions'
                    wrapperStyles={{minHeight: 500}}
                >
                    <p
                        style={{marginTop: 0}}
                    >
                        If you have a large amount of recyclables in your waste stream and are using multiple containers, it’s time to switch to a single compactor or baler.
                    </p>

                    <p>
                        If your recycling stream is a heavy mix between plastics, paper and cardboard a compactor is perfect for you.
                    </p>

                    <p
                        style={{marginBottom: 39}}
                    >
                        If your recyclables are mainly cardboard a baler will save you space and money. By bailing your cardboard you only need a small baler that has a small footprint. You can move the bales it produces to a holding place that is convenient for you. Our trucks will come load the bales and take them away for you.
                    </p>
                </ContentWrapper>
            </div>

            <div
                style={{marginTop: 62, marginBottom: 47}}
            >
                <ContentBlurb
                    icon={LockOpen}
                    title='Unlock the savings'
                    paragraph='Start saving money by swapping out your old containers with a compacting system.'
                />

            </div>

            <div
                className='bottomCta'
            >

                <div
                    style={{marginTop: 42}}
                >
                    <Img
                        fluid={data.TrashCompactor.childImageSharp.fluid}
                        alt='A blue 30 yard roll off dumpster compactor'
                        style={{maxWidth: 335, margin: '0 auto'}}
                    />
                </div>

                <PrimaryButton
                    onClick={() => navigate(Paths.scheduleWasteAudit)}
                    fullWidth
                    style={{marginTop: 50, maxWidth: 335}}
                    className='schedule-waste-audit'
                >
                    get a quote
                </PrimaryButton>
            </div>

        </Layout>
    );
};

export default Compactors;