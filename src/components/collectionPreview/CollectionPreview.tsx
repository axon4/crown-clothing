import React from 'react';
import CollectionItem from '../../components/collectionItem/CollectionItem';
import './CollectionPreview.scss';

export interface ICollectionPreview  {
	title:string;
	items:Array<any>;
};

const CollectionPreview = ({ title, items }:ICollectionPreview) => {
	return (
		<div className='collection-preview'>
			<h1>{title.toUpperCase()}</h1>
			<div className='preview'>
				{
					items.filter((item, i) => i < 4).map(item => (
						<CollectionItem key={item.id} item={item} />
					))
				}
			</div>
		</div> 
	);
};

export default CollectionPreview;