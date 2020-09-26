import React, { useContext } from 'react';
import { CartItem } from '../../components/cartItem/CartItem';
import { CartContext } from '../../providers/cart/CartProvider';
import './CheckoutItem.scss';

const CheckoutItem = ({ item }:CartItem) => {
	const { addItem, subtractItem, removeItem } = useContext(CartContext);
	const { imageURL, name, quantity, price } = item;

	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={imageURL} alt={`Checkout Item: ${name}`} />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<div className='arrow' onClick={() => subtractItem(item)}>&#10094;</div>
				<span className='quantity-value'>{quantity}</span>
				<div className='arrow' onClick={() => addItem(item)}>&#10095;</div>
			</span>
			<span className='price'>{price}</span>
			<div className='remove-button' onClick={() => removeItem(item)}>
				&#10005;
			</div>
		</div>
	);
};

export default CheckoutItem;