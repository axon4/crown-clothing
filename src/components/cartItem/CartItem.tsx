import React from 'react';
import './CartItem.scss';

export type CartItem = {
	item: {
		name: string;
		imageURL: string;
		price: number;
		quantity: number;
	}
};

const CartItem = ({ item: { name, imageURL, price, quantity } }: CartItem) => {
	return (
		<div className='cart-item'>
			<img src={imageURL} alt={`Cart-Item: (${name})`} />
			<div className='item-details'>
				<span className='name'>{name}</span>
				<span className='price'>{quantity} &#10005; £{price}</span>
			</div>
		</div>
	);
};

export default React.memo(CartItem);