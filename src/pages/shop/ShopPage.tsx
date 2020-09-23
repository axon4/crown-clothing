import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Route, RouteProps } from 'react-router-dom';
import CollectionsOverviewContainer from '../../components/collectionsOverview/CollectionsOverviewContainer';
import CollectionPageContainer from '../collection/CollectionPageContainer';
import { fetchCollections } from '../../redux/shop/shopActions';

type ShopPageProps = {
	fetchCollections:() => any,
	match:RouteProps
};

const ShopPage = ({ fetchCollections, match }:ShopPageProps) => {
	useEffect(() => fetchCollections(), [fetchCollections]);

	return (
		<div className='shop-page'>
			<Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
			<Route path={`${match.path}/:collectionID`} component={CollectionPageContainer} />
		</div>
	);
};

const mapDispatchToProps = (dispatch:Dispatch) => ({
	fetchCollections: () => dispatch(fetchCollections())
});

export default connect(null, mapDispatchToProps)(ShopPage);