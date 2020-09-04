import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsFetched } from '../../redux/shop/shopSelectors';
import WithSpinner from '../../components/withSpinner/WithSpinner';
import CollectionPage from './CollectionPage';

const mapStateToProps = createStructuredSelector({
	isLoading: state => !selectIsCollectionsFetched(state)
});

const CollectionPageContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionPage);

export default CollectionPageContainer;