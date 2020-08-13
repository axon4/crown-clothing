import React from 'react';
import './CollectionItem.scss';

type CollectionItem = {
	id:number;
	name:string;
	price:number;
	imageURL:string;
};

const CollectionItem = ({ id, name, price, imageURL }:CollectionItem) => {
	return (
		<div className='collection-item'>
			<div className='image' style={{backgroundImage: `url(${imageURL})`}}></div>
			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
		</div>
	);
};

export default CollectionItem;