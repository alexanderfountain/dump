import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

/**
 * Displays a list of all towns in a county
 * @param {String} county The county name that the towns are related to
 * @param {String[]} towns A string array of towns for the county 
 */
const TownsList = ({ county, towns }) => {
    
    const data = useStaticQuery(
        graphql`
        query townListIndex {
          allMdx(filter: {frontmatter: {level: {regex: "/town/"}}}) {
            edges {
              node {
                id
                excerpt
                frontmatter {
                  county
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
            style={{height: 200, overflow: 'scroll', display: 'flex', flexWrap: 'wrap', maxWidth: 670, margin: '0 auto', padding: '10px', borderRadius: 4, backgroundColor: '#F9F9F9', boxShadow: 'inset 0 0 7px #000000'}}
        >
            {towns.map(town => {
                const allPaths = data.allMdx.edges;
                const validPaths = allPaths.filter(node => {
                    const slug = Object.values(node)[0].fields.slug;
                    
                    if (
                        slug.includes(
                            town.toLowerCase().split(' ').join('-')
                        )
                        && (Object.values(node)[0].frontmatter.county.toLowerCase() === county.toLowerCase())
                    ) return slug;

                    return null;
                });

                let path = null;
                if (validPaths.length > 0) {
                    path = validPaths[0].node.fields.slug;
                }

                return(
                    <div
                        key={town}
                        style={{width: 'calc(50% - 15px)', marginBottom: 15, marginRight: 15}}
                    >
                        {
                            path
                                ? <Link to={path}>{town}</Link>
                                : <>{town}</>
                        }
                    </div>
                )
            })}
        </div>
    );
};

export default TownsList;