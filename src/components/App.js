import '../styles/App.css';
import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import SvgBackArrow from '../svgs/SvgBackArrow.js';
import Footer from './Footer.js';

const TOP_LEVEL_ROUTES = ['/posts', '/resume', '/projects'];
const SUBROUTES = new Set();
TOP_LEVEL_ROUTES.forEach(route => {
    // local development, url doesn't end with /,
    // but prod does for some reason
    SUBROUTES.add(route);
    SUBROUTES.add(route + '/');
});

function App(props) {
	const location = useLocation();

	return (
		<div className='App'>
			<header className='App-header'>
				{ SUBROUTES.has(location.pathname) ? (
					<Link to='/'>
						<SvgBackArrow className='back-arrow' />
					</Link>
				) : null}
			</header>
			<div className='App-content'>
				{props.children}
			</div>
			<Footer />
		</div>
	);
}

export default App;
