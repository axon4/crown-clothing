import React, { Fragment } from 'react';
import './CollectionPreview.scss';
import CollectionItem from '../../components/collectionItem/CollectionItem';

export interface ICollectionPreview  {
	title:string;
	items:Array<any>
};

const CollectionPreview = ({ title, items }:ICollectionPreview) => {
	return (
		<Fragment>
			<div className='collection-preview'>
				<h1>{title.toUpperCase()}</h1>
				<div className='preview'>
					{
						items.filter((item, i) => i < 4).map(({ id, ...otherItemProps }) => (
							<CollectionItem key={id} {...otherItemProps} />
						))
					}
				</div>
			</div> 
		</Fragment>
	);
};

export default CollectionPreview;