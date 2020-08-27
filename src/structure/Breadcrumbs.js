import React from 'react';
import { Link } from 'gatsby';

import Colors from '../constants/Colors';
import { toTitleCase } from '../constants/Format';

const Breadcrumbs = (props) => {
    return (
        <nav aria-label='Breadcrumbs' role='navigation'>
            <ol
                style={{listStyle: 'none', padding: 0, margin: 0, width: '100%'}}
                vocab="https://schema.org/"
                typeof="BreadcrumbList"
            >
                {
                    props.crumbs.map((crumb, index) => {
                        const convertSpaces = crumb.crumbLabel.replace(/-/g, ' ');
                        const formattedLabel = toTitleCase(convertSpaces);

                        return (
                            <li
                                key={crumb.crumbLabel}
                                style={{display: 'inline-block', marginRight: 4}}
                                property="itemListElement"
                                typeof="ListItem"
                            >
                                {
                                    crumb.pathname === props.location.slice(0, -1)
                                        ? <span 
                                            style={{color: Colors.allianceBlue}}
                                            property="name"
                                        >
                                            {formattedLabel}
                                        </span>
                                        : (
                                            <Link
                                                to={crumb.pathname === '/' ? '/' : crumb.pathname + '/'}
                                                style={{color: '#515154'}}
                                                property="item"
                                                typeof="WebPage"
                                            >
                                                <span property="name">
                                                    {formattedLabel}
                                                </span>
                                            </Link>    
                                        )
                                }
                                {
                                    index < props.crumbs.length - 1
                                        ? <span style={{color: '#D8D8D8'}}> / </span>
                                        : null
                                }
                                <meta property="position" content={index + 1} />
                            </li>
                        )
                    })
                }
            </ol>
        </nav>
    );
};

export default Breadcrumbs;