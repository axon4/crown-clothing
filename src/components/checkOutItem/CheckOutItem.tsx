import React, { useContext } from 'react';
import { CartConText } from '../../providers/cart/CartProvider';
import { CartItem } from '../cartItem/CartItem';
import './CheckOutItem.scss';

const CheckOutItem = ({ item }: CartItem) => {
	const { addItem, subTractItem, reMoveItem } = useContext(CartConText);
	
	const { imageURL, name, quantity, price } = item;

	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={imageURL} alt={`CheckOut-Item: ${name}`} />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<div className='arrow' onClick={() => {subTractItem(item)}}>&#10094;</div>
				<span className='quantity-value'>{quantity}</span>
				<div className='arrow' onClick={() => {addItem(item)}}>&#10095;</div>
			</span>
			<span className='price'>{price}</span>
			<div className='remove-button' onClick={() => {reMoveItem(item)}}>
				&#10005;
			</div>
		</div>
	);
};

export default CheckOutItem;