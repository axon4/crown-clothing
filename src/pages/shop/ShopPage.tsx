import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import CollectionsOverview from '../../components/collectionsOverview/CollectionsOverview';
import CollectionPage from '../collection/CollectionPage';

const ShopPage = ({ match }:RouteComponentProps) => {
	return (
		<div className='shop-page'>
			<Route exact path={`${match.path}`} component={CollectionsOverview} />
			<Route path={`${match.path}/:collectionID`} component={CollectionPage} />
		</div>
	);
};

export default ShopPage;