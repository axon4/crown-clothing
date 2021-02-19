import React, { useEffect, lazy, Suspense } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import ErrorBoundary from '../../components/errorBoundary/ErrorBoundary';
// import CollectionsOverViewContainer from '../../components/collectionsOverView/CollectionsOverViewContainer';
// import CollectionPageContainer from '../collection/CollectionPageContainer';
import Spinner from '../../components/spinner/Spinner';
import { fetchCollections } from '../../redux/shop/shopActions';

const CollectionsOverViewContainer = lazy(() => import('../../components/collectionsOverView/CollectionsOverViewContainer'));
const CollectionPageContainer = lazy(() => import('../collection/CollectionPageContainer'));

type ShopPageProps = {
	fetchCollections: () => any,
	match: RouteProps
};

const ShopPage = ({ fetchCollections, match }: ShopPageProps) => {
	useEffect(() => {
		fetchCollections();
	}, [fetchCollections]);

	return (
		<div className='shop-page'>
			<ErrorBoundary>
				<Suspense fallback={<Spinner />}>
					<Route exact path={`${match.path}`} component={CollectionsOverViewContainer} />
					<Route path={`${match.path}/:collectionID`} component={CollectionPageContainer} />
				</Suspense>
			</ErrorBoundary>
		</div>
	);
};

const mapDisPatchToProps = (disPatch: Dispatch) => ({
	fetchCollections: () => disPatch(fetchCollections())
});

export default connect(null, mapDisPatchToProps)(ShopPage);