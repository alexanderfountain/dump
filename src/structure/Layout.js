import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './Navbar';
import Footer from './Footer';
import SEO from './SEO';

// import FlashMessage from '../components/FlashMessage';

import Colors from '../constants/Colors';
/**
 * 
 * @param bgColor - Change background color of page 
 * @param restrictWidth - Absolute max width of content is 1140. Centered on page
 * @param headerStyles - Override AppBar Styles
 * @param mainStyles - Override main tag styles
 * @param hideMobileBtns - Hide the mobile buttons above AppBar
 * @param flash - All props needed to control FlashMessage
 * @param title - SEO Title of Page
 * @param description - SEO meta description
 * @param socialTitle - Page Title to show on Social Media cards
 * @param addOrganizationSchema - Include Organization Schema in Schema for this Page
 * @param additionalSchema - Include a custom Schema in Schema for this Page
 * @param pageContext - Breadcrumbs for this page
 * @param canonicalPath - Original page for content for rel='canonical'
 * @param metaImage Image thumbnail to use for previews object {src, alt}
 */
const Layout = (props) => {

    return (
        <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
            
            <Navbar
                bgColor={props.bgColor ? props.bgColor : Colors.mainBg}
                restrictWidth={props.restrictWidth}
                headerStyles={props.headerStyles}
                mainStyles={props.mainStyles}
                hideMobileBtns={props.hideMobileBtns}
            >

                {/* {
                    props.flash
                        ? (
                            <FlashMessage
                                flashStyle={props.flash.style}
                                flashMessageText={props.flash.message}
                                showFlash={props.flash.show}
                            />
                        )
                        : null
                } */}

                {/* <SEO
                    title={props.title}
                    description={props.description}
                    socialTitle={props.socialTitle}
                    addOrganizationSchema={props.addOrganizationSchema}
                    additionalSchema={props.additionalSchema}
                    canonicalPath={props.canonicalPath}
                    breadcrumbs={props.pageContext ? props.pageContext.breadcrumb : null}
                    isBlogPost={props.isBlogPost}
                    datePublished={props.datePublished}
                    metaImage={props.metaImage}
                /> */}

                {props.children}

            </Navbar>
            <Footer
                breadcrumbs={props.pageContext ? props.pageContext.breadcrumb : null}
            />
        </div>
    );
};

Layout.propTypes = {
    title: PropTypes.string,
    socialTitle: PropTypes.string,
    description: PropTypes.string,
    addOrganizationSchema: PropTypes.bool,
    bgColor: PropTypes.string,
    restrictWidth: PropTypes.bool,
    hideMobileBtns: PropTypes.bool,
    additionalSchema: PropTypes.any,
    pageContext: PropTypes.any,
    pathName: PropTypes.string,
    isBlogPost: PropTypes.bool,
    datePublished: PropTypes.string,
    metaImage: PropTypes.any
}

export default Layout;