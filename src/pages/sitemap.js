import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../structure/Layout';

import { toTitleCase } from '../constants/Format';

const sitemap = (props) => {
    const allSitePage = props.data.allSitePage;
    return (
        <Layout
            bgColor='#FFFFFF'
            title='Site Map'
            description='The Site Map For Alliance Disposal Provider Of Online Waste Services. Find Any Page You Need For Alliance Disposal With The Site Map.'
            pageContext={props.pageContext}
            canonicalPath={props.location.pathname}
        >
            <div style={{padding: '20px 20px', maxWidth: 768, margin: '0 auto'}}>

                <h1
                    style={{borderBottom: 'solid 1px #D7D7D8', fontSize: 24, paddingBottom: 7}}
                >
                    Alliance Disposal Site Map
                </h1>

                <h4 style={{marginBottom: 10}}>
                    Main Pages
                </h4>
                <ul
                    style={{padding: 0, margin: 0, listStyle: 'none', paddingBottom: 25, borderBottom: 'solid 1px #D7D7D8'}}
                >
                    <li><Link to={'/'}>Home</Link></li>
                    {
                        allSitePage.edges.map(item => {
                            if (
                                !item.node.path.includes('service-areas')
                                && !item.node.path.includes('trash-talks-blog')
                                && !item.node.path.includes('knowledge-base')
                                && !item.node.path.includes('404')
                                && !item.node.path.includes('internet-explorer-page')
                                && !item.node.path.includes('checkout')
                                && !item.node.path.includes('roll-off-scheduled')
                                && item.node.path !== '/'
                            ) {
                                const convertSpaces = item.node.context.breadcrumb.crumbs[
                                    item.node.context.breadcrumb.crumbs.length - 1
                                ].crumbLabel.replace(/-/g, ' ');
                                const formattedLabel = toTitleCase(convertSpaces);
                                return <li key={formattedLabel}><Link to={item.node.path}>{formattedLabel}</Link></li>
                            }
                            return null;
                        })
                    }
                </ul>

                <h4 style={{marginBottom: 10}}>
                    Knowledge Base
                </h4>
                <ul
                    style={{padding: 0, margin: 0, listStyle: 'none', paddingBottom: 25, borderBottom: 'solid 1px #D7D7D8'}}
                >
                    {
                        allSitePage.edges.map(item => {
                            if (
                                item.node.path.includes('knowledge-base')
                            ) {
                                const convertSpaces = item.node.context.breadcrumb.crumbs[
                                    item.node.context.breadcrumb.crumbs.length - 1
                                ].crumbLabel.replace(/-/g, ' ');
                                const formattedLabel = toTitleCase(convertSpaces);
                                return <li key={formattedLabel}><Link to={item.node.path}>{formattedLabel}</Link></li>
                            }
                            return null;
                        })
                    }
                </ul>

                <h4 style={{marginBottom: 10}}>
                    Service Areas
                </h4>
                <ul
                    style={{padding: 0, margin: 0, listStyle: 'none', paddingBottom: 25, borderBottom: 'solid 1px #D7D7D8'}}
                >
                    {
                        allSitePage.edges.map(item => {
                            if (
                                item.node.path.includes('service-areas')
                            ) {
                                const convertSpaces = item.node.context.breadcrumb.crumbs[
                                    item.node.context.breadcrumb.crumbs.length - 1
                                ].crumbLabel.replace(/-/g, ' ');
                                const formattedLabel = toTitleCase(convertSpaces);
                                return <li key={formattedLabel}><Link to={item.node.path}>{formattedLabel}</Link></li>
                            }
                            return null;
                        })
                    }
                </ul>

                <h4 style={{marginBottom: 10}}>
                    Trash Talks Blog
                </h4>
                <ul
                    style={{padding: 0, margin: 0, listStyle: 'none', paddingBottom: 25, borderBottom: 'solid 1px #D7D7D8'}}
                >
                    {
                        allSitePage.edges.map(item => {
                            if (
                                item.node.path.includes('trash-talks-blog')
                            ) {
                                const convertSpaces = item.node.context.breadcrumb.crumbs[
                                    item.node.context.breadcrumb.crumbs.length - 1
                                ].crumbLabel.replace(/-/g, ' ');
                                const formattedLabel = toTitleCase(convertSpaces);
                                return <li key={formattedLabel}><Link to={item.node.path}>{formattedLabel}</Link></li>
                            }
                            return null;
                        })
                    }
                </ul>

            </div>
        </Layout>
    );
};

export default sitemap;

export const pageQuery = graphql`
  query allPagesQuery {
    allSitePage {
        edges {
          node {
            path
            context {
              breadcrumb {
                crumbs {
                  crumbLabel
                }
              }
            }
          }
        }
      }
  }
`