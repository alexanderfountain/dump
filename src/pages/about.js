import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { connect } from 'react-redux';

import classes from './about.module.css';

import Layout from '../structure/Layout';

import ContentWrapper from '../components/ContentWrapper';
import PageHeader from '../components/PageHeader';
import PicContent from '../components/PicContent';
import TextButton from '../components/buttons/TextButton';

import Colors from '../constants/Colors';
import Paths from '../constants/Paths';

import { ALogoGrey } from '../assets/icons/logos';

const About = (props) => {

    const data = useStaticQuery(graphql`
        query {
            SpaceMission: file(relativePath: { eq: "space-mission.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            OneTreePlantedPartner: file(relativePath: { eq: "ReforestationPartnerLogo.png" }) {
                childImageSharp {
                    fluid(maxWidth: 700) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            OneTreePlantedService: file(relativePath: { eq: "ServiceOneTreeStampDesignBlue.png" }) {
                childImageSharp {
                    fluid(maxWidth: 700) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            LogoAInCircle: file(relativePath: { eq: "logo-a-in-circle.png" }) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            TreeSaplingGrowing: file(relativePath: { eq: "tree-sapling-growing.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return (
        <Layout
            title='About'
            pageContext={props.pageContext}
            canonicalPath={props.location.pathname}
            description='Alliance Disposal Is On A Mission To Make The Waste Management Industry Carbon Neutral. Every Dumpster Rented Makes A Difference.'
            addOrganizationSchema
        >

            <div
                style={{borderTop: 0}}
                className='whiteBorders'
            >
                <PageHeader
                    title={'Modern Waste Services'}
                    subTitle={'We believe in changing the status quo'}
                    image={{
                        path: data.LogoAInCircle.childImageSharp.fluid,
                        alt: "Alliance Disposal's signature blue and orange A logo in a white circle."
                    }}
                    styles={{paddingBottom: 69, color: '#FFFFFF', backgroundColor: Colors.allianceBlue, maxWidth: '100%'}}
                    imageWrapper={{maxWidth: 250, margin: '0 auto'}}
                />
            </div>

            <div
                style={{color: '#FFFFFF'}}
                className='whiteBorders'
            >
                <PicContent
                    title='Our mission'
                    image={{
                        path: data.SpaceMission.childImageSharp.fluid,
                        alt: "A plethora of stars in space representing Alliance Disposal's ambitions, live and ever expanding mission to make the world better and reach the stars."
                    }}
                    light
                >
                    <p
                        className={classes.missionSubtitle}
                    >
                        Achieve carbon neutrality in the waste management industry through innovation, improved efficiency and planting trees.
                    </p>
                </PicContent>
            </div>

            <div
                className={classes.midSection}
            >

                <div
                    className={`whiteBorders ${classes.midSectionItem} ${classes.midSectionLeft}`}
                >
                    <ContentWrapper
                        title='Sustainability'
                    >
                        <p
                            style={{marginTop: 0}}
                        >
                            Environmental sustainability is at the heart of what we do.
                        </p>
                        <p>
                            We believe the current way waste management is handled is obsolete. Waste flows and volumes have changed. It is time our industry evolved with it.
                        </p>
                        <p>
                            We are changing the industry norms. By finding ways to reduce the amount of waste going to landfills. By focusing on reducing the carbon emissions from collection vehicles. By planting trees to offset ours, and others, carbon footprint.
                        </p>
                        <p
                            style={{marginBottom: 0}}
                        >
                            We are not your grandmother's garbage company.
                        </p>
                    </ContentWrapper>
                </div>

                <div
                    className={`whiteBorders ${classes.midSectionItem} ${classes.midSectionRight}`}
                >
                    <ContentWrapper
                        title='Modern solutions'
                    >
                        <p
                            style={{marginTop: 0}}
                        >
                            Managing waste removal shouldn't be harder than booking a vacation.
                        </p>
                        <p>
                            Simple mobile friendly applications allow homeowners, companies and organizations to manage all of their waste and recycling needs. Easily and conveniently.
                        </p>
                        <p>
                            We equip other waste haulers with powerful hardware and software to improve efficiency across the industry.
                        </p>
                        <p
                            style={{marginBottom: 0}}
                        >
                            Data driven operations allow us to work with our partners to reduce emissions and waste, while improving service.
                        </p>
                    </ContentWrapper>
                </div>

            </div>

            <div
                style={{color: '#FFFFFF', position: 'relative'}}
                className={`whiteBorders ${classes.midSection}`}
            >
                <div id='plant-a-tree' style={{position: 'absolute', top: -50}} />
                <PicContent
                    title='Plant A Tree Program'
                    image={{
                        path: data.TreeSaplingGrowing.childImageSharp.fluid,
                        alt: "A tree sapling growing in the woods that represents Alliance Disposal's plant a tree program."
                    }}
                    wrapperStyles={{height: '100%'}}
                    contentStyles={{paddingBottom: 39}}
                    light
                >
                    <p>
                        We believe that every company should make a positive impact on the world. That is why we started our Plant A Tree Program.
                    </p>
                    <p>
                        Every time you order a dumpster from Alliance Disposal we make a donation to <a style={{color: Colors.linkLight}} href='https://onetreeplanted.org/' target='_blank' rel='noopener noreferrer'>One Tree Planted</a> and they plant a tree in a forest in need.
                    </p>
                    <h3>
                        Trees Planted
                    </h3>
                    <div
                        style={{fontSize: 80}}
                    >
                        {props.treeCount}
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
                        <Img
                            fluid={data.OneTreePlantedService.childImageSharp.fluid}
                            alt="A badge showing that Alliance Disposal donates to One Tree Planted for every dumpster rented so that a tree can be planted."
                            style={{width: 150, marginRight: 30}}
                        />
                        <Img
                            fluid={data.OneTreePlantedPartner.childImageSharp.fluid}
                            alt="A badge showing that Alliance Disposal is an official partner of One Tree Planted."
                            style={{width: 135, height: 135}}
                        />
                    </div>
                </PicContent>
            </div>


            <div
                style={{textAlign: 'center'}}
                className={`whiteBorders ${classes.midSection}`}
            >
                <div
                    style={{minWidth: '100%', backgroundColor: Colors.mainBg}}
                >
                    <div
                        style={{paddingRight: 10, paddingLeft: 10}}
                        className='contentWrapper'
                    >
                        <ALogoGrey
                            size={50}
                        />
                        <h4
                            className={classes.allianceHeader}
                        >
                            Alliance
                        </h4>
                        <p
                            style={{marginTop: 0}}
                        >
                            We believe in changing the status quo.
                        </p>
                        <p>
                            That with the right people any company can make an extraordinary change in this world.
                        </p>
                        <p>
                            That technology has the ability to bring our craziest dreams to life.
                        </p>
                        <p>
                            We just happen to be in the garbage business.
                        </p>

                        <TextButton
                            to={Paths.schedule}
                        >
                            Experience the difference
                        </TextButton>
                    </div>
                </div>
            </div> 

        </Layout>
    );
};

const mapStateToProps = state => {
    return {
        treeCount: state.app.treeCount
    };
};

export default connect(mapStateToProps, null)(About);