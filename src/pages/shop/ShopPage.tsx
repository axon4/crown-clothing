import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import WithSpinner from '../../components/withSpinner/WithSpinner';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebaseUtils';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collectionsOverview/CollectionsOverview';
import CollectionPage from '../collection/CollectionPage';
import { updateCollections } from '../../redux/shop/shopActions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component<any> {
	state = {
		loading: true
	};

	unsubscribeFromSnapshot!:() => void;

	componentDidMount() {;
		const { updateCollections } = this.props;
		const collectionReference = firestore.collection('collections');

		this.unsubscribeFromSnapshot = collectionReference.onSnapshot(async snapshot => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			updateCollections(collectionsMap);
			this.setState({loading: false});
		});
	};
	
	render() {
		const { loading } = this.state;
		const { match } = this.props;

		return (
			<div className='shop-page'>
				<Route exact path={`${match.path}`} render={props =>
					<CollectionsOverviewWithSpinner isLoading={loading} {...props} />}
				/>
				<Route path={`${match.path}/:collectionID`} render={props =>
				<CollectionPageWithSpinner isLoading={loading} {...props} />}
				/>
			</div>
		);
	};
};

const mapDispatchToProps = (dispatch:Dispatch) => ({
	updateCollections: (collectionsMap:object) => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);