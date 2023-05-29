import React from 'react';
import '../styles/feed.css';

function Feed(props) {
	return (
		<React.Fragment>
			{props.json.map(item => {
                return (
                    <div key={item.name} onClick={() => window.open(item.redirectUrl, "_blank")} className="feed-item">
                <div className='feed-item-column'>
                    <div className='feed-item-image-wrapper'><img src={item.imageUrl} className="feed-item-image-small" /></div></div>
                <div className='feed-item-column'><h2>{item.name}</h2>
                <p>{item.shortDescription}</p></div>
                </div>
                );
            })}
		</React.Fragment>
	);
}

export default Feed;
