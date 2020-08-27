import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { CartItem } from '../../components/cartItem/CartItem';
import { removeItemFromCart, addItem, subtractItem } from '../../redux/cart/cartActions';
import './CheckoutItem.scss';

type CheckoutItemProps = CartItem & {
	addItem:(item:any) => object,
	subtractItem:(item:any) => object,
	removeItem:(item:any) => object
};

const CheckoutItem = ({ item, addItem, subtractItem, removeItem }:CheckoutItemProps) => {
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

const mapDispatchToProps = (dispatch:Dispatch) => ({
	addItem: (item:any) => dispatch(addItem(item)),
	subtractItem: (item:any) => dispatch(subtractItem(item)),
	removeItem: (item:any) => dispatch(removeItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);