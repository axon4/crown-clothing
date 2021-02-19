import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreView, { ICollectionPreView } from '../collectionPreView/CollectionPreView';
import { RootState } from '../../redux/rootReducer';
import { selectCollectionsForPreView } from '../../redux/shop/shopSelectors';
import './CollectionsOverView.scss';

interface ICollectionProps extends ICollectionPreView {
	ID: number;
};

const CollectionsOverView = ({ collections }: any) => {
	return (
		<div className='collections-overview'>
			{collections.map(({ ID, ...otherCollectionProps }: ICollectionProps) => (
				<CollectionPreView key={ID} {...otherCollectionProps} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector<RootState, any>({
	collections: selectCollectionsForPreView
});

export default connect(mapStateToProps)(CollectionsOverView);