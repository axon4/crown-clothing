import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { selectCollection } from '../../redux/shop/shopSelectors';
import './CollectionPage.scss';
import CollectionItem from '../../components/collectionItem/CollectionItem';

const CollectionPage = ({ collection }:any) => {
	const { title, items } = collection;

	return (
		<div className='collection-page'>
			<h2 className='title'>{title}</h2>
			<div className='items'>
				{items.map((item:any) => <CollectionItem key={item.id} item={item} />)}
			</div>
		</div>
	);
};

const mapStateToProps = (state:RootState, ownProps:any) => ({
	collection: selectCollection(ownProps.match.params.collectionID)(state)
});

export default connect(mapStateToProps)(CollectionPage);