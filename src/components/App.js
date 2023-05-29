import '../styles/App.css';
import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import BackArrow from '../images/back-arrow.png';
import SvgBackArrow from '../svgs/SvgBackArrow.js';
import Footer from './Footer.js';

const SUBROUTES = new Set(['/posts', '/resume', '/projects']);

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
