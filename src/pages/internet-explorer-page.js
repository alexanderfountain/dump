import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

import { Helmet } from 'react-helmet';

import Icon from '@mdi/react';
import { mdiEdge, mdiGoogleChrome, mdiFirefox } from '@mdi/js';

import TelDisplay from '../components/TelDisplay';

import Colors from '../constants/Colors';
import Paths from '../constants/Paths';

import { AInCircle } from '../assets/icons/logos';

const InternetExplorerPage = () => {

    useEffect(() => {
            // Internet Explorer 6-11
            const isIE = /*@cc_on!@*/false || !!document.documentMode;

            if (isIE) {
                // Do nothing
                console.log(isIE)
            } else {
                navigate('/');
            }
    }, []);

    return (
        <div style={{margin: -8, lineHeight: 1.4}}>

            <Helmet>
                <meta name="robots" content="noindex" />
            </Helmet>

            <div style={{textAlign: 'center'}}>
                <div style={{background: Colors.allianceBlue, padding: 20, margin: '0 auto'}}>
                    <h1 style={{color: '#FFFFFF', marginTop: 0}}>
                        Welcome To Alliance Disposal
                    </h1>
                    <AInCircle size={200} />
                    <p style={{fontSize: 36, color: Colors.allianceOrange, margin: '15px auto 0'}}>
                        Call <TelDisplay style={{color: '#FFFFFF'}} />
                    </p>
                </div>
            </div>

            <div style={{textAlign: 'center'}}>
                <div style={{maxWidth: 725, margin: '0 auto'}}>
                    <h2>
                        Alliance Disposal provides on-demand waste services
                    </h2>
                    <p>
                        We can provide you with a <b>roll off dumpster rental</b> for your next home clean out or construction project.
                    </p>
                    <p>
                        Businesses sign up for <b>commercial waste services</b> and save anywhere from 5% to 50% on your trash and recycling bill.
                    </p>
                    <p>
                        Homeowners benefit from our convenient <b>curbside garbage and recycling collection</b>.
                    </p>
                    <p>
                        Alliance Disposal team members are committed to you! We pride ourselves on our great customer service and unlike other companies we are easy to get in contact with and are available 7 days a week.
                    </p>
                    <p
                        style={{fontSize: 24}}
                    >
                        To setup service
                        <br />
                        Call us at <TelDisplay />
                        <br />
                        Send an email to <a href={`mailto:${Paths.salesEmail}`} target="_blank" rel="noopener noreferrer">{Paths.salesEmail}</a>
                    </p>
                </div>
            </div>

            <div style={{textAlign: 'center', marginTop: 15}}>
                <div style={{maxWidth: 725, margin: '0 auto'}}>
                    <h2 style={{color: Colors.allianceOrange}}>Improve your experience</h2>
                    <p>
                        Microsoft has depreciated <b>Internet Explorer</b> and no longer supports it.
                    </p>
                    <p>
                        Since Microsoft no longer supports IE we have stopped conforming our site for it so that we can focus our time on improving your service experience.
                    </p>
                    <p>
                        To experience our full site, along with online checkout, switch to another browser. Below are the most popular alternatives:
                    </p>

                    <div style={{display: 'flex', justifyContent: 'space-around'}}>
                        <a
                            id='download-edge'
                            style={{cursor: 'pointer'}}
                            href='https://www.microsoft.com/en-us/windows/microsoft-edge'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div>
                                <Icon
                                    path={mdiEdge}
                                    size={3}
                                    color='#888888'
                                />
                                <div>Microsoft Edge</div>
                            </div>
                        </a>
                        <a 
                            id='download-chrome'
                            style={{cursor: 'pointer'}}
                            href='https://www.google.com/chrome/'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div>
                                <Icon
                                    path={mdiGoogleChrome}
                                    size={3}
                                    color='#888888'
                                />
                                <div>Google Chrome</div>
                            </div>
                        </a>
                        <a 
                            id='download-firefox'
                            style={{cursor: 'pointer'}}
                            href='https://www.mozilla.org/en-US/firefox/new/'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div>
                                <Icon
                                    path={mdiFirefox}
                                    size={3}
                                    color='#888888'
                                />
                                <div>Mozilla Firefox</div>
                            </div>
                        </a>
                    </div>

                    <p>
                        You can get in contact with us via phone <TelDisplay /> or email at <a href={`mailto:${Paths.email}`} target="_blank" rel="noopener noreferrer">{Paths.email}</a> if you need any help downloading or setting up a new web browser. We're happy to take the time to help you, even if you're not ordering from us.
                    </p>

                </div>
            </div>

            <div style={{textAlign: 'center', marginTop: 15}}>
                <div style={{maxWidth: 725, margin: '0 auto'}}>
                    <h2>Alliance Disposal's Mission</h2>
                    <p>
                        Our mission is to achieve carbon neutrality in the waste management industry through innovation, improved efficiency and planting trees.
                    </p>
                    <p>
                        For every dumpster you rent from us, we donate to <a href='https://onetreeplanted.org/' target="_blank" rel="noopener noreferrer">One Tree Planted</a> to help restore forests in need by planting a tree.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default InternetExplorerPage;