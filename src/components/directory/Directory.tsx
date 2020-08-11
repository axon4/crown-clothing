import React from 'react';
import './Directory.scss';
import MenuItem from '../menuItem/MenuItem';

type MenuItems = {
	title:string;
	imageURL:string;
	id:number;
	size:string
};

class Directory extends React.Component<Object, any> {
	constructor(props:object) {
		super(props);

		this.state = {
			sections: [
				{
				  title: 'hats',
				  imageURL: 'https://i.ibb.co/cvpntL1/hats.png',
				  id: 1
				},
				{
				  title: 'jackets',
				  imageURL: 'https://i.ibb.co/px2tCc3/jackets.png',
				  id: 2
				},
				{
				  title: 'sneakers',
				  imageURL: 'https://i.ibb.co/0jqHpnp/sneakers.png',
				  id: 3
				},
				{
				  title: 'womens',
				  imageURL: 'https://i.ibb.co/GCCdy8t/womens.png',
				  size: 'large',
				  id: 4
				},
				{
				  title: 'mens',
				  imageURL: 'https://i.ibb.co/R70vBrQ/men.png',
				  size: 'large',
				  id: 5
				}
			  ]
		};
	};

	render() {
		return (
			<div className='directory-menu'>
				{
					this.state.sections.map(({ title, imageURL, id, size }:MenuItems) => (
						<MenuItem key={id} title={title} imageURL={imageURL} size={size} />
					))
				}
			</div>
		);
	};
};

export default Directory;