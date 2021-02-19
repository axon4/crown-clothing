import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import WithSpinner from '../../components/withSpinner/WithSpinner';
import CollectionPage from './CollectionPage';
import { selectHaveCollectionsFetched } from '../../redux/shop/shopSelectors';

const mapStateToProps = createStructuredSelector({
	isLoading: state => !selectHaveCollectionsFetched(state)
});

const CollectionPageContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionPage);

export default CollectionPageContainer;