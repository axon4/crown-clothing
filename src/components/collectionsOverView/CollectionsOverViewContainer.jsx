import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import WithSpinner from '../withSpinner/WithSpinner';
import CollectionsOverView from './CollectionsOverView';
import { selectAreCollectionsFetching } from '../../redux/shop/shopSelectors';

const mapStateToProps = createStructuredSelector({
	isLoading: selectAreCollectionsFetching
});

const CollectionsOverViewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverView));

export default CollectionsOverViewContainer;