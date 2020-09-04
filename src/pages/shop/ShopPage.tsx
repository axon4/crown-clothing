import React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Route } from 'react-router-dom';
import CollectionsOverviewContainer from '../../components/collectionsOverview/CollectionsOverviewContainer';
import CollectionPageContainer from '../collection/CollectionPageContainer';
import { fetchCollectionsAsync } from '../../redux/shop/shopActions';

class ShopPage extends React.Component<any> {
	componentDidMount() {
		const { fetchCollectionsAsync } = this.props;

		fetchCollectionsAsync();
	};
	
	render() {
		const { match } = this.props;

		return (
			<div className='shop-page'>
				<Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
				<Route path={`${match.path}/:collectionID`} component={CollectionPageContainer} />
			</div>
		);
	};
};

const mapDispatchToProps = (dispatch:ThunkDispatch<any, any, any>) => ({
	fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);