import '../styles/App.css';
import React from 'react';
import Footer from './Footer.js';
import Header from './Header.js';

function App(props) {
	return (
		<div className='App'>
            <Header />
			<div className='App-content'>
				{props.children}
			</div>
			<Footer />
		</div>
	);
}

export default App;
