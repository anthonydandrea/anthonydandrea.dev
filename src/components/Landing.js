import '../styles/App.css';
import HeadshotSrc from '../images/headshot.jpeg';
import App from './App.js';
import React from 'react';
import { POSTS, CV, PROJECTS } from '../routes.js';

function Landing() {
	return (
		<App>
			<img src={HeadshotSrc} className='App-logo' alt='logo' />
			<p>Hi! I&apos;m Anthony D&apos;Andrea, a software engineer based in New York City.</p>
			<div className='link-row'>
				<a href={PROJECTS} className='link'>Projects</a>
				<a className='link-separator'>|</a>
				{/* <a href={process.env.PUBLIC_URL + 'resume.pdf'} className='link' target="_blank" rel="noreferrer">Resume</a> */}
				<a href={CV} className='link'>CV</a>
				<a className='link-separator'>|</a>
				<a href={POSTS} className='link'>Posts</a>
			</div>
		</App>
	);
}

export default Landing;
