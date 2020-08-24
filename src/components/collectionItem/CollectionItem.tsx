import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../../components/customButton/CustomButton';
import { addItem } from '../../redux/cart/cartActions';
import './CollectionItem.scss';
import { Dispatch } from 'redux';

type CollectionItem = {
	item:any,
	addItem:(item:any) => any
};

const CollectionItem = ({ item, addItem }:CollectionItem) => {
	const { name, price, imageURL } = item;

	return (
		<div className='collection-item'>
			<div className='image' style={{backgroundImage: `url(${imageURL})`}}></div>
			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<CustomButton onClick={() => addItem(item)} inverted>Add to Cart</CustomButton>
		</div>
	);
};

const mapDispatchToProps = (dispatch:Dispatch) => {
	return {
		addItem: (item:any) => dispatch(addItem(item))
	};
};

export default connect(null, mapDispatchToProps)(CollectionItem);