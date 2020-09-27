import React, { useEffect, lazy, Suspense } from 'react';
import ErrorBoundary from '../../components/errorBoundary/ErrorBoundary';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Route, RouteProps } from 'react-router-dom';
// import CollectionsOverviewContainer from '../../components/collectionsOverview/CollectionsOverviewContainer';
// import CollectionPageContainer from '../collection/CollectionPageContainer';
import Spinner from '../../components/spinner/Spinner';
import { fetchCollections } from '../../redux/shop/shopActions';

const CollectionsOverviewContainer = lazy(() => import('../../components/collectionsOverview/CollectionsOverviewContainer'));
const CollectionPageContainer = lazy(() => import('../collection/CollectionPageContainer'));

type ShopPageProps = {
	fetchCollections:() => any,
	match:RouteProps
};

const ShopPage = ({ fetchCollections, match }:ShopPageProps) => {
	useEffect(() => {
		fetchCollections();
	}, [fetchCollections]);

	return (
		<div className='shop-page'>
			<ErrorBoundary>
				<Suspense fallback={<Spinner />}>
					<Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
					<Route path={`${match.path}/:collectionID`} component={CollectionPageContainer} />
				</Suspense>
			</ErrorBoundary>
		</div>
	);
};

const mapDispatchToProps = (dispatch:Dispatch) => ({
	fetchCollections: () => dispatch(fetchCollections())
});

export default connect(null, mapDispatchToProps)(ShopPage);