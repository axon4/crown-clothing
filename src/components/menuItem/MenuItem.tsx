import React, { Fragment } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import './MenuItem.scss';

type MenuItem = {
	title:string;
	imageURL:string;
	size:string;
	linkURL:string
};

const MenuItem = ({ title, imageURL, size, linkURL, history, match }:MenuItem & RouteComponentProps) => {
	return (
		<Fragment>
			<div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkURL}`)} >
				<div className='background-image' style={{backgroundImage: `url(${imageURL})`}}></div>
				<div className='content'>
					<h1 className='title'>{title.toUpperCase()}</h1>
					<span className='subtitle'>SHOP NOW</span>
				</div>
			</div>
		</Fragment>
	);
};

export default withRouter(MenuItem);