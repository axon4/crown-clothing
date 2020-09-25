import React, { useContext } from 'react';
import { CartContext } from '../../providers/cart/CartProvider';
import CustomButton from '../../components/customButton/CustomButton';
import './CollectionItem.scss';

const CollectionItem = ({ item }:{ item:any }) => {
	const { name, price, imageURL } = item;
	const { addItem } = useContext(CartContext);

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

export default CollectionItem;