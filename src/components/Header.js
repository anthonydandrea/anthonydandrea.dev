import '../styles/header.css';
import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import SvgBackArrow from '../svgs/SvgBackArrow.js';
import {CV, POSTS, PROJECTS} from '../routes.js';

const TOP_LEVEL_ROUTES = [`/${POSTS}`, `/${CV}`, `/${PROJECTS}`];
const SUBROUTES = new Set();
for (const route of TOP_LEVEL_ROUTES) {
	// Local development, url doesn't end with /,
	// but prod does for some reason
	SUBROUTES.add(route);
	SUBROUTES.add(route + '/');
}

const CV_SUBROUTES = [`/${CV}`, `/${CV}/`];

function Header() {
	const location = useLocation();
	return (
		<header className='App-header'>
            <div className='App-header-internal'>
			{
				SUBROUTES.has(location.pathname) ? (
					<Link to='/'>
						<SvgBackArrow className='back-arrow' />
					</Link>
				) : null
			}
            {
                CV_SUBROUTES.find(val => val == location.pathname) ? (
                    <a href='/resume.pdf' className='link one-pager-link' target="_blank" rel="noreferrer">Link to 1-pager PDF</a>
                ) : null
            }
            </div>
		</header>
	);
}

export default Header;
