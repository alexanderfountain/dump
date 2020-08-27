import React from 'react';
import { navigate } from 'gatsby';

import CheckCircle from '@material-ui/icons/CheckCircleOutlined';
import SquareFoot from '@material-ui/icons/SquareFootOutlined';

import Layout from '../structure/Layout';
import PageHeader from '../components/PageHeader';

import Paths from '../constants/Paths';
import Colors from '../constants/Colors';

import { RollOff } from '../assets/icons/services';

const iconSize = 125;

const guides = [
    {
        title: 'How To Rent A Dumpster',
        icon: <RollOff size={iconSize} borderColor={Colors.allianceBlue} />,
        description: 'We walk you through the dumpster rental process. From finding the best dumpster for you, to loading, to final disposal.',
        url: Paths.howToRentADumpster
    },
    {
        title: 'Roll Off Dumpster Sizing Guide',
        icon: <SquareFoot style={{fontSize: iconSize, color: Colors.allianceBlue}} />,
        description: 'Each size dumpster is broken down by project. Enjoy helpful hints to get a better idea of how much each size can hold.',
        url: Paths.rollOffSizingGuide
    },
    {
        title: 'What Can and Cannot Go Into A Dumpster',
        icon: <CheckCircle style={{fontSize: iconSize, color: Colors.allianceBlue}} />,
        description: "A complete guide to what can and can't go into your dumpster. Protect the environment and avoid fines.",
        url: Paths.guideWhatCanGoIntoDumpster
    }
]

const KnowledgeBase = (props) => {
    return (
        <Layout
            title='Knowledge Base'
            description='Alliance Disposal Knowledge Base Provides Helpful Information On Dumpster Rentals, Commercial Dumpsters, Residential Curbside Pickup and Junk Removal Services'
            pageContext={props.pageContext}
            canonicalPath={props.location.pathname}
            restrictWidth
        >
            <PageHeader
                title='Knowledge Base'
                subTitle='Click on a guide to learn more'
            />

            <div
                style={{display: 'flex', flexWrap: 'wrap', marginTop: 57}}
            >
                {
                    guides.map(guide => (
                        <div
                            key={guide.title}
                            onClick={() => navigate(guide.url)}
                            style={{width: '100%', maxWidth: 250, margin: '0 auto 57px', textAlign: 'center', display: 'flex', borderRadius: 15, flexDirection: 'column', border: 'solid 2px #232323', height: 373, cursor: 'pointer'}}
                        >
                            <div
                                style={{backgroundColor: '#232323', padding: 13, width: '100%', borderTopRightRadius: 12, borderTopLeftRadius: 12}}
                            >
                                <div
                                    style={{color: '#FFFFFF', fontSize: 21, fontWeight: 500}}
                                >
                                    {guide.title}
                                </div>
                                <div
                                    style={{fontSize: 12, color: Colors.allianceOrange, marginTop: 7}}
                                >
                                    An Alliance Disposal Guide
                                </div>
                            </div>
                            <div
                                style={{flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF'}}
                            >
                                {guide.icon}
                            </div>
                            <div
                                style={{backgroundColor: Colors.allianceBlue, borderBottomRightRadius: 12, borderBottomLeftRadius: 12, color: '#FFFFFF', fontSize: 12, padding: 7}}
                            >
                                {guide.description}
                            </div>
                        </div>
                ))
                }
            </div>

        </Layout>
    );
};

export default KnowledgeBase;