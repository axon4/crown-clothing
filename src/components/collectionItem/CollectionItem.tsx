import React, { Fragment } from 'react';
import './CollectionItem.scss';

type CollectionItem = {
	id:number;
	name:string;
	price:number;
	imageURL:string
};

const CollectionItem = ({ id, name, price, imageURL }:CollectionItem) => {
	return (
		<Fragment>
			<div className='collection-item'>
				<div className='image' style={{backgroundImage: `url(${imageURL})`}}></div>
				<div className='collection-footer'>
					<span className='name'>{name}</span>
					<span className='price'>{price}</span>
				</div>
			</div>
		</Fragment>
	);
};

export default CollectionItem;