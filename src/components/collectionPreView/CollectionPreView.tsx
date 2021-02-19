import React from 'react';
import CollectionItem from '../collectionItem/CollectionItem';
import './CollectionPreView.scss';

export interface ICollectionPreView {
	title: string;
	items: Array<any>;
};

const CollectionPreView = ({ title, items }: ICollectionPreView) => {
	return (
		<div className='collection-preview'>
			<h1>{title.toUpperCase()}</h1>
			<div className='preview'>
				{items.filter((item, index) => index < 4).map(item => <CollectionItem key={item.ID} item={item} />)}
			</div>
		</div>
	);
};

export default CollectionPreView;