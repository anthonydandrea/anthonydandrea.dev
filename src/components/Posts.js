import React from 'react';
import App from './App';
import Feed from './Feed';
import PostsJson from '../json/posts.json';

function Posts() {
	return (
        <App>
            <Feed json={PostsJson} />
        </App>
	);
}

export default Posts;
