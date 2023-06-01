import '../styles/cv.css';
import React from 'react';
import CvJson from '../json/cv.js';
import App from './App.js';

function expandBullets(section, bulletLevel = 1) {
	if (!section.bullets) {
		return null;
	}

	return (
		<div key={section.title + section.text} className={`cv-bulletlevel-${bulletLevel}` + (bulletLevel == 1 ? ' cv-section' : '')}>
			{section.bullets.map(bullet => (
				<>
					<p key={bullet.text} className='cv-bullet'>• {bullet.text}</p>
					{expandBullets(bullet, bulletLevel + 1)}
				</>
			))}
		</div>
	);
}

function expandCvJson() {
	return (
		<div className='cv-containers-wrapper'>
			{CvJson.map((section, idx) => (
                <>
				<div className='cv-section-container' key={section.title}>
					<div className='cv-top-section cv-section'>
						<div className='cv-headline'>
							<h2 className='cv-section-title'>{section.title}</h2>
							<i>{section.timeframe}</i>
						</div>
						<div className='cv-headline-right'>
							<img src={section.imageUri} alt={section.title} className='cv-section-image'/>
						</div>
					</div>
					{section.roles ? <div className='cv-role-section cv-section'>
						{section.roles.map(role => (
							<h4 key={role} className='cv-role'>{role}</h4>
						))}</div> : null}
					{expandBullets(section)}
                </div>
                { idx < CvJson.length - 1 ? <hr className='cv-section-separator' /> : null }
                </>
			))}
		</div>
	);
}

function Cv() {
	return (
		<App>
			{expandCvJson()}
		</App>
	);
}

export default Cv;
