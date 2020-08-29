import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './CollectionsOverview.scss';
import { RootState } from '../../redux/rootReducer';
import { selectCollectionsForPreview } from '../../redux/shop/shopSelectors';
import CollectionPreview, { ICollectionPreview } from '../collectionPreview/CollectionPreview';

interface ICollectionProps extends ICollectionPreview {
	id:number
};

const CollectionsOverview = ({ collections }:any) => {
	return (
		<div className='collections-overview'>
			{collections.map(({ id, ...otherCollectionProps }:ICollectionProps) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector<RootState, any>({
	collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);