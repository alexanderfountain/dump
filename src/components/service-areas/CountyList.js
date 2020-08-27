import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

/**
 * 
 * @param {string[]} counties - a string array of counties for the county 
 */
const CountyList = (props) => {
    
    const data = useStaticQuery(
        graphql`
        query countyListIndex {
          allMdx(filter: {frontmatter: {level: {regex: "/county/"}}}) {
            edges {
              node {
                id
                excerpt
                frontmatter {
                  title
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      `
    )

    return (
        <div
            style={{height: 200, overflow: 'scroll', display: 'flex', flexWrap: 'wrap', maxWidth: 670, margin: '0 auto', padding: '10px', borderRadius: 4, backgroundColor: '#F9F9F9', boxShadow: 'inset 0 0 7px #000000', marginBottom: 60}}
        >
            {props.counties.map(county => {
                const allPaths = data.allMdx.edges;
                const validPaths = allPaths.filter(node => {
                    const slug = Object.values(node)[0].fields.slug;

                    if (
                        slug.includes(
                            county.toLowerCase().replace(' ', '-')
                        )
                    ) return slug;

                    return null;
                });

                let path = null;
                if (validPaths.length > 0) {
                    path = validPaths[0].node.fields.slug;
                }

                return(
                    <div
                        key={county}
                        style={{width: 'calc(50% - 15px)', marginBottom: 15, marginRight: 15}}
                    >
                        {
                            path
                                ? <Link to={path}>{county}</Link>
                                : <>{county}</>
                        }
                    </div>
                )
            })}
        </div>
    );
};

export default CountyList;