import React from 'react';
import { CartItem } from '../../components/cartItem/CartItem';
import './CheckoutItem.scss';

const CheckoutItem = ({ item: { imageURL, name, quantity, price } }:CartItem) => {
	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={imageURL} alt={`Checkout Item: ${1}`} />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>{quantity}</span>
			<span className='price'>{price}</span>
			<div className='remove-button'>&#10005;</div>
		</div>
	);
};

export default CheckoutItem;