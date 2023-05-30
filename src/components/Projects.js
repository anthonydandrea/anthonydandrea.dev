import React from 'react';
import ProjectsJson from '../json/projects.js';
import App from './App.js';
import Feed from './Feed.js';

function Projects() {
	return (
		<App>
			<Feed json={ProjectsJson} />
		</App>
	);
}

export default Projects;
